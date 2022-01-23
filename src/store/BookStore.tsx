import { book_types } from "global";
import React, { useState, useEffect, Dispatch, createContext, useReducer, useContext } from "react";

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
    lordcon: 0,
    epub_link: { pay_type: "EPUB", kor_link: "", overseas_link: "" },
    app_link: { pay_type: "APP", kor_link: "", overseas_link: "" },
    nft_link: { pay_type: "NFT", kor_link: "", overseas_link: "" },
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
    | { type: "SET_PREVIEW_THUMBNAIL"; data: string }
    | { type: "SET_PDF_LINK"; data: string }
    | { type: "SET_LOARDCORN"; data: number }
    | { type: "SET_PDF_LINK"; data: string }
    | { type: "SET_PUBLISH_DATE"; data: string }
    | { type: "SET_EPUB_LINK"; data: { pay_type: string; kor_link: string; overseas_link: string } }
    | { type: "SET_NFT_LINK"; data: { pay_type: string; kor_link: string; overseas_link: string } }
    | { type: "SET_APP_LINK"; data: { pay_type: string; kor_link: string; overseas_link: string } };

type BookContextDispatch = Dispatch<Action>;

const BookContext = createContext<State | null>(null);
const BookContextDispatchContext = createContext<BookContextDispatch | null>(null);

// REDUCER
const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "SET_INIT_STATE": {
            const {
                title,
                author,
                author_email,
                description,
                author_description,
                thumbnail_link,
                pdf_download_link,
                lordcon,
                epub_link,
                app_link,
                nft_link,
                publish_date,
            } = action.data;
            return {
                title: title,
                author: author,
                author_email: author_email,
                description: description,
                author_description: author_description,
                thumbnail_link: thumbnail_link,
                pdf_download_link: pdf_download_link,
                lordcon: lordcon,
                epub_link: epub_link,
                app_link: app_link,
                nft_link: nft_link,
                publish_date: publish_date,
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
        case "SET_LOARDCORN": {
            return {
                ...state,
                lordcon: action.data,
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
        case "SET_PUBLISH_DATE": {
            return {
                ...state,
                publish_date: action.data,
            };
        }
        case "SET_EPUB_LINK": {
            const { pay_type, kor_link, overseas_link } = action.data;
            return {
                ...state,
                epub_link: { ...action.data, pay_type: pay_type, kor_link: kor_link, overseas_link: overseas_link },
            };
        }
        case "SET_APP_LINK": {
            const { pay_type, kor_link, overseas_link } = action.data;
            return {
                ...state,
                app_link: { ...action.data, pay_type: pay_type, kor_link: kor_link, overseas_link: overseas_link },
            };
        }
        case "SET_NFT_LINK": {
            const { pay_type, kor_link, overseas_link } = action.data;
            return {
                ...state,
                nft_link: { ...action.data, pay_type: pay_type, kor_link: kor_link, overseas_link: overseas_link },
            };
        }
        default:
            throw new Error("BOOK REDUCER ERROR");
    }
};

export const BookStoreProvider = ({ init, children }: { init: State; children: JSX.Element | JSX.Element[] }) => {
    const [state, dispatch] = useReducer(reducer, init);

    useEffect(() => {
        dispatch({ type: "SET_INIT_STATE", data: init });
    }, [init]);

    return (
        <BookContext.Provider value={state}>
            <BookContextDispatchContext.Provider value={dispatch}>{children}</BookContextDispatchContext.Provider>
        </BookContext.Provider>
    );
};

export const useBookStore = () => {
    const state = useContext(BookContext);
    if (!state) throw new Error("BookStore X");
    return state;
};

export const useBookStoreDispatch = () => {
    const dispatch = useContext(BookContextDispatchContext);
    if (!dispatch) throw new Error("BookStoreDispatch X");
    return dispatch;
};
