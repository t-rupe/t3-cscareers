import Image from 'next/image'
export default function LandingSectionLanguages() {
    return (
      <div className="bg-gray-900 py-24 sm:py-32">
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
            <div className="mx-auto w-full max-w-xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-white">Master the Most In-Demand Programming Languages</h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Stay ahead of the curve by diving into the world of high-demand programming languages. Equip yourself with the skills and knowledge needed to excel in today&apos;s tech industry. Whether you&apos;re interested in front-end development, back-end systems, or full stack solutions, these languages will open doors to exciting opportunities.
              </p>
              <div className="mt-8 flex items-center gap-x-6">
                
              </div>
            </div>
            <div className="mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">
            <Image
            className="w-full h-24 object-contain"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"        
            width={280}
            height={96}
            alt="Javascript"
            />
            <Image
            className="w-full h-24 object-contain"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg"
            width={280}
            height={96}
            alt="Python"
            />
            <Image
            className="w-full h-24 object-contain"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg"
            width={280}
            height={96}
            alt="Java"
            />
            <Image
            className="w-full h-24 object-contain"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg"
            width={280}
            height={96}
            alt="GoLang"
            />
            <Image
            className="w-full h-24 object-contain"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original-wordmark.svg"
            width={280}
            height={96}
            alt="Kotlin"
            />
            <Image
            className="w-full h-24 object-contain"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
            width={280}
            height={96}
            alt="CSharp"
            />
            </div>
          </div>
        </div>
      </div>
    );
  }
  