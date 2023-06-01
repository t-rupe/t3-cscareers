import ExploreMore from "~/components/ExploreMore";
import BasicHeader from "~/components/BasicHeader";
import DynamicFAQ from "~/components/DynamicFAQ";

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
      </section>
    );
  }