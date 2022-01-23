import React, { useContext, useEffect } from "react";
import style from "./BookPublishInput.module.scss";
//STORE
import { useBookStore } from "../store/BookStore";
import { useBookStoreDispatch } from "../store/BookStore";
import { AuthContext } from "../App";

//COMPONENT
import AuthorInfo from "../organisms/AuthorInfo";
import BookImage from "../organisms/BookImage";
import BookInfo from "../organisms/BookInfo";
import PDFInfo from "../organisms/PDFInfo";
import SaleBookInfo from "../organisms/SaleBookInfo";

const BookPublishInput = () => {
    const authStore = useContext(AuthContext);
    const state = useBookStore();
    const authDispatch = useContext(AuthContext);
    const dispatch = useBookStoreDispatch();

    const publishBook = async () => {
        let pay_link_list = [];
        pay_link_list.push(state.epub_link, state.nft_link, state.app_link);
        console.log(state);
        const res = await authStore?.authApi("POST", "PUBLISH_BOOK", undefined, {
            title: state.title,
            author: state.author,
            author_email: state.author_email,
            description: state.description,
            author_description: state.author_description,
            thumbnail_link: state.thumbnail_link,
            pdf_download_link: state.pdf_download_link,
            lordcon: state.lordcon,
            pay_link_list: pay_link_list,
            publish_date: state.publish_date,
        });
        if (res?.result === "SUCCESS") {
            alert("성공");
        } else {
            alert(res?.msg);
        }
    };

    return (
        <div className={style.BookPublishPage}>
            <div className={style.page_title}>새로운 책 출판하기</div>
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
            <div className={style.save_btn} onClick={publishBook}>
                작성 완료
            </div>
        </div>
    );
};
export default BookPublishInput;
