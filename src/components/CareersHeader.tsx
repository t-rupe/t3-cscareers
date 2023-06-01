import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ServerIcon,
} from '@heroicons/react/20/solid';
import CareerCard from './CareerCard';
const careers = [
  {
    name: 'Software Development',
    description: 'Design, code, and test computer software or mobile apps. Work in teams to make software efficient and user-friendly.',
    img: '/images/software-developer.jpg',
    slug: "software-developer",
  },
  {
    name: 'Data Science',
    description: 'Utilize statistical analysis and machine learning techniques to interpret, manage and leverage big data.',
    img: '/images/data-scientist-engineer.jpg',
    slug: "data-scientist",
    },
  {
    name: 'Web Development',
    description: 'Create and maintain websites or web applications. Work with both front-end and back-end coding languages.',
    img: '/images/web-developer.jpg',
    slug: "web-developer",
  },
  {
    name: 'Cybersecurity',
    description: 'Protect computer systems from theft or damage to their hardware, software, or electronic data.',
    img: '/images/cybersecurity-engineer.jpg',
    slug: "cybersecurity-analyst",
  },
  {
    name: 'Artificial Intelligence',
    description: 'Develop machines and software with intelligence to solve complex problems, often requiring extensive computational resources.',
    img: '/images/ai-engineer.jpg',
    slug: "ai-developer",
  },
  {
    name: 'Database Administration',
    description: 'Design, implement, maintain, and repair an organization’s database. Interact with database management systems software.',
    img: '/images/database-manager-now.jpg',
    slug: "database-administrator",
    },
  {
    name: 'Mobile App Development',
    description: 'Create mobile applications for smartphones and tablets, targeting various platforms such as iOS or Android.',
    img: '/images/mobile-app-developer.jpg',
    slug: "mobile-app-developer",
  },
  {
    name: 'UI/UX Design',
    description: 'Design user interfaces and experiences to enhance user satisfaction and interaction with digital products.',
    img: '/images/UX-UI-engineer-design.jpg',
    slug: "ui-ux-designer",
  },
  {
    name: 'Cloud Computing',
    description: 'Manage, implement, and optimize cloud infrastructure and services to enable scalable and flexible computing.',
    img: '/images/cloud-computing-engineer.jpg',
    slug: "cloud-developer",
  },
  {
    name: 'DevOps Engineering',
    description: 'Combine software development and operations to improve collaboration, automation, and deployment processes.',
    img: '/images/dev-ops-engineer.jpg',
    slug: "devops-engineer",
  },
  {
    name: 'Product Management',
    description: 'Lead the development and management of products, coordinating efforts between various teams and stakeholders.',
    img: '/images/product-manager-now.jpg',
    slug: "product-manager",
  },
  {
    name: 'Digital Marketing',
    description: 'Promote products or services through digital channels to reach and engage with the target audience.',
    img: '/images/digital-marketing.jpg',
    slug: "digital-marketer",
  },
  {
    name: 'Blockchain Development',
    description: 'Build decentralized applications (dApps) and smart contracts using blockchain technologies.',
    img: '/images/blockchain-developer-cryptocurrency.jpg',
    slug: "blockchain-developer",
  },
  {
    name: 'Game Development',
    description: 'Design, develop, and deploy video games for various platforms, incorporating storytelling and interactive elements.',
    img: '/images/video-game-developer.jpg',
    slug: "game-developer",
  },
  {
    name: 'IT Project Management',
    description: 'Plan, execute, and oversee IT projects, ensuring successful delivery within time, budget, and scope.',
    img: '/images/it-product-manager.jpg',
    slug: "it-project-manager",
  },
];

export default function CareersHeader() {
  return (
    <div className="bg-gray-900 py-1 sm:py-1">
            <hr className="border-t border-gray-700 mb-6"></hr>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-base font-semibold leading-7 text-indigo-400">Explore the Possibilities</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Top Careers in Computer Science</p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Discover the various careers in the field of computer science. Each path offers unique opportunities and challenges. It's time to make your mark in the tech-driven future.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {careers.map((career) => (
            <CareerCard key={career.name} career={career} />
          ))}
        </div>
      </div>
    </div>
  );
}
