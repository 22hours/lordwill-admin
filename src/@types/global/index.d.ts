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
        type book_list_data = {};
    }

    export namespace api_config {
        type params_url = "FIND_ALL_MEMBER" | "FIND_MEMBER" | "LOGIN";
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
        };
    }
}
