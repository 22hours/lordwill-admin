import React, { useContext } from "react";
import style from "./BookPublishPage.module.scss";

//STORE
import { AuthContext } from "../App";
import { useBookStore } from "../store/BookStore";

//HOC
import withAuthCheck from "../hoc/withAuthCheck";
import withPageLayout from "../hoc/withPayLayout";

//COMPONENT
import AuthorInfo from "../organisms/AuthorInfo";
import BookImage from "../organisms/BookImage";
import BookInfo from "../organisms/BookInfo";
import PDFInfo from "../organisms/PDFInfo";
import SaleBookInfo from "../organisms/SaleBookInfo";

const BookPublishPage = () => {
    const authStore = useContext(AuthContext);
    const state = useBookStore();

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
            lordcon: state.lordcorn,
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
export default withAuthCheck(withPageLayout(BookPublishPage));
