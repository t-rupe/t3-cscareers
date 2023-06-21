import { NextApiRequest, NextApiResponse } from 'next';
import { create } from 'xmlbuilder2';
import { groq } from 'next-sanity';
import { getClient } from '../../../sanity'; 

type Route = string;

interface SanityPostSlug {
    slug: string;
  }

async function getStaticRoutes(): Promise<Route[]> {
    return [
        '/',
        '/privacy-policy',
        '/terms-of-use',
        '/career',
    ];
}

async function getDynamicCareerRoutes(): Promise<Route[]> {
    const query = groq`*[_type == "post"]{ "slug": slug.current }`;
    const data: SanityPostSlug[] = await getClient().fetch(query);
    return data.map((item: SanityPostSlug) => `/career/${item.slug}`);
}

export default async function sitemap(req: NextApiRequest, res: NextApiResponse) {
    const staticRoutes = await getStaticRoutes();
    const dynamicCareerRoutes = await getDynamicCareerRoutes();
    const routes = [...staticRoutes, ...dynamicCareerRoutes];

    const sitemap = create({ version: '1.0', encoding: 'UTF-8' }, {
        urlset: {
            '@xmlns': 'http://www.sitemaps.org/schemas/sitemap/0.9',
            url: routes.map((route) => ({
                loc: `https://computerscience.careers${route}`,
                changefreq: 'weekly',
                priority: 0.5,
            })),
        },
    });

    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemap.end({ prettyPrint: true }));
    res.end();
}
