import React from "react";
import style from "./BookPublishPage.module.scss";

//HOC
import withAuthCheck from "../hoc/withAuthCheck";
import withPageLayout from "../hoc/withPayLayout";

const BookPublishPage = () => {
    return (
        <div className={style.BookPublishPage}>
            <div className={style.page_title}>새로운 책 출판하기</div>
        </div>
    );
};
export default withAuthCheck(withPageLayout(BookPublishPage));
