import React from "react";
import style from "./BookImage.module.scss";

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
export default BookImage;
