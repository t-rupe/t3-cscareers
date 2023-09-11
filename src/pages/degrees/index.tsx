'use client'
import DegreesBlogHeader from '~/components/DegreesBlogHeader'
import BasicHeader from '~/components/BasicHeader'
import LandingFooter from '~/components/LandingFooter'
import { NextSeo } from 'next-seo'
export default function Home() {
  return (
    <>
    <NextSeo
        title="in CS | ComputerScience.Careers"
        description="Explore diverse computer science degrees, gain expert guidance, and build a successful future with ComputerScience.Careers." 
        canonical="https://computerscience.careers/degrees/"
        additionalMetaTags={[
          {
            name: 'robots',
            content: 'index, follow',
          }
        ]}
        />
    <BasicHeader />
    <DegreesBlogHeader />
    <LandingFooter />
    </>
  )
}