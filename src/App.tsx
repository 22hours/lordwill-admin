import React, { useContext, useEffect, useMemo, useState } from "react";
import "./App.css";
import { Button } from "antd";
import PageLayout from "./components/PageLayout";

import { BookStoreProvider } from "./store/BookStore";
import { api_config } from "global";
import { useNavigate } from "react-router-dom";
import { API_CALL } from "./api/api";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MemberPage from "./pages/MemberPage";
import BookPage from "./pages/BookPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import hashSecret from "./secure/hashSecret";
import BookEditPage from "./pages/BookEditPage";
import BookPublishPage from "./pages/BookPublishPage";

// TYPES
type api_params = api_config.params;

type State = api_config.admin | undefined | null;

type Auth = {
    auth: { id: string | null | undefined; access_token?: string | null };
    authApi: (
        method: api_params["method"],
        url: api_params["url"],
        url_query?: api_params["url_query"],
        data?: api_params["data"]
    ) => Promise<api_config.api_response>;
};

type DispatchValues = {
    login: (id: string, pw: string) => void;
    logout: () => void;
};

export const AuthContext = React.createContext<Auth | null>(null);
export const AuthDispatchContext = React.createContext<DispatchValues | null>(null);

const App = () => {
    const [auth, setAuth] = useState<State>({
        id: "",
        access_token: "",
    });

    const login = async (id: string, pw: string) => {
        const res = await API_CALL("POST", "LOGIN", undefined, {
            email: id,
            password: pw,
        });
        if (res?.result === "SUCCESS") {
            setAuth({
                id: id,
                access_token: res?.data.access_token,
            });
            let nowUser = {
                id: id,
                access_token: res?.data.access_token,
            };
            localStorage.setItem("user", JSON.stringify(nowUser));
        } else {
            if (res) {
                alert(res.msg);
                return;
            }
        }
    };

    const logout = () => {
        localStorage.removeItem("user");
        setAuth({
            id: "",
            access_token: "",
        });
    };

    const authApi = async (
        method: api_params["method"],
        url: api_params["url"],
        url_query?: api_params["url_query"],
        data?: api_params["data"]
    ) => {
        var extraHeader = {};
        const nowUser = localStorage?.getItem("user");
        //@ts-ignore
        const nowUserObj = JSON.parse(nowUser);

        if (auth?.id !== "") {
            extraHeader = { authorization: `bearer ${nowUserObj.access_token}` };
        }
        const res_data = await API_CALL(method, url, url_query, data, extraHeader);
        if (res_data?.result === "SUCCESS") {
            return res_data;
        } else {
            switch (res_data.statusCode) {
                case 701: {
                    //토큰만료
                    logout();
                    return res_data;
                }
                case 702: {
                    // 토큰 변조
                    logout();
                    return res_data;
                }
                default: {
                    return res_data;
                }
            }
        }
    };

    useEffect(() => {
        const localData = localStorage.getItem("user");
        if (localData) {
            const objLocalData = JSON.parse(localData);
            setAuth({
                id: objLocalData.id,
                access_token: objLocalData.access_token,
            });
        }
    }, []);

    const memoizedDispatches = useMemo(() => {
        return { login, logout };
    }, []);

    const authStore: Auth = {
        authApi,
        //@ts-ignore
        auth,
    };

    return (
        <BrowserRouter>
            <AuthContext.Provider value={authStore}>
                <AuthDispatchContext.Provider value={memoizedDispatches}>
                    <BookStoreProvider>
                        <div className="App">
                            <Routes>
                                <Route path="/" element={<HomePage />} />
                                <Route path="/member" element={<MemberPage />} />
                                <Route path="/book" element={<BookPage />} />
                                <Route path="/book/new" element={<BookPublishPage />} />
                                <Route path="/book/edit/:book_id" element={<BookEditPage />} />
                                <Route path="/login" element={<LoginPage />} />
                            </Routes>
                        </div>
                    </BookStoreProvider>
                </AuthDispatchContext.Provider>
            </AuthContext.Provider>
        </BrowserRouter>
    );
};

export default App;
