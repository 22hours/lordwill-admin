import { ComponentType } from "react";
import PageLayout from "../components/PageLayout";

const withPageLayout = <P extends Object>(
  WrappedComponent: ComponentType<P>
) => {
  return ({ ...props }) => {
    return (
      <PageLayout>
        <WrappedComponent {...(props as P)} />
      </PageLayout>
    );
  };
};

export default withPageLayout;
