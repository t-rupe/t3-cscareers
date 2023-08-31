import React from 'react';
import { groq } from 'next-sanity';
import { getClient } from '../../../sanity';
import CareerLayout from './layout';
import { PortableText, type PortableTextComponentProps } from '@portabletext/react'
import type { PortableTextBlock, PortableTextMarkDefinition, PortableTextSpan, ArbitraryTypedObject } from '@portabletext/types'
import Image from 'next/image';
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'

interface ResponsiveImage {
  width: number;
  title: string; 
  srcSet: string;
  src: string;
  height: number;
  sizes: string;
  bgColor: string;
  aspectRatio: number;
  alt: string;
}

interface FeaturedImage {
  alt: string;
  responsiveImage: ResponsiveImage;
}

type MyBlock = PortableTextBlock<PortableTextMarkDefinition, PortableTextSpan | ArbitraryTypedObject>;

interface Category {
  _ref: string;
  _type: string;
  _key: string;
  title: string;  // We add a title field to our Category interface
}

interface Article {
  title: string;
  datePublished: string;
  content: MyBlock[];
  featuredImage: FeaturedImage;
  metaDescription: string;
  categories: Category[];  // Categories is now an array of Category objects
}

interface BlogPostProps {
  article: Article;
}


type BlockComponent = React.FC<PortableTextComponentProps<MyBlock>>;

interface Components {
  block: Record<'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'normal', BlockComponent>;
}

const components: Components = {
  block: {
    h1: ({ children }: PortableTextComponentProps<MyBlock>) => <h1>{children}</h1>,
    h2: ({ children }: PortableTextComponentProps<MyBlock>) => <h2>{children}</h2>,
    h3: ({ children }: PortableTextComponentProps<MyBlock>) => <h3>{children}</h3>,
    h4: ({ children }: PortableTextComponentProps<MyBlock>) => <h4>{children}</h4>,
    h5: ({ children }: PortableTextComponentProps<MyBlock>) => <h5>{children}</h5>,
    h6: ({ children }: PortableTextComponentProps<MyBlock>) => <h6>{children}</h6>,
    normal: ({ children }: PortableTextComponentProps<MyBlock>) => <p>{children}</p>,
  },
};

export default function BlogPost({ article }: BlogPostProps) {
  const {title, metaDescription } = article;

  const router = useRouter(); // Initialize useRouter
  const currentPath = router.asPath; // Get the current path
  const baseCanonicalUrl = "https://computerscience.careers/"; // Replace with your actual domain
  const fullCanonicalUrl = `${baseCanonicalUrl}${currentPath}`; // Construct the full canonical URL

  const seoConfig = {
    title,
    description: metaDescription,
      canonical: fullCanonicalUrl, // Replace with the actual canonical URL
  };


  return (
    <CareerLayout title={title} metaDescription={metaDescription}>
      <NextSeo {...seoConfig} />
      <div className="bg-gray-900 px-6 py-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-base leading-7 prose prose-lightgray">
          <h1 className="mt-2 text-3xl font-bold tracking-tight prose prose-lightgray sm:text-4xl">{article.title}</h1>
          <p className="mt-2 prose prose-lightgray">{new Date(article.datePublished).toLocaleDateString()}</p>     
          <div className="mt-6 text-xl leading-8 prose prose-lightgray">
            {article.featuredImage && (
              <div className="mt-6">
                <Image 
                    className="w-full" 
                    src={article.featuredImage.responsiveImage.src} 
                    alt={article.featuredImage.alt} 
                    width={article.featuredImage.responsiveImage.width}
                    height={article.featuredImage.responsiveImage.height}
                  />
              </div>
            )}
            <PortableText value={article.content} components={components} />
          </div>
        </div>
      </div>
    </CareerLayout>
  );
}

export async function getServerSideProps({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const query = groq`
    *[_type == "post" && slug.current == $slug]{
      title,
      "datePublished": publishedAt,
      "content": body[],
      "featuredImage": {
        "alt": mainImage.alt,
        "responsiveImage": {
          "src": mainImage.asset->url,
          "width": mainImage.asset->metadata.dimensions.width,
          "height": mainImage.asset->metadata.dimensions.height
        }
      },
      "categories": categories[]->,  // We use the -> operator to populate the references
      metaDescription
    }[0]
  `;
  const data: Article = await getClient().fetch(query, { slug });

  // If no article found or the article does not belong to the "Careers" category
  if (!data || !data.categories.map(category => category.title).includes("Careers")) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      article: data,
    },
  };
}