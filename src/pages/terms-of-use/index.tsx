'use client'
import BasicHeader from '~/components/BasicHeader'
import Terms from '~/components/Terms'
import LandingFooter from '~/components/LandingFooter'
import { NextSeo } from 'next-seo'

export default function Home() {
  return (
    <>
    <NextSeo 
      title="Terms of Use - CS Careers"
      description="Read our terms of use for our site CS Careers."
      canonical="https://computerscience.careers/terms-of-use" />
    <BasicHeader />
    <Terms />
    <LandingFooter />
    </>
  )
}