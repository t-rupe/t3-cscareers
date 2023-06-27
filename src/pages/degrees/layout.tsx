import BasicHeader from "~/components/BasicHeader";
import LandingFooter from "~/components/LandingFooter";
import Head from 'next/head'

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
        <Head>
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
        </Head>
        <BasicHeader />
        {children}
        <LandingFooter />
      </section>
    );
  }