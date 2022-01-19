import React, { ReactNode } from "react";
import style from "./ContentLayout.module.scss";

// ANTD
import { Layout, BreadcrumbProps } from "antd";
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
                <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                    {children}
                </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>Created By @22Hours</Footer>
        </Layout>
    );
};

export default ContentLayout;
