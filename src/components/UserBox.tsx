import React, { useContext } from "react";
import style from "./UserBox.module.scss";

// CONTEXT
import { AuthDispatchContext } from "../App";

// TYPES
type Props = {};

// COMPONENT
const UserBox = (props: Props) => {
    //@ts-ignore
    const { logout } = useContext(AuthDispatchContext);

    const localData = localStorage.getItem("user");
    //@ts-ignore
    const nowLocalData = JSON.parse(localData);

    if (nowLocalData?.id === "") {
        return null;
    } else {
        return (
            <div className={style.container}>
                <p className={style.label}>로그인 정보</p>
                <p className={style.id}>{nowLocalData.id}</p>
                <p className={style.logout_btn} onClick={logout}>
                    로그아웃
                </p>
            </div>
        );
    }
};

export default UserBox;
