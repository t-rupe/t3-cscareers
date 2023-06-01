import { ComputerDesktopIcon, CogIcon, CircleStackIcon, UserGroupIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

const careers = [
  {
    name: 'Software Development',
    description:
      'Software developers are the creative minds behind computer programs. They design, develop, and optimize systems and applications.',
    href: '/career/software-developer',
    icon: ComputerDesktopIcon,
  },
  {
    name: 'Data Science',
    description:
      'Data scientists use their advanced computational and analytical skills to gather insights from large, complex data sets.',
    href: '/career/data-scientist',
    icon: CircleStackIcon,
  },
  {
    name: 'Cybersecurity',
    description:
      'Cybersecurity professionals protect systems and networks from digital attacks. They maintain the integrity and confidentiality of sensitive information.',
    href: 'career/cybersecurity-analyst',
    icon: CogIcon,
  },
  {
    name: 'IT Project Management',
    description:
      'IT project managers are responsible for planning, executing, and overseeing the implementation of technology projects within an organization.',
    href: 'career/it-project-manager',
    icon: UserGroupIcon,
  },
]

export default function LandingCareer() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
        <Link href="/career">
        <button className="inline-block text-lg font-semibold leading-7 text-indigo-400 bg-transparent border border-indigo-400 hover:bg-indigo-400 hover:text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400 mb-4">
          Explore Careers
        </button>
      </Link>          <p className="mt-2 text-3x4 font-bold tracking-tight text-white sm:text-4xl">
            Discover the Different Paths in Computer Science
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            The field of Computer Science offers a diverse range of careers, each with its own unique set of skills and responsibilities. Whether you're interested in creating software, analyzing data, securing systems, or managing tech projects, there's a place for you in this dynamic industry.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {careers.map((career) => (
              <div key={career.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <career.icon className="h-5 w-5 flex-none text-indigo-400" aria-hidden="true" />
                  {career.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">{career.description}</p>
                  <p className="mt-6">
                    <a href={career.href} className="text-sm font-semibold leading-6 text-indigo-400">
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
