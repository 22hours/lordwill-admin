import React, { useContext, useEffect } from "react";
import style from "./LoginPage.module.scss";

//LIB
import { localStorageSetting } from "../lib/localStorageSetting";

// HOC
import withAuthCheck from "../hoc/withAuthCheck";
import withPageLayout from "../hoc/withPayLayout";

// ANTD
import { Button, Input } from "antd";
import useInput from "../hooks/useInput";
import { AuthDispatchContext } from "../App";
import { useNavigate } from "react-router-dom";

// COMPS

// STATICS

// TYPES

type Props = {};

// COMPONENT
const LoginPage = (props: Props) => {
    const authDispatch = useContext(AuthDispatchContext);

    const nowLocalData = localStorageSetting();

    const id = useInput();
    const pw = useInput();

    const navigate = useNavigate();

    const onSubmit = () => {
        if (authDispatch) {
            if (id !== null || pw !== null) {
                authDispatch.login(id.value, pw.value);
                //로그인O
                if (nowLocalData?.id !== "") {
                    navigate("/member", { replace: true });
                } //로그인X
                else {
                    alert("아이디 비밀번호를 입력해주세요");
                    return;
                }
            } //입력X
            else {
                alert("아이디 비밀번호를 입력해주세요");
                return;
            }
        } else {
            alert("다시 시도해주세요");
            return;
        }
    };

    return (
        <div className={style.container}>
            <div className={style.login_wrapper}>
                <h2>LOGIN</h2>
                <Input {...id} placeholder="EMAIL" maxLength={100} />
                <Input.Password {...pw} placeholder="PW" maxLength={15} showCount />
                <Button type="primary" onClick={onSubmit}>
                    로그인
                </Button>
            </div>
        </div>
    );
};

export default withAuthCheck(LoginPage, true);
