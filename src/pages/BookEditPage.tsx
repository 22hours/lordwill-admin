import React, { useContext, useEffect } from "react";
import style from "./BookEditPage.module.scss";
import { useParams } from "react-router-dom";
import { AuthContext } from "../App";

// HOC
import withAuthCheck from "../hoc/withAuthCheck";
import withPageLayout from "../hoc/withPayLayout";

//COMPONENT
import AuthorInfo from "../organisms/AuthorInfo";
import BookImage from "../organisms/BookImage";
import BookInfo from "../organisms/BookInfo";
import PDFInfo from "../organisms/PDFInfo";
import SaleBookInfo from "../organisms/SaleBookInfo";

const BookEditPage = () => {
    const params = useParams();
    const now_params = params.book_id;

    const authDispatch = useContext(AuthContext);

    const getBookInfo = async () => {
        const res = await authDispatch?.authApi("GET", "FIND_BOOK_BY_NUM", undefined, {
            num: now_params,
        });
        if (res?.data === "SUCCESS") {
            console.log(res?.data);
        } else {
            alert(res?.msg);
        }
    };

    useEffect(() => {
        getBookInfo();
    }, [now_params]);

    return (
        <div className={style.BookEditPage}>
            <div className={style.page_title}>책 수정하기</div>
            <div className={style.input_form}>
                <div className={style.blue_label}>책 정보</div>
                <AuthorInfo />
                <BookImage />
                <BookInfo />
                <div className={style.blue_label}>PDF 판매 정보</div>
                <PDFInfo />
                <div className={style.blue_label}>PDF 외 판매 정보</div>
                <SaleBookInfo />
            </div>
            <div className={style.save_btn}>수정 완료</div>
        </div>
    );
};

export default withAuthCheck(withPageLayout(BookEditPage));
