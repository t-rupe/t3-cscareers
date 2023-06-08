'use client'
import LandingHeader from '~/components/LandingHeader'
import LandingStats from '~/components/LandingStats'
import LandingCareer from '~/components/LandingCareer'
import LandingSectionLanguages from '~/components/LandingSectionLanguages'
import LandingFooter from '~/components/LandingFooter'
import Head from 'next/head'

export default function Home() {
  return (
    <>
    <Head>
      <title>ComputerScience.Careers</title>
      <meta name="description" content="Access expert advice, industry insights, and comprehensive resources to excel in software development, data science, cybersecurity, AI, and more. Transform your career in computer science with us." />
    </Head>
    <LandingHeader />
    <LandingCareer />
    <LandingSectionLanguages />
    <LandingStats />
    <LandingFooter />
    </>
  )
}