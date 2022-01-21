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
                    value={state.lordcorn}
                    onChange={({ target: { value } }) => {
                        //@ts-ignore
                        dispatch({ type: "SET_LOARDCORN", data: value });
                    }}
                />
            </div>
        </div>
    );
};

export default PDFInfo;
