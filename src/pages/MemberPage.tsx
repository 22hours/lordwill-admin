import React from "react";
import style from "./MemberPage.module.scss";

// HOC
import withAuthCheck from "../hoc/withAuthCheck";
import withPageLayout from "../hoc/withPayLayout";

// ANTD

// COMPS

// STATICS

// TYPES

type Props = {};

// COMPONENT

const MemberPage = (props: Props) => {
  return <div>MemberPage</div>;
};

export default withAuthCheck(withPageLayout(MemberPage));
