import React, { useState, useEffect, useCallback } from "react";
import style from "./BookImage.module.scss";
//STROE
import { useBookStore, useBookStoreDispatch } from "../store/BookStore";
//IMG
import defaultImg from "../img/default_img.png";

type Props = {
    type?: "EDIT" | "NEW";
};

const BookImage = (props: Props) => {
    const state = useBookStore();
    const dispatch = useBookStoreDispatch();

    const [previewImg, setPreviewImg] = useState<string>(state.thumbnail_link);

    const getPreviewImg = () => {
        setPreviewImg(state.thumbnail_link);
    };

    useEffect(() => {
        setPreviewImg(state.thumbnail_link);
    }, [state.thumbnail_link]);

    return (
        <div className={style.BookImage}>
            <div className={style.input_div}>
                <div className={style.label}>표지 이미지 | 링크 첨부</div>
                <div className={style.img_div}>
                    <input
                        className={style.input}
                        value={state.thumbnail_link}
                        onChange={({ target: { value } }) => {
                            dispatch({ type: "SET_THUMBNAIL", data: value });
                        }}
                    />
                    <div className={style.preview_btn} onClick={getPreviewImg}>
                        확인
                    </div>
                </div>
            </div>
            <div className={style.preview_img_div}>
                <div className={style.label}>표지 이미지 미리보기</div>
                <img src={previewImg === "" ? defaultImg : previewImg} />
            </div>
        </div>
    );
};
export default BookImage;
