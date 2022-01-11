import React, { ReactNode } from "react";
import style from "./ContentLayout.module.scss";

// ANTD
import { Layout, Breadcrumb } from "antd";
const { Content, Footer } = Layout;

// TYPES
type Props = {
  children: ReactNode;
};

// COMPONENT
const ContentLayout = ({ children }: Props) => {
  return (
    <Layout className="site-layout">
      <Content style={{ margin: "0 16px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>User</Breadcrumb.Item>
          <Breadcrumb.Item>Bill</Breadcrumb.Item>
        </Breadcrumb>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 360 }}
        >
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>Created By @22Hours</Footer>
    </Layout>
  );
};

export default ContentLayout;
