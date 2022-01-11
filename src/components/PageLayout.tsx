import React, { ReactNode, useState } from "react";
import style from "./PageLayout.module.scss";

// ANTD
import { Layout, Breadcrumb } from "antd";

// COMPS
import MenuSlider from "./MenuSlider";
import ContentLayout from "./ContentLayout";

// TYPES
type Props = {
  children: ReactNode;
};

// COMPONENT
const PageLayout = ({ children }: Props) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <MenuSlider />
      <ContentLayout>{children}</ContentLayout>
    </Layout>
  );
};

export default PageLayout;
