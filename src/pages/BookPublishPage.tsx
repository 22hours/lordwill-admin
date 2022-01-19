import React from "react";
import withAuthCheck from "../hoc/withAuthCheck";
import withPageLayout from "../hoc/withPayLayout";

const BookPublishPage = () => {
    return <div></div>;
};
export default withAuthCheck(withPageLayout(BookPublishPage));
