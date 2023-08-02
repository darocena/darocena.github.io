import Landing from "@/components/pages/LandingPage/Landing";
import { PageProps } from "@/types/page";

export default function Home() {
  return <Landing />;
}

export async function getStaticProps(): Promise<{ props: PageProps }> {
  return {
    props: {
      meta: {
        title: "Home",
        keywords: "home, portfolio, nextjs, typescript, react",
        description: "Home page for my portfolio website",
      },
      header: {
        headerText: "Home",
      },
    },
  };
}
