import React, { useContext } from "react";
import style from "./LoginPage.module.scss";

// HOC
import withAuthCheck from "../hoc/withAuthCheck";
import withPageLayout from "../hoc/withPayLayout";

// ANTD
import { Button, Input } from "antd";
import useInput from "../hooks/useInput";
import { AuthContext, AuthDispatchContext } from "../App";
import { useNavigate } from "react-router-dom";

// COMPS

// STATICS

// TYPES

type Props = {};

// COMPONENT
const LoginPage = (props: Props) => {
    //@ts-ignore
    const { auth } = useContext(AuthContext);
    const authDispatch = useContext(AuthDispatchContext);

    const id = useInput();
    const pw = useInput();

    const navigate = useNavigate();

    const onSubmit = () => {
        if (authDispatch) {
            if (id !== null || pw !== null) {
                authDispatch.login(id.value, pw.value);
                console.log(auth?.id);
                if (auth?.id !== "") {
                    navigate("/member", { replace: true });
                }
            } else {
                alert("아이디 비밀번호를 입력해주세요");
            }
        } else {
            alert("다시 시도해주세요");
            return;
        }
    };

    if (auth?.id !== "") {
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
