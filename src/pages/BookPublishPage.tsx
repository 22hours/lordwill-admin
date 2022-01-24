import React from "react";
import style from "./BookPublishPage.module.scss";
import { BookStoreProvider } from "../store/BookStore";

//HOC
import withAuthCheck from "../hoc/withAuthCheck";
import withPageLayout from "../hoc/withPayLayout";
import BookPublishInput from "../components/BookPublishInput";

const BookPublishPage = () => {
    const initState = {
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

    return (
        <BookStoreProvider init={initState}>
            <BookPublishInput />
        </BookStoreProvider>
    );
};
export default withAuthCheck(withPageLayout(BookPublishPage));
