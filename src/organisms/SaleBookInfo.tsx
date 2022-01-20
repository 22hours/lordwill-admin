import React from "react";
import style from "./SaleBookInfo.module.scss";

//TYPE
type Props = {};

const SaleBookInfo = (props: Props) => {
    return (
        <div className={style.SaleBookInfo}>
            <div className={style.input_div}>
                <div className={style.label}>Epub 국내 판매 링크</div>
                <input className={style.input} />
            </div>
            <div className={style.input_div}>
                <div className={style.label}>Epub 해외 판매 링크</div>
                <input className={style.input} />
            </div>
            <div className={style.input_div}>
                <div className={style.label}>APP 국내 판매 링크</div>
                <input className={style.input} />
            </div>
            <div className={style.input_div}>
                <div className={style.label}>APP 해외 판매 링크</div>
                <input className={style.input} />
            </div>
            <div className={style.input_div}>
                <div className={style.label}>NFT 국내 판매 링크</div>
                <input className={style.input} />
            </div>
            <div className={style.input_div}>
                <div className={style.label}>NFT 해외 판매 링크</div>
                <input className={style.input} />
            </div>
        </div>
    );
};
export default SaleBookInfo;
