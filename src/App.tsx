import React, { useContext, useMemo, useState } from "react";
import "./App.css";
import { Button } from "antd";
import PageLayout from "./components/PageLayout";
// import crypto from "crypto";
import { API_CALL } from "./api/api";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MemberPage from "./pages/MemberPage";
import BookPage from "./pages/BookPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import hashSecret from "./secure/hashSecret";

// TYPES
type Auth = {
    id: string;
};
type DispatchValues = {
    login: (id: string, pw: string) => void;
    logout: () => void;
};

export const AuthContext = React.createContext<Auth | null>(null);
export const AuthDispatchContext = React.createContext<DispatchValues | null>(null);

const App = () => {
    const [auth, setAuth] = useState<any>();

    // const hashPassword = (pw: string) => {
    //     const secret = hashSecret;
    //     const hashed = crypto.createHmac("sha256", secret).update(pw).digest("hex");
    //     return hashed;
    // };

    const login = async (id: string, pw: string) => {
        // const res = await API_CALL("POST", "LOGIN", undefined, {
        //     email: id,
        //     password: pw,
        // });
        // if (res?.result === "SUCCESS") {
        //     console.log(res);
        //     // localStorage.setItem("user", JSON.stringify(nowUser));
        // } else {
        //     if (res) {
        //         alert(res.msg);
        //     }
        // }
        setAuth({
            id: id,
        });
    };
    const logout = () => {
        setAuth(null);
    };

    const memoizedDispatches = useMemo(() => {
        return { login, logout };
    }, []);

    return (
        <BrowserRouter>
            <AuthContext.Provider value={auth}>
                <AuthDispatchContext.Provider value={memoizedDispatches}>
                    <div className="App">
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/member" element={<MemberPage />} />
                            <Route path="/book" element={<BookPage />} />
                            <Route path="/login" element={<LoginPage />} />
                        </Routes>
                    </div>
                </AuthDispatchContext.Provider>
            </AuthContext.Provider>
        </BrowserRouter>
    );
};

export default App;
