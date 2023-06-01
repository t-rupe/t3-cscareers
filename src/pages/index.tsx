'use client'
import LandingHeader from '~/components/LandingHeader'
import LandingStats from '~/components/LandingStats'
import LandingCareer from '~/components/LandingCareer'
import LandingSectionLanguages from '~/components/LandingSectionLanguages'
import LandingFooter from '~/components/LandingFooter'

export default function Home() {
  return (
    <>
    <LandingHeader />
    <LandingCareer />
    <LandingSectionLanguages />
    <LandingStats />
    <LandingFooter />
    </>
  )
}