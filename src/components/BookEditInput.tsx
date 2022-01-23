import React, { useContext, useEffect } from "react";
import style from "./BookEditInput.module.scss";

//COMPONENT
import AuthorInfo from "../organisms/AuthorInfo";
import BookImage from "../organisms/BookImage";
import BookInfo from "../organisms/BookInfo";
import PDFInfo from "../organisms/PDFInfo";
import SaleBookInfo from "../organisms/SaleBookInfo";

const BookEditInput = () => {
    return (
        <div className={style.BookEditInput}>
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
export default BookEditInput;
