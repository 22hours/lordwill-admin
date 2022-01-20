import React, { useState, useEffect } from "react";
import axios from "axios";
import { api_config } from "global";
//TYPE

//export const DOMAIN = "https://api.lordwill.kr/";
export const DOMAIN = "http://192.168.0.9:8080/";

export const endpoint_reducer = (ep: api_config.params_url, url_query: any) => {
    switch (ep) {
        //LOGIN
        case "LOGIN":
            return `member/admin/login`;
        //MEMBER
        case "FIND_ALL_MEMBER":
            return `member`;
        case "FIND_MEMBER":
            return `member/${url_query.id}`;
        case "SEARCH_MEMBER":
            return `member?keyword=${url_query.keyword}`;
        case "EDIT_MEMBER_POINT":
            return `member/point`;
        case "ADD_MEMBER_POINT":
            return `member/point`;

        //BOOK
        case "FIND_BOOK_NUM":
            return `book/william/${url_query.id}`;
        default:
            throw new Error(`EP REDUCER ERROR IN :: API.TSX`);
    }
};

export const lord_axios = axios.create({
    baseURL: DOMAIN,
});
lord_axios.interceptors.response.use(
    (response: any): any => {
        var status_code = response.status;

        var res: api_config.api_response;
        switch (status_code) {
            case 200: {
                res = { result: "SUCCESS", data: response.data };
                break;
            }
            case 201: {
                var location = response.headers.location;

                res = { result: "SUCCESS", data: location || "SUCCESS" };
                break;
            }
            case 204: {
                res = { result: "SUCCESS", data: "SUCCESS" };
                break;
            }
            default: {
                res = { result: "SUCCESS", data: "SUCCESS" };
                break;
            }
        }
        return res;
    },
    async (error) => {
        const customErrorCode = error.response?.data?.status;
        const error_msg = error.response?.data?.message;
        var res: api_config.api_response;
        switch (customErrorCode) {
            case 700: {
                res = { result: "ERROR", msg: error_msg, statusCode: customErrorCode };
                break;
            }
            case 704: {
                res = { result: "ERROR", msg: error_msg, statusCode: customErrorCode };
                break;
            }
            case 706: {
                res = { result: "ERROR", msg: error_msg, statusCode: customErrorCode };
                break;
            }
            case 707: {
                res = { result: "ERROR", msg: error_msg, statusCode: customErrorCode };
                break;
            }
            case 701: {
                res = { result: "ERROR", msg: error_msg, statusCode: customErrorCode };
                break;
            }
            case 702: {
                res = { result: "ERROR", msg: error_msg, statusCode: customErrorCode };
                break;
            }
            case 703: {
                res = { result: "ERROR", msg: error_msg, statusCode: customErrorCode };
                break;
            }
            case 705: {
                res = { result: "ERROR", msg: error_msg, statusCode: customErrorCode };
                break;
            }
            case 708: {
                res = { result: "ERROR", msg: error_msg, statusCode: customErrorCode };
                break;
            }
            case 709: {
                res = { result: "ERROR", msg: error_msg, statusCode: customErrorCode };
                break;
            }
            case 710: {
                res = { result: "ERROR", msg: error_msg, statusCode: customErrorCode };
                break;
            }
            case 711: {
                res = { result: "ERROR", msg: error_msg, statusCode: customErrorCode };
                break;
            }
            default: {
                res = { result: "ERROR", msg: "서버와의 연결상태가 좋지 않습니다", statusCode: customErrorCode };
                break;
            }
        }
        return res;
    }
);

export const API_CALL = async (
    method: api_config.params["method"],
    url: api_config.params["url"],
    url_query?: api_config.params["url_query"],
    data?: api_config.params["data"],
    extraHeader?: any
): Promise<api_config.api_response> => {
    var request_URL = `${DOMAIN}${endpoint_reducer(url, url_query)}`;

    var axios_header = {
        ...extraHeader,
    };

    var axios_option = {
        method: method,
        url: request_URL,
        params: undefined,
        data: undefined,
        headers: axios_header,
    };

    if (data !== undefined) {
        method === "GET" ? (axios_option.params = data) : (axios_option.data = data);
    }
    //@ts-ignore
    return lord_axios(axios_option);
};

const AxiosClient = {
    client: lord_axios,
    API_CALL: API_CALL,
};

export default AxiosClient;
