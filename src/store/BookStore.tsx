import { book_types } from "global";
import React, { useState, useEffect, Dispatch, createContext, useReducer, useContext } from "react";
import useInput from "../hooks/useInput";

//TYPE
type State = book_types.book_input_item;

const initState: State = {
    title: "",
    author: "",
    author_email: "",
    description: "",
    author_description: "",
    thumbnail_link: "",
    pdf_download_link: "",
    lordcorn: 0,
    pay_type: "",
    kor_link: "",
    overseas_link: "",
    publish_date: "",
};

type Action =
    | { type: "SET_INIT_STATE"; data: State }
    | { type: "SET_TITLE"; data: string }
    | { type: "SET_AUTHOR"; data: string }
    | { type: "SET_EMAIL"; data: string }
    | { type: "SET_DESCRIPTION"; data: string }
    | { type: "SET_AUTHOR_DESCRIPTION"; data: string }
    | { type: "SET_THUMBNAIL"; data: string }
    | { type: "SET_PDF_LINK"; data: string }
    | { type: "SET_LOARDCORN"; data: number }
    | { type: "SET_PDF_LINK"; data: string }
    | { type: "SET_PAY_TYPE"; data: string }
    | { type: "SET_KOR_LINK"; data: string }
    | { type: "SET_OVERSEASE_LINK"; data: string }
    | { type: "PUBLISH_DATE"; data: string };

type BookContextDispatch = Dispatch<Action>;

const BookContext = createContext<State | null>(null);
const BookContextDispatchContext = createContext<BookContextDispatch | null>(null);

// REDUCER
const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "SET_INIT_STATE": {
            return {
                ...action.data,
            };
        }
        case "SET_TITLE": {
            return {
                ...state,
                title: action.data,
            };
        }
        case "SET_AUTHOR": {
            return {
                ...state,
                author: action.data,
            };
        }
        case "SET_AUTHOR_DESCRIPTION": {
            return {
                ...state,
                author_description: action.data,
            };
        }
        case "SET_DESCRIPTION": {
            return {
                ...state,
                description: action.data,
            };
        }
        case "SET_EMAIL": {
            return {
                ...state,
                author_email: action.data,
            };
        }
        case "SET_KOR_LINK": {
            return {
                ...state,
                kor_link: action.data,
            };
        }
        case "SET_LOARDCORN": {
            return {
                ...state,
                lordcorn: action.data,
            };
        }
        case "SET_OVERSEASE_LINK": {
            return {
                ...state,
                overseas_link: action.data,
            };
        }
        case "SET_PAY_TYPE": {
            return {
                ...state,
                pay_type: action.data,
            };
        }
        case "SET_PDF_LINK": {
            return {
                ...state,
                pdf_download_link: action.data,
            };
        }
        case "SET_THUMBNAIL": {
            return {
                ...state,
                thumbnail_link: action.data,
            };
        }

        default:
            throw new Error("BOOK REDUCER ERROR");
    }
};

export const BookStoreProvider = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
    const [state, dispatch] = useReducer(reducer, initState);

    return <BookContext.Provider value={state}>{children}</BookContext.Provider>;
};

export const useBookStore = () => {
    const state = useContext(BookContext);
    if (!state) throw new Error("BookStore X");
    return state;
};
