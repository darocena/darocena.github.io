import AboutPage from "@/components/pages/AboutPage/About";
import { NextPage } from "next";
import { PageProps } from "@/types/page";
export default function About() {
  return <AboutPage />;
}


export async function getStaticProps(): Promise<{ props: PageProps }> {
  return {
    props: {
      meta: {
        title: "About",
        keywords: "about, portfolio, nextjs, typescript, react",
        description: "About page for my portfolio website",
      },
      header: {
        headerText: "About",
      },
    },
  };
}
