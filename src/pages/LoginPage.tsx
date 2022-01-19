import React, { useContext } from "react";
import style from "./LoginPage.module.scss";

// HOC
import withAuthCheck from "../hoc/withAuthCheck";
import withPageLayout from "../hoc/withPayLayout";

// ANTD
import { Button, Input } from "antd";
import useInput from "../hooks/useInput";
import { AuthContext, AuthDispatchContext } from "../App";
import { Navigate } from "react-router-dom";

// COMPS

// STATICS

// TYPES

type Props = {};

// COMPONENT

const LoginPage = (props: Props) => {
    const auth = useContext(AuthContext);
    const authDispatch = useContext(AuthDispatchContext);

    const id = useInput();
    const pw = useInput();

    const onSubmit = () => {
        console.log(authDispatch);
        if (authDispatch) {
            if (id !== null || pw !== null) {
                authDispatch.login(id.value, pw.value);
            } else {
            }
        } else {
            alert("다시 시도해주세요");
            return;
        }
    };

    if (auth) {
        return <Navigate to={"/member"} replace />;
    }
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

export default LoginPage;
