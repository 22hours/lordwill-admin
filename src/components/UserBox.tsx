import React, { useContext } from "react";
import style from "./UserBox.module.scss";

// CONTEXT
import { AuthContext } from "../App";

// TYPES
type Props = {};

// COMPONENT
const UserBox = (props: Props) => {
    //@ts-ignore
    const { auth } = useContext(AuthContext);

    if (auth?.id === "") {
        return null;
    } else {
        return (
            <div className={style.container}>
                <p className={style.label}>로그인 정보</p>
                <p className={style.id}>{auth.id}</p>
                <p className={style.logout_btn}>로그아웃</p>
            </div>
        );
    }
};

export default UserBox;
