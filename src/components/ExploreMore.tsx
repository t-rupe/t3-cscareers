import CareerCard from "./CareerCard";
import { useRouter } from 'next/router'
import {useEffect, useState} from 'react'

type Career = {
  name: string;
  description: string;
  img: string;
  slug: string;
};

const careers: Career[] = [
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

  
  
  export default function ExploreMore() {
    const router = useRouter()
    const currentSlug = router.query.slug
    const otherCareers = careers.filter(career => career.slug !== currentSlug)
    const [displayedCareers, setDisplayedCareers] = useState<Career[]>([]);
  
    function shuffleArray(array: Career[]): Career[] {
      const arr = [...array];
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = arr[i];
        arr[i] = arr[j] as Career;
        arr[j] = temp as Career;
      }
      return arr;
    }
    
    
  
  
    useEffect(() => {
      if(currentSlug) {
        const shuffledCareers = shuffleArray(otherCareers);
        const careersToDisplay = shuffledCareers.slice(0, 3).sort((a: Career, b: Career) => a.slug.localeCompare(b.slug));
        setDisplayedCareers(careersToDisplay);
      }
    }, [currentSlug, otherCareers]);
    
    
  
    return (
      <div className="bg-gray-900 py-24 sm:py-12">
        <hr className="border-t border-gray-700 mb-6"></hr>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Explore More Careers</h2>
            <p className="mt-2 text-lg leading-8 text-white">
              Find out more about the careers you are interested in.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {displayedCareers.map((career) => (
              <CareerCard career={career} key={career.slug} />
            ))}
          </div>
        </div>
      </div>
    )
  }
  