import React from "react";
import style from "./BookInfo.module.scss";

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
export default BookInfo;
