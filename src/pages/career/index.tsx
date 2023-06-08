'use client'
import CareersHeader from '~/components/CareersHeader'
import CareerpageSection from '~/components/CareerpageSection' 
import BasicHeader from '~/components/BasicHeader'
import Faq from '~/components/Faq'
import Head from 'next/head'
import LandingFooter from '~/components/LandingFooter'

export default function Home() {
  return (
    <>
    <Head>
          <title>Explore Exciting Career Paths in Computer Science | ComputerScience.Careers</title>
          <meta name="description" content="Explore diverse computer science careers, gain expert guidance, and build a successful future with ComputerScience.Careers." />
        </Head>
    <BasicHeader />
    <CareersHeader />
    <CareerpageSection />
    <Faq />
    <LandingFooter />
    </>
  )
}