'use client'
import DegreesBlogHeader from '~/components/DegreesBlogHeader'
import BasicHeader from '~/components/BasicHeader'
import LandingFooter from '~/components/LandingFooter'
import Head from 'next/head'

export default function Home() {
  return (
    <>
    <Head>
          <title>Degrees in CS | ComputerScience.Careers</title>
          <meta name="description" content="Explore diverse computer science degrees, gain expert guidance, and build a successful future with ComputerScience.Careers." />
        </Head>
    <BasicHeader />
    <DegreesBlogHeader />
    <LandingFooter />
    </>
  )
}