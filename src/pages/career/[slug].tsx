import React from 'react';
import { groq } from 'next-sanity';
import { getClient } from '../../../sanity';
import CareerLayout from './layout';
import { PortableText, PortableTextComponentProps } from '@portabletext/react'
import type { PortableTextBlock, PortableTextMarkDefinition, PortableTextSpan, ArbitraryTypedObject } from '@portabletext/types'
import Image from 'next/image';

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

interface Article {
  title: string;
  datePublished: string;
  content: MyBlock[];
  featuredImage: FeaturedImage;
  metaDescription: string;
}

interface BlogPostProps {
  article: Article;
}

interface BlockComponentProps extends PortableTextComponentProps<MyBlock> {}

type BlockComponent = React.FC<BlockComponentProps>;

interface Components {
  block: Record<'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'normal', BlockComponent>;
}

const components: Components = {
  block: {
    h1: ({ children }: BlockComponentProps) => <h1>{children}</h1>,
    h2: ({ children }: BlockComponentProps) => <h2>{children}</h2>,
    h3: ({ children }: BlockComponentProps) => <h3>{children}</h3>,
    h4: ({ children }: BlockComponentProps) => <h4>{children}</h4>,
    h5: ({ children }: BlockComponentProps) => <h5>{children}</h5>,
    h6: ({ children }: BlockComponentProps) => <h6>{children}</h6>,
    normal: ({ children }: BlockComponentProps) => <p>{children}</p>,
  },
};

export default function BlogPost({ article }: BlogPostProps) {
  return (
    <CareerLayout>
      <div className="bg-gray-900 px-6 py-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-base leading-7 text-white">
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">{article.title}</h1>
          <p className="mt-2 text-gray-300">{new Date(article.datePublished).toLocaleDateString()}</p>
      
          <div className="mt-6 text-xl leading-8 prose dark:prose-invert">
            {article.featuredImage && (
              <div className="mt-6">
                <Image className="w-full" src={article.featuredImage.responsiveImage.src} alt={article.featuredImage.alt} />
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
    *[_type == "post" && slug.current == $slug][0] {
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
      metaDescription
    }
  `;
  const data = await getClient().fetch(query, { slug });

  return {
    props: {
      article: data,
    },
  };
}
