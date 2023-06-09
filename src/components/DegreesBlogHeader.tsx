import { useEffect, useState } from 'react';
import { createClient } from '@sanity/client';
import groq from 'groq';
import Image from 'next/image';

interface Post {
  id: string;
  title: string;
  slug: string;
  imageUrl: string;
  publishedAt: string;
}

// Setup the Sanity client
const client = createClient({
  projectId: '6lzxcfox',
  dataset: 'production',
  useCdn: true
});

export default function DegreesBlogHeader() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = () => {
      const query = groq`*[_type == "post" && "Degrees" in categories[]->title && defined(mainImage)] {         
        title,
        "slug": slug.current,
        "imageUrl": mainImage.asset->url,
        publishedAt,
      }`;

      client.fetch(query)
        .then((data: Post[]) => setPosts(data))
        .catch((error) => console.error("Error fetching posts:", error));
    };

    fetchPosts();
  }, []);

  return (
    <div className="bg-gray-900 py-1 sm:py-1">
        <hr className="border-t border-gray-700 mb-6"></hr>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">Browse Degrees in Computer Science</h2>
          <p className="mt-5 text-lg leading-8 text-gray-200">
            Explore computer science degrees to build a successful future in tech.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-4 mb-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
            >
              <div className="absolute inset-0 -z-10">
                <Image src={post.imageUrl} alt="" layout="fill" objectFit="cover" />
              </div>
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

              <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-200">
                <time dateTime={post.publishedAt} className="mr-8">
                  {new Date(post.publishedAt).toLocaleDateString()}
                </time>
                <div className="-ml-4 flex items-center gap-x-4">
                  <svg viewBox="0 0 2 2" className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
                    <circle cx={1} cy={1} r={1} />
                  </svg>
                </div>
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-200">
                <a href={`/degrees/${post.slug}`}>
                  <span className="absolute inset-0" />
                  {post.title}
                </a>
              </h3>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
