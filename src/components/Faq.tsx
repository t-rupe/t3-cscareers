import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'



export default function Faq() {
    function SoftwareEngineerAnswer() {
        return (
          <span>
            The highest paid job in computer science is the Software engineer, particularly in the realm of Distributed Systems (Back-End), can reward professionals with sky-high salaries. Let's consider a real example: a Level L5 Software Engineer at Snap, based in San Francisco. As of 2023, this talented professional, with 10 years of experience and a master's degree, is pulling in a yearly total compensation of a whopping $500,000! That's the magic of being a software engineer – the intersection of passion, skill, and lucrative compensation. Source: {' '}
            <a href="https://www.levels.fyi/" target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:text-indigo-700">
              Levels.fyi
            </a>
          </span>
        );
      }

      const faqs = [
        {
            question: "What's the highest paid job in computer science?",
            answer:
            <SoftwareEngineerAnswer />
          },
          {
            question: "Is computer science in high demand?",
            answer:
              "Absolutely! It's like a digital gold rush out there. The Bureau of Labor Statistics (BLS) has projected job growth in computer science to skyrocket from 2021 to 2031. So, if you're thinking about diving into this field, the time is now!",
          },
          {
            question: "What can you do with a computer science degree?",
            answer:
              "You can do ANYTHING with a computer science degree. The world is your digital oyster with a computer science degree. Let me make this clear, coding is NOT the only thing a computer science degree is good for. Technological design, maintenance, analysis – these are just a few areas where you can leave your mark. Professionals are in high demand across tech companies, government agencies, and other sectors. Whether you dream of creating the next big social media platform or securing national cyber infrastructure, a degree in computer science is your passport to a host of exciting opportunities.",
          },
          {
            question: "Is computer science a good career?",
            answer:
              "Definitely! With a high demand for qualified computer science professionals, the career outlook is brighter than a new smartphone screen. Many of these jobs not only offer the opportunity to work on exciting projects, but also come with lucrative perks – average salaries ranging from $80,000 to $130,000. So, in the world of computer science, it’s not just about doing what you love, but also getting well compensated for it!",
          },
      // More questions...
    ]
      
    return (
      <section className="bg-gray-900">
       <hr className="border-t border-gray-700 mb-6"></hr>

        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="max-w-screen-lg sm:text-lg text-gray-300">
            <h2 className="mb-4 text-4xl tracking-tight font-bold text-indigo-600">Frequently asked questions</h2>
            <dl className="mt-10 space-y-6 divide-y divide-white/10">
              {faqs.map((faq) => (
                <Disclosure as="div" key={faq.question} className="pt-6">
                  {({ open }) => (
                    <>
                      <dt>
                        <Disclosure.Button className="flex w-full items-start justify-between text-left text-white">
                          <span className="text-base font-semibold leading-7">{faq.question}</span>
                          <span className="ml-6 flex h-7 items-center">
                            {open ? (
                              <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                            ) : (
                              <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                            )}
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="mt-2 pr-12">
                        <p className="text-base leading-7 text-gray-300">{faq.answer}</p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </dl>
          </div>
          
        </div> 
        
      </section>
    )
  }
  