import { ComponentType, useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../App";

const withAuthCheck = <P extends Object>(
  WrappedComponent: ComponentType<P>
) => {
  return ({ ...props }) => {
    const auth = useContext(AuthContext);
    if (!auth) {
      return <Navigate to="/login" replace />;
    }
    return <WrappedComponent {...(props as P)} />;
  };
};

export default withAuthCheck;