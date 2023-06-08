import ExploreMore from "~/components/ExploreMore";
import BasicHeader from "~/components/BasicHeader";
import DynamicFAQ from "~/components/DynamicFAQ";
import LandingFooter from "~/components/LandingFooter";
import Head from 'next/head'

export default function CareerLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode;
  }) {
    return (
      <section>
        <Head>
          <title>Explore Exciting Career Paths in Computer Science | ComputerScience.Careers</title>
          <meta name="description" content="Explore diverse computer science careers, gain expert guidance, and build a successful future with ComputerScience.Careers." />
        </Head>
        <BasicHeader />
        {children}
        <DynamicFAQ />
        <ExploreMore />
        <LandingFooter />
      </section>
    );
  }