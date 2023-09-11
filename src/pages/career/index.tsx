'use client'
import CareersHeader from '~/components/CareersHeader'
import CareerpageSection from '~/components/CareerpageSection' 
import BasicHeader from '~/components/BasicHeader'
import Faq from '~/components/Faq'
import { NextSeo } from 'next-seo'
import LandingFooter from '~/components/LandingFooter'

export default function Home() {
  return (
    <>
    <NextSeo
          title="Explore Exciting Career Paths in Computer Science | ComputerScience.Careers"
          description="Explore diverse computer science careers, gain expert guidance, and build a successful future with ComputerScience.Careers." 
          additionalMetaTags={[
            {
              name: 'robots',
              content: 'index, follow',
            }
          ]}
          canonical='https://computerscience.careers/career/'
        />
    <BasicHeader />
    <CareersHeader />
    <CareerpageSection />
    <Faq />
    <LandingFooter />
    </>
  )
}