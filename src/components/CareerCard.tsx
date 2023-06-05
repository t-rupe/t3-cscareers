import Link from 'next/link'
import Image from 'next/image'

// Define the Career interface
interface Career {
  name: string;
  description: string;
  img: string;
  slug: string;
}

function CareerCard({ career }: {career: Career }) {
  return (
    <div className="max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow flex flex-col">
      <Link href="/career/[slug]" as={'/career/${career.slug}'}>
        <div className="relative h-40">
          <Image 
            src={career.img} 
            alt={career.name} 
            layout="fill" 
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>
      </Link>
      <div className="p-5 flex-grow flex flex-col justify-between">
        <div>
        <Link href="/career/[slug]" as={`/career/${career.slug}`}>
            <div>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{career.name}</h5>
            </div>
          </Link>
          <div className="h-38 overflow-hidden">
            <p className="mb-3 font-normal text-gray-400">{career.description}</p>
          </div>
        </div>
        <Link href="/career/[slug]" as={`/career/${career.slug}`}>
          <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-indigo-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
            Learn more
            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default CareerCard;
