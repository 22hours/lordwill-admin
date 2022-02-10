import React from "react";
import style from "./HomePage.module.scss";

// HOC
import withAuthCheck from "../hoc/withAuthCheck";
import withPageLayout from "../hoc/withPayLayout";

// ANTD

// COMPS

// STATICS

// TYPES

type Props = {};

// COMPONENT

const HomePage = (props: Props) => {
    return <div>HomePage</div>;
};

export default withAuthCheck(withPageLayout(HomePage));
