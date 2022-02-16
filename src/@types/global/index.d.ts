declare module "global" {
    export namespace GlobalTypes {
        type a = 1;
    }

    export namespace member_types {
        type member_list_data = {
            id: number;
            email: string;
            lordcon: number;
            name: string;
            create_date: string;
        };

        type real_member_list_data = {
            key: number;
            email: string;
            lordcon: number;
            name: string;
            create_date: string;
        };
    }

    export namespace book_types {
        type book_cate_id =
            | "default"
            | "cate_economy"
            | "cate_faith"
            | "cate_writing"
            | "cate_wculture"
            | "cate_poetry"
            | "cate_simprovement"
            | "cate_business"
            | "cate_marketing"
            | "cate_essay"
            | "cate_it";

        type book_input_item = {
            title: string;
            author: string;
            author_email: string;
            description: string;
            author_description: string;
            thumbnail_link: string;
            pdf_download_link?: string;
            cate_id: book_cate_id | string;
            lordcon: number;
            epub_link: {
                pay_type: string;
                kor_link: string;
                overseas_link: string;
            };
            app_link: {
                pay_type: string;
                kor_link: string;
                overseas_link: string;
            };
            nft_link: {
                pay_type: string;
                kor_link: string;
                overseas_link: string;
            };
            publish_date: string;
        };
        type book_info = {
            title: string;
            author: string;
            author_email: string;
            description: string;
            author_description: string;
            thumbnail_link: string;
            pdf_download_link: string;
            cate_id: book_cate_id | string;
            lordcon: number;
            pay_link_list: {
                pay_type: string;
                kor_link: string;
                overseas_link: string;
            }[];
            publish_date: string;
            create_date?: string;
        };
        type book_list_data = {
            _id: number;
            create_date: string;
            author: string;
            author_email: string;
            title: string;
        };
    }

    export namespace api_config {
        type params_url =
            | "FIND_ALL_MEMBER"
            | "FIND_MEMBER"
            | "LOGIN"
            | "FIND_BOOK_BY_NUM"
            | "EDIT_MEMBER_POINT"
            | "ADD_MEMBER_POINT"
            | "SELECTED_MEMBER_POINT"
            | "SEARCH_MEMBER"
            | "FIND_ALL_BOOK"
            | "FIND_BOOK"
            | "EDIT_BOOK"
            | "DELETE_BOOK"
            | "PUBLISH_BOOK"
            | "SEARCH_BOOK";

        type params = {
            method: "GET" | "POST" | "DELETE" | "PUT";
            url: params_url;
            url_query?: any;
            data?: any;
            extraHeader?: any;
        };
        type api_response = {
            result: "SUCCESS" | "ERROR";
            data?: any;
            msg?: string;
            config?: any;
            statusCode?: number;
        };
        type admin = {
            id: string;
            access_token?: string | null;
        };
    }
}
