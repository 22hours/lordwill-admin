import React, { useState, useContext, useEffect } from "react";
import style from "./BookPage.module.scss";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import moment from "moment";

//TYPE
import { book_types } from "global";

//STORE
import { AuthContext } from "../App";

// HOC
import withAuthCheck from "../hoc/withAuthCheck";
import withPageLayout from "../hoc/withPayLayout";

// ANTD
import { Table, Space } from "antd";

// COMPS
import PageHeader from "../components/PageHeader";
// STATICS

// TYPES

type Props = {};

//pagination
const onChange = (pagination: any, filters: any, sorter: any, extra: any) => {
    console.log("params", pagination, filters, sorter, extra);
};

//select
const rowSelection = {
    onChange: (selectedRowKeys: any, selectedRows: any) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, "selectedRows: ", selectedRows);
    },
    onSelect: (record: any, selected: any, selectedRows: any) => {
        console.log(record, selected, selectedRows);
    },
    onSelectAll: (selected: any, selectedRows: any, changeRows: any) => {
        console.log(selected, selectedRows, changeRows);
    },
};

// COMPONENT
const BookPage = (props: Props) => {
    const [data, setData] = useState<book_types.book_list_data[]>([]);
    const [totalCnt, setTotalCnt] = useState(0);
    const authStore = useContext(AuthContext);
    const { search } = useLocation();
    const detail = search.includes("?keyword");

    //구분될 항목들
    const columns = [
        {
            title: "번호",
            dataIndex: "_id",
            key: "_id",
            width: "8%",
            sorter: {
                compare: (a: any, b: any) => a._id - b._id,
                multiple: 1,
            },
        },
        {
            title: "등록일",
            dataIndex: "create_date",
            key: "create_date",
            width: "10%",
            sorter: {
                compare: (a: any, b: any) => moment(a.create_date).unix() - moment(b.create_date).unix(),
                multiple: 3,
            },
        },
        {
            title: "작가명",
            dataIndex: "author",
            key: "author",
            width: "15%",
            sorter: {
                compare: (a: any, b: any) => a.author.localeCompare(b.author),
                multiple: 4,
            },
        },
        {
            title: "이메일 주소",
            dataIndex: "author_email",
            key: "author_email",
            width: "20%",
            sorter: {
                compare: (a: any, b: any) => a.author_email.localeCompare(b.author_email),
                multiple: 2,
            },
        },
        {
            title: "제목",
            dataIndex: "title",
            key: "title",
            width: "30%",
            sorter: {
                compare: (a: any, b: any) => a.title.localeCompare(b.title),
                multiple: 5,
            },
        },
        {
            title: "관리",
            dataIndex: "",
            key: "x",
            render: (data: any) => (
                <Space size="small">
                    <Link to={`/book/edit/${data._id}`}>
                        <div style={{ color: "#1890ff" }}>책 정보 수정</div>
                    </Link>
                    <div style={{ color: "#1890ff" }}>|</div>
                    <div
                        style={{ color: "#1890ff", cursor: "pointer" }}
                        onClick={() => {
                            handleConfirm(data._id);
                        }}
                    >
                        삭제
                    </div>
                </Space>
            ),
        },
    ];

    const handleConfirm = (id: number) => {
        if (window.confirm("정말 삭제하시겠습니까?")) {
            deleteBook(id);
        } else {
            return;
        }
    };

    useEffect(() => {
        if (detail) {
            searchBook();
            return;
        }
        getAllBook();
    }, [search]);

    useEffect(() => {
        if (data) {
            setTotalCnt(Object.keys(data)?.length);
        }
    }, [data]);

    const getBookData = (data: book_types.book_list_data[]) => {
        let bookData: book_types.book_list_data[] = data;
        bookData.forEach((e: any) => {
            let curDate = new Date(e.create_date);
            let year = curDate.getFullYear();
            let month = curDate.getMonth() + 1;
            let nowMonth = "";
            if (month.toString().length === 1) nowMonth = "0" + month.toString();
            let date = curDate.getDate();
            e.create_date = `${year}-${nowMonth}-${date}`;
        });
        setData(bookData);
    };

    const getAllBook = async () => {
        const res = await authStore?.authApi("GET", "FIND_ALL_BOOK", undefined);
        if (res?.result === "SUCCESS") {
            getBookData(res?.data);
        } else {
            alert(res?.msg);
        }
    };

    const searchBook = async () => {
        let keyword = search.split("=")[1];
        const res = await authStore?.authApi("GET", "SEARCH_BOOK", {
            keyword: keyword,
        });
        if (res?.result === "SUCCESS") {
            getBookData(res?.data);
        } else {
            alert(res?.msg);
        }
    };

    const deleteBook = async (id: number) => {
        const res = await authStore?.authApi("DELETE", "DELETE_BOOK", {
            id: id,
        });
        if (res?.result === "SUCCESS") {
            window.location.reload();
            alert("삭제되었습니다");
        } else {
            alert(res?.msg);
        }
    };

    return (
        <div className="BookPage">
            <PageHeader
                mainTitle={"책 관리"}
                subTitle={`전체 등록 된 책 수 : ${totalCnt}권`}
                btnName={"상품 추가하기"}
                placeHolder="상품명 검색"
                isModal={false}
            />
            <Table columns={columns} pagination={{ pageSize: 8 }} dataSource={data} onChange={onChange}></Table>
        </div>
    );
};

export default withAuthCheck(withPageLayout(BookPage));
