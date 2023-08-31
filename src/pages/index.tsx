'use client'
import LandingHeader from '~/components/LandingHeader'
import LandingStats from '~/components/LandingStats'
import LandingCareer from '~/components/LandingCareer'
import LandingSectionLanguages from '~/components/LandingSectionLanguages'
import LandingFooter from '~/components/LandingFooter'
import { NextSeo } from 'next-seo'

export default function Home() {
  return (
    <>
    <NextSeo 
    title="ComputerScience.Careers"
    description='Access expert advice, industry insights, and comprehensive resources to excel in software development, data science, cybersecurity, AI, and more. Transform your career in computer science with us.'
    canonical='https://computerscience.careers/' />
    <LandingHeader />
    <LandingCareer />
    <LandingSectionLanguages />
    <LandingStats />
    <LandingFooter />
    </>
  )
}