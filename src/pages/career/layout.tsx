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
        <BasicHeader />
        {children}
        <DynamicFAQ />
        <ExploreMore />
        <LandingFooter />
      </section>
    );
  }