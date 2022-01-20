import React from "react";
import style from "./PDFInfo.module.scss";

//ANTD
import { Checkbox } from "antd";

const PDFInfo = () => {
    const onChange = (e: any) => {
        console.log(`checked = ${e.target.checked}`);
    };

    return (
        <div className={style.PDFInfo}>
            <div className={style.input_div}>
                <div className={style.label}>PDF 판매 금액</div>
                <input className={style.input} />
            </div>
            <div className={style.input_div}>
                <Checkbox onChange={onChange}></Checkbox>
            </div>
            <div className={style.input_div}>
                <div className={style.label}>PDF 포인트 구매 금액</div>
                <input className={style.input} />
            </div>
        </div>
    );
};

export default PDFInfo;
