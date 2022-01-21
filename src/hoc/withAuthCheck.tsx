import { ComponentType, useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../App";

const withAuthCheck = <P extends Object>(WrappedComponent: ComponentType<P>) => {
    return ({ ...props }) => {
        const localData = localStorage.getItem("user");

        if (localData) {
            const objLocalData = JSON?.parse(localData);
            if (objLocalData?.id === "") {
                return <Navigate to="/login" replace />;
            }
            return <WrappedComponent {...(props as P)} />;
        } else {
            return <Navigate to="/login" replace />;
        }
    };
};

export default withAuthCheck;
