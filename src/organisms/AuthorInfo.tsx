import React from "react";
import style from "./AuthorInfo.module.scss";
//STROE
import { useBookStore, useBookStoreDispatch } from "../store/BookStore";

const AuthorInfo = () => {
    const state = useBookStore();
    const dispatch = useBookStoreDispatch();

    return (
        <div className={style.AuthorInfo}>
            <div className={style.input_div}>
                <div className={style.label}>책 이름</div>
                <input
                    className={style.input}
                    value={state.title}
                    onChange={({ target: { value } }) => {
                        dispatch({ type: "SET_TITLE", data: value });
                    }}
                />
            </div>
            <div className={style.input_div}>
                <div className={style.label}>작가이름</div>
                <input
                    className={style.input}
                    value={state.author}
                    onChange={({ target: { value } }) => {
                        dispatch({ type: "SET_AUTHOR", data: value });
                    }}
                />
            </div>
            <div className={style.input_div}>
                <div className={style.label}>이메일 주소</div>
                <input
                    className={style.input}
                    value={state.author_email}
                    onChange={({ target: { value } }) => {
                        dispatch({ type: "SET_EMAIL", data: value });
                    }}
                />
            </div>
        </div>
    );
};
export default AuthorInfo;
