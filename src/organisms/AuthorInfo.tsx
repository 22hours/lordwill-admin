import React from "react";
import style from "./AuthorInfo.module.scss";

const AuthorInfo = () => {
    return (
        <div className={style.AuthorInfo}>
            <div className={style.input_div}>
                <div className={style.label}>작가이름</div>
                <input className={style.input} />
            </div>
            <div className={style.input_div}>
                <div className={style.label}>이메일 주소</div>
                <input className={style.input} />
            </div>
            <div className={style.input_div}>
                <div className={style.label}>가입 일자</div>
                <input className={style.input} />
            </div>
        </div>
    );
};
export default AuthorInfo;
