import React, { useEffect, useState } from "react";
import style from "./PDFInfo.module.scss";
import { Checkbox } from "antd";

//STROE
import { useBookStore, useBookStoreDispatch } from "../store/BookStore";

const PDFInfo = () => {
    const state = useBookStore();
    const dispatch = useBookStoreDispatch();
    const [pdfState, setPdfState] = useState(true);

    const handleChange = () => {
        setPdfState(!pdfState);
    };

    useEffect(() => {
        if (state?.lordcon === 0) {
            setPdfState(false);
        } else {
            setPdfState(true);
        }
    }, [state?.lordcon]);

    useEffect(() => {
        if (!pdfState) {
            dispatch({ type: "SET_LOARDCORN", data: 0 });
            dispatch({ type: "SET_PDF_LINK", data: "" });
        }
    }, [pdfState]);

    return (
        <div className={style.PDFInfo}>
            <div className={style.check_box}>
                <Checkbox checked={pdfState} onChange={handleChange}>
                    PDF 구매 가능 여부
                </Checkbox>
            </div>
            <div className={style.input_div}>
                <div className={style.label}>PDF 포인트 구매 금액</div>
                {pdfState ? (
                    <input
                        className={style.input}
                        value={state.lordcon?.toString() === "" ? 0 : state.lordcon}
                        onChange={({ target: { value } }) => {
                            //@ts-ignore
                            dispatch({ type: "SET_LOARDCORN", data: value });
                        }}
                    />
                ) : (
                    <input className={style.input_disable} disabled />
                )}
            </div>
            <div className={style.input_div}>
                <div className={style.label}>PDF 다운로드 링크</div>
                {pdfState ? (
                    <input
                        className={style.input}
                        value={state.pdf_download_link}
                        onChange={({ target: { value } }) => {
                            dispatch({ type: "SET_PDF_LINK", data: value });
                        }}
                    />
                ) : (
                    <input className={style.input_disable} disabled />
                )}
            </div>
        </div>
    );
};

export default PDFInfo;
