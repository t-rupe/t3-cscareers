import { create } from 'xmlbuilder2';
import { groq } from 'next-sanity';
import { getClient } from '../../../sanity'; // Update the path based on your project structure


// A function that returns all your routes
async function getStaticRoutes() {
    return [
        '/',
        '/privacy-policy',
        '/terms-of-use',
        '/career',
        // Add more static routes if you have them
    ];
}

async function getDynamicCareerRoutes() {
    const query = groq`*[_type == "post"]{ "slug": slug.current }`;
    const data = await getClient().fetch(query);
    return data.map(item => `/career/${item.slug}`);
}


export default async function sitemap(req, res) {
    // Fetch all routes
    const staticRoutes = await getStaticRoutes();
    const dynamicCareerRoutes = await getDynamicCareerRoutes();
    const routes = [...staticRoutes, ...dynamicCareerRoutes];

    // Create an xml sitemap
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

    // Return the xml
    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemap.end({ prettyPrint: true }));
    res.end();
}
