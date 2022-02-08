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
                <div className={style.label}>책 카테고리</div>
                <select
                    className={style.select_input}
                    value={state.cate_id}
                    onChange={({ target: { value } }) => {
                        //@ts-ignore
                        dispatch({ type: "SET_CATEGORY", data: value });
                    }}
                >
                    <option value="default">카테고리를 선택하세요</option>
                    <option value="cate_business">비즈니스</option>
                    <option value="cate_economy">경제/경영</option>
                    <option value="cate_essay">시/에세이</option>
                    <option value="cate_faith">신앙서적</option>
                    <option value="cate_it">IT</option>
                    <option value="cate_marketing">마케팅</option>
                    <option value="cate_poetry">시/희곡</option>
                    <option value="cate_simprovement">자기계발</option>
                    <option value="cate_wculture">글쓰기교양</option>
                    <option value="cate_writing">글쓰기</option>
                </select>
            </div>
            <div className={style.input_div}>
                <div className={style.label}>책 소개</div>
                <textarea
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
