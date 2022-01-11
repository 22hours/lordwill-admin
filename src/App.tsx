import React, { useContext, useMemo, useState } from "react";
import "./App.css";
import { Button } from "antd";
import PageLayout from "./components/PageLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MemberPage from "./pages/MemberPage";
import BookPage from "./pages/BookPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

// TYPES
type Auth = {
  id: string;
};
type DispatchValues = {
  login: (id: string, pw: string) => void;
  logout: () => void;
};

export const AuthContext = React.createContext<Auth | null>(null);
export const AuthDispatchContext = React.createContext<DispatchValues | null>(
  null
);

const App = () => {
  const [auth, setAuth] = useState<any>();
  const login = (id: string, pw: string) => {
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
