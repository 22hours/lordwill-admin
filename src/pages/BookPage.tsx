import React from "react";
import style from "./BookPage.module.scss";

// HOC
import withAuthCheck from "../hoc/withAuthCheck";
import withPageLayout from "../hoc/withPayLayout";

// ANTD

// COMPS

// STATICS

// TYPES

type Props = {};

// COMPONENT

const BookPage = (props: Props) => {
  return <div>BookPage</div>;
};

export default withAuthCheck(withPageLayout(BookPage));
