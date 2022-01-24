import React, { ComponentType, useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";

const withAuthCheck = <P extends Object>(WrappedComponent: ComponentType<P>, toggle?: boolean) => {
    return ({ ...props }) => {
        const localData = localStorage.getItem("user");
        //@ts-ignore
        const nowLocalData = JSON.parse(localData);

        if (toggle) {
            // 로그인 안되었을 때 만 접근 가능하게
            return nowLocalData ? <Navigate to="/member" replace /> : <WrappedComponent {...(props as P)} />;
        } else {
            // 로그인 되었을 때 만 접근 가능하게
            return !nowLocalData ? <Navigate to="/login" replace /> : <WrappedComponent {...(props as P)} />;
        }
    };
};

export default withAuthCheck;
