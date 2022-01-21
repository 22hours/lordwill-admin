import React from "react";
import style from "./BookImage.module.scss";
//STROE
import { useBookStore, useBookStoreDispatch } from "../store/BookStore";
//IMG
import defaultImg from "../img/default_img.png";
const BookImage = () => {
    const state = useBookStore();
    const dispatch = useBookStoreDispatch();

    console.log(state);

    return (
        <div className={style.BookImage}>
            <div className={style.input_div}>
                <div className={style.label}>표지 이미지 | 링크 첨부</div>
                <div>
                    <input
                        className={style.input}
                        value={state.thumbnail_link}
                        onChange={({ target: { value } }) => {
                            dispatch({ type: "SET_THUMBNAIL", data: value });
                        }}
                    />
                    <div
                        className={style.thumbnail_btn}
                        onClick={() => dispatch({ type: "SET_THUMBNAIL", data: state.thumbnail_link })}
                    >
                        완료
                    </div>
                </div>
            </div>
            <div className={style.img_div}>
                <div className={style.label}>표지 이미지 미리보기</div>
                <img src={state.preview_thumbnail_link === "" ? defaultImg : state.preview_thumbnail_link} />
            </div>
        </div>
    );
};
export default BookImage;
