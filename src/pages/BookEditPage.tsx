import React, { useContext, useEffect, useState } from "react";
import style from "./BookEditPage.module.scss";
import { useParams } from "react-router-dom";
//STORE
import { AuthContext } from "../App";
import { BookStoreProvider } from "../store/BookStore";

// HOC
import withAuthCheck from "../hoc/withAuthCheck";
import withPageLayout from "../hoc/withPayLayout";

//COMPONENT
import BookEditInput from "../components/BookEditInput";

//TYPE
import { book_types } from "global";

type Init = book_types.book_input_item;

const BookEditPage = () => {
    const params = useParams();
    const now_params = params.book_id;
    const authDispatch = useContext(AuthContext);

    const [initSate, setInitState] = useState<Init>({
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
    });

    const getBookInfo = async () => {
        const res = await authDispatch?.authApi("GET", "FIND_BOOK_BY_NUM", {
            num: now_params,
        });
        if (res?.result === "SUCCESS") {
            const resData = res?.data;
            const pay_link_list = res?.data.pay_link_list;
            const epub_link = pay_link_list.filter((e: any) => e.pay_type === "EPUB");
            const app_link = pay_link_list.filter((e: any) => e.pay_type === "APP");
            const nft_link = pay_link_list.filter((e: any) => e.pay_type === "NFT");
            setInitState({
                title: resData.title,
                author: resData.author,
                author_email: resData.author_email,
                description: resData.description,
                author_description: resData.author_description,
                thumbnail_link: resData.thumbnail_link,
                pdf_download_link: resData.pdf_download_link,
                lordcon: resData.lordcon,
                epub_link: {
                    pay_type: "EPUB",
                    kor_link: epub_link[0].kor_link,
                    overseas_link: epub_link[0].overseas_link,
                },
                app_link: {
                    pay_type: "APP",
                    kor_link: app_link[0].kor_link,
                    overseas_link: app_link[0].overseas_link,
                },
                nft_link: {
                    pay_type: "NFT",
                    kor_link: nft_link[0].kor_link,
                    overseas_link: nft_link[0].overseas_link,
                },
                publish_date: resData.publish_date,
            });
        } else {
            alert(res?.msg);
        }
    };

    useEffect(() => {
        getBookInfo();
    }, [now_params]);

    return (
        <BookStoreProvider init={initSate}>
            <BookEditInput />
        </BookStoreProvider>
    );
};

export default withAuthCheck(withPageLayout(BookEditPage));
