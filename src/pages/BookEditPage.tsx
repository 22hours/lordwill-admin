import React, { useEffect } from "react";
import style from "./BookEditPage.module.scss";

// HOC
import withAuthCheck from "../hoc/withAuthCheck";
import withPageLayout from "../hoc/withPayLayout";

//ANTD
import { Checkbox } from "antd";

const onChange = (e: any) => {
    console.log(`checked = ${e.target.checked}`);
};

const AuthorInfo = () => {
    return (
        <div className={style.AuthorInfo}>
            <div className={style.input_div}>
                <div className={style.label}>작가이름</div>
                <input className={style.input} />
            </div>
            <div className={style.input_div}>
                <div className={style.label}>이메일 주소</div>
                <input className={style.input} />
            </div>
            <div className={style.input_div}>
                <div className={style.label}>가입 일자</div>
                <input className={style.input} />
            </div>
        </div>
    );
};

const BookImage = () => {
    return (
        <div className={style.BookImage}>
            <div className={style.input_div}>
                <div className={style.label}>표지 이미지 | 링크 첨부</div>
                <input className={style.input} />
            </div>
            <div className={style.img_div}>
                <div className={style.label}>표지 이미지 미리보기</div>
                <img />
            </div>
        </div>
    );
};

const BookInfo = () => {
    return (
        <div className={style.BookInfo}>
            <div className={style.input_div}>
                <div className={style.label}>책 소개</div>
                <input className={style.input} />
            </div>
            <div className={style.input_div}>
                <div className={style.label}>작가 소개</div>
                <input className={style.input} />
            </div>
            <div className={style.input_div}>
                <div className={style.label}>출간일</div>
                <input className={style.input} />
            </div>
        </div>
    );
};

const PDFInfo = () => {
    return (
        <div className={style.PDFInfo}>
            <div className={style.input_div}>
                <div className={style.label}>PDF 판매 금액</div>
                <input className={style.input} />
            </div>
            <div className={style.input_div}>
                <Checkbox onChange={onChange}></Checkbox>
            </div>
            <div className={style.input_div}>
                <div className={style.label}>PDF 포인트 구매 금액</div>
                <input className={style.input} />
            </div>
        </div>
    );
};

const SaleBookInfo = () => {
    return (
        <div className={style.SaleBookInfo}>
            <div className={style.input_div}>
                <div className={style.label}>Epub 국내 판매 링크</div>
                <input className={style.input} />
            </div>
            <div className={style.input_div}>
                <div className={style.label}>Epub 해외 판매 링크</div>
                <input className={style.input} />
            </div>
            <div className={style.input_div}>
                <div className={style.label}>APP 국내 판매 링크</div>
                <input className={style.input} />
            </div>
            <div className={style.input_div}>
                <div className={style.label}>APP 해외 판매 링크</div>
                <input className={style.input} />
            </div>
            <div className={style.input_div}>
                <div className={style.label}>NFT 국내 판매 링크</div>
                <input className={style.input} />
            </div>
            <div className={style.input_div}>
                <div className={style.label}>NFT 해외 판매 링크</div>
                <input className={style.input} />
            </div>
        </div>
    );
};

const BookEditPage = () => {
    return (
        <div className={style.BookEditPage}>
            <div className={style.page_title}>책 수정하기</div>
            <div className={style.input_form}>
                <AuthorInfo />
                <BookImage />
                <BookInfo />
                <PDFInfo />
                <SaleBookInfo />
            </div>
            <div className={style.save_btn}>수정 완료</div>
        </div>
    );
};

export default withAuthCheck(withPageLayout(BookEditPage));
