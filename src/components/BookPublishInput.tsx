import React, { useContext } from "react";
import style from "./BookPublishInput.module.scss";
import { useNavigate } from "react-router-dom";

//STORE
import { useBookStore } from "../store/BookStore";
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
    const navigate = useNavigate();

    const publishBook = async () => {
        let pay_link_list = [];
        pay_link_list.push(state.epub_link, state.nft_link, state.app_link);

        var EmailRegex = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
        var dateRegex = RegExp(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/);

        if (state.title.length < 1) {
            alert("책 이름을 입력해주세요");
            return;
        }
        if (state.author.length < 1) {
            alert("작가 이름을 입력해주세요");
            return;
        }

        if (!EmailRegex.test(state.author_email)) {
            alert("이메일을 알맞게 입력해주세요");
            return;
        }
        if (state.thumbnail_link.length < 1) {
            alert("표지 이미지 주소를 입력해주세요");
            return;
        }
        if (state.cate_id === "default") {
            alert("책 카테고리를 설정해주세요");
            return;
        }
        if (state.description.length < 1) {
            alert("책 소개를 입력해주세요");
            return;
        }
        if (state.author_description.length < 1) {
            alert("작가 소개를 입력해주세요");
            return;
        }
        if (!dateRegex.test(state.publish_date)) {
            alert("출간일을 2022-01-24 형식으로 입력해주세요");
            return;
        }
        //PDF 파일이 있으면
        if (state?.pdf_download_link) {
            if (!state?.pdf_download_link.includes("https://drive.google.com/file/d/")) {
                alert("PDF 다운로드 링크를 알맞은 형식으로 입력해주세요");
                return;
            }
            if (state.lordcon < 1) {
                alert("PDF 포인트 구매 금액을 알맞게 입력해주세요");
                return;
            }
        }
        //PDF 파일이 없으면
        if (state?.pdf_download_link === "") {
            if (state.lordcon.toString() !== "") {
                console.log(state?.pdf_download_link);
                console.log(state.lordcon);
                alert("PDF 포인트 구매 금액을 삭제해주세요");
                return;
            }
        }

        const res = await authStore?.authApi("POST", "PUBLISH_BOOK", undefined, {
            title: state.title,
            author: state.author,
            author_email: state.author_email,
            description: state.description,
            cate_id: state.cate_id,
            author_description: state.author_description,
            thumbnail_link: state.thumbnail_link,
            pdf_download_link: state.pdf_download_link,
            lordcon: state.lordcon,
            pay_link_list: pay_link_list,
            publish_date: state.publish_date,
        });
        if (res?.result === "SUCCESS") {
            navigate("/book");
            alert("책이 추가되었습니다");
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
