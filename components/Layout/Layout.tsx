import React from "react";
import Meta from "../Meta/Meta";
import Nav from "../Nav/Nav";
import PageContainer from "../PageContainer/PageContainer";
import Header from "../Header/Header";
import { PageProps } from "@/types/page";

interface LayoutProps {
  props: PageProps;
  children: React.ReactNode;
}

const Layout = ({ children, props }: LayoutProps) => {
  return (
    <>
      <Meta {...props?.meta} />
      <Header headerText={props?.header?.headerText} />
      <Nav />
      <PageContainer>{children}</PageContainer>
    </>
  );
};

export default Layout;
