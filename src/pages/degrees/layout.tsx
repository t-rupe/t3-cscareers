import BasicHeader from "~/components/BasicHeader";
import LandingFooter from "~/components/LandingFooter";
import { NextSeo } from "next-seo";

export default function DegreesLayout({
  children, // will be a page or nested layout
  title,
  metaDescription,
  }: {
    children: React.ReactNode;
    title: string;
    metaDescription: string;
  }) {
    return (
      <section>
        <NextSeo
        title={title}
        description={metaDescription} 
        additionalMetaTags={[
          {
            name: 'robots',
            content: 'index, follow',
          }
        ]}
        />
        <BasicHeader />
        {children}
        <LandingFooter />
      </section>
    );
  }