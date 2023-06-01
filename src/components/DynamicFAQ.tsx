import { useRouter } from 'next/router';
import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import faqsData from '../../faqs.json'; 

interface FaqItem {
    question: string;
    answer: string;
}

interface FaqsData {
    [key: string]: FaqItem[];
}

const faqsTypedData: FaqsData = faqsData;

export default function Faq() {
    const router = useRouter();
    const { slug } = router.query;
     
    const faqs: FaqItem[] = faqsTypedData[slug as string] || []; 

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
