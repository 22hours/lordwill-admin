declare module "global" {
    export namespace GlobalTypes {
        type a = 1;
    }

    export namespace member_types {
        type member_list_data = {
            _id: number;
            email: string;
            password: string;
            cate_list: Array<string>;
            lordcon: number;
            name: string;
            create_date: string;
        };
    }

    export namespace book_types {
        type book_input_item = {
            title: string;
            author: string;
            author_email: string;
            description: string;
            author_description: string;
            thumbnail_link: string;
            pdf_download_link: string;
            lordcorn: number;
            pay_type: string;
            kor_link: string;
            overseas_link: string;
            publish_date: string;
        };
        type book_list_data = {
            title: string;
            author: string;
            author_email: string;
            description: string;
            author_description: string;
            thumbnail_link: string;
            pdf_download_link: string;
            lordcorn: number;
            pay_link_list: {
                pay_type: string;
                kor_link: string;
                overseas_link: string;
            }[];
            publish_date: string;
        };
    }

    export namespace api_config {
        type params_url =
            | "FIND_ALL_MEMBER"
            | "FIND_MEMBER"
            | "LOGIN"
            | "FIND_BOOK_NUM"
            | "EDIT_MEMBER_POINT"
            | "ADD_MEMBER_POINT"
            | "SEARCH_MEMBER"
            | "FIND_ALL_BOOK"
            | "FIND_BOOK"
            | "EDIT_BOK"
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
