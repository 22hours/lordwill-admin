import React, { useEffect, Dispatch, createContext, useReducer, useContext } from "react";
import AxiosClient from "../api/api";
import { api_config } from "global";

type State = api_config.admin;

type AuthStore = {
    auth: State;
    authApi: (
        method: api_config.params["method"],
        url: api_config.params["url"],
        url_query?: api_config.params["url_query"],
        data?: api_config.params["data"],
        extraHeader?: any
    ) => Promise<api_config.api_response>;
};

type Action = { type: "LOGIN"; data: any };

type AuthContextDispatch = Dispatch<Action>;

const AuthContext = createContext<AuthStore | null>(null);
const AuthDispatchContext = createContext<AuthContextDispatch | null>(null);

// REDUCER
const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "LOGIN": {
            return action.data;
        }
        default:
            throw new Error("AUTHSTORE :: REDUCER");
    }
};

export const AuthProvider = ({ children }: any) => {
    const apiClient = AxiosClient;

    // const [auth, dispatch] = useReducer(reducer, null);
};
