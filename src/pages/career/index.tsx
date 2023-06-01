'use client'
import CareersHeader from '~/components/CareersHeader'
import CareerpageSection from '~/components/CareerpageSection' 
import BasicHeader from '~/components/BasicHeader'
import Faq from '~/components/Faq'
import LandingFooter from '~/components/LandingFooter'

export default function Home() {
  return (
    <>
    <BasicHeader />
    <CareersHeader />
    <CareerpageSection />
    <Faq />
    <LandingFooter />
    </>
  )
}