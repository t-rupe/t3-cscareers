'use client'
import BasicHeader from '~/components/BasicHeader'
import PrivacyPolicy from '~/components/PrivacyPolicy'
import LandingFooter from '~/components/LandingFooter'
import { NextSeo } from 'next-seo'

export default function Home() {
  return (
    <>
    <NextSeo 
    title="Privacy Policy - CS Careers"
    description="Read our privacy policy to understand how we collect, use, and protect your personal information while visiting computerscience.careers."
    canonical='https://computerscience.careers/privacy-policy/'
    additionalMetaTags={[
      {
        name: 'robots',
        content: 'index, follow',
      }
    ]}
    />
    <BasicHeader />
    <PrivacyPolicy />
    <LandingFooter />
    </>
  )
}