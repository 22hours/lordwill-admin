import React from "react";
import style from "./SaleBookInfo.module.scss";
//STROE
import { useBookStore, useBookStoreDispatch } from "../store/BookStore";

//TYPE
type Props = {};

const SaleBookInfo = (props: Props) => {
    const state = useBookStore();
    const dispatch = useBookStoreDispatch();

    return (
        <div className={style.SaleBookInfo}>
            <div className={style.input_div}>
                <div className={style.label}>Epub 국내 판매 링크</div>
                <input
                    className={style.input}
                    value={state.epub_link.kor_link}
                    onChange={({ target: { value } }) => {
                        dispatch({ type: "SET_EPUB_LINK", data: { ...state.epub_link, kor_link: value } });
                    }}
                />
            </div>
            <div className={style.input_div}>
                <div className={style.label}>Epub 해외 판매 링크</div>
                <input
                    className={style.input}
                    value={state.epub_link.overseas_link}
                    onChange={({ target: { value } }) => {
                        dispatch({ type: "SET_EPUB_LINK", data: { ...state.epub_link, overseas_link: value } });
                    }}
                />
            </div>
            <div className={style.input_div}>
                <div className={style.label}>APP 국내 판매 링크</div>
                <input
                    className={style.input}
                    value={state.app_link.kor_link}
                    onChange={({ target: { value } }) => {
                        dispatch({ type: "SET_APP_LINK", data: { ...state.app_link, kor_link: value } });
                    }}
                />
            </div>
            <div className={style.input_div}>
                <div className={style.label}>APP 해외 판매 링크</div>
                <input
                    className={style.input}
                    value={state.app_link.overseas_link}
                    onChange={({ target: { value } }) => {
                        dispatch({ type: "SET_APP_LINK", data: { ...state.app_link, overseas_link: value } });
                    }}
                />
            </div>
            <div className={style.input_div}>
                <div className={style.label}>NFT 국내 판매 링크</div>
                <input
                    className={style.input}
                    value={state.nft_link.kor_link}
                    onChange={({ target: { value } }) => {
                        dispatch({ type: "SET_NFT_LINK", data: { ...state.nft_link, kor_link: value } });
                    }}
                />
            </div>
            <div className={style.input_div}>
                <div className={style.label}>NFT 해외 판매 링크</div>
                <input
                    className={style.input}
                    value={state.nft_link.overseas_link}
                    onChange={({ target: { value } }) => {
                        dispatch({ type: "SET_NFT_LINK", data: { ...state.nft_link, overseas_link: value } });
                    }}
                />
            </div>
        </div>
    );
};
export default SaleBookInfo;
