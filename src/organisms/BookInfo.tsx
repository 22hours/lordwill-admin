import React from "react";
import style from "./BookInfo.module.scss";

//STROE
import { useBookStore, useBookStoreDispatch } from "../store/BookStore";

const BookInfo = () => {
    const state = useBookStore();
    const dispatch = useBookStoreDispatch();

    return (
        <div className={style.BookInfo}>
            <div className={style.input_div}>
                <div className={style.label}>책 소개</div>
                <textarea
                    maxLength={150}
                    className={style.textarea}
                    value={state.description}
                    onChange={({ target: { value } }) => {
                        dispatch({ type: "SET_DESCRIPTION", data: value });
                    }}
                />
            </div>
            <div className={style.input_div}>
                <div className={style.label}>작가 소개</div>
                <textarea
                    maxLength={150}
                    className={style.textarea}
                    value={state.author_description}
                    onChange={({ target: { value } }) => {
                        dispatch({ type: "SET_AUTHOR_DESCRIPTION", data: value });
                    }}
                />
            </div>
            <div className={style.input_div}>
                <div className={style.label}>
                    출간일 <span>출간일을 2022-01-24 형식으로 입력해주세요</span>
                </div>
                <input
                    className={style.input}
                    value={state.publish_date}
                    onChange={({ target: { value } }) => {
                        dispatch({ type: "SET_PUBLISH_DATE", data: value });
                    }}
                />
            </div>
        </div>
    );
};
export default BookInfo;
