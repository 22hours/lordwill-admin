import React from "react";
import style from "./PDFInfo.module.scss";

//STROE
import { useBookStore, useBookStoreDispatch } from "../store/BookStore";

const PDFInfo = () => {
    const state = useBookStore();
    const dispatch = useBookStoreDispatch();

    return (
        <div className={style.PDFInfo}>
            <div className={style.input_div}>
                <div className={style.label}>PDF 포인트 구매 금액</div>
                <input
                    className={style.input}
                    value={state.lordcon === 0 ? "" : state.lordcon}
                    onChange={({ target: { value } }) => {
                        //@ts-ignore
                        dispatch({ type: "SET_LOARDCORN", data: value });
                    }}
                />
            </div>
            <div className={style.input_div}>
                <div className={style.label}>PDF 다운로드 링크</div>
                <input
                    className={style.input}
                    value={state.pdf_download_link}
                    onChange={({ target: { value } }) => {
                        dispatch({ type: "SET_PDF_LINK", data: value });
                    }}
                />
            </div>
        </div>
    );
};

export default PDFInfo;
