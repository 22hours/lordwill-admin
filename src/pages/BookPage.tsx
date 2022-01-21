import React, { useState, useContext, useEffect } from "react";
import style from "./BookPage.module.scss";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";

//STORE
import { AuthContext } from "../App";

// HOC
import withAuthCheck from "../hoc/withAuthCheck";
import withPageLayout from "../hoc/withPayLayout";

// ANTD
import { Table, Space } from "antd";

// COMPS

// STATICS

// TYPES

type Props = {};

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
        dataIndex: "publish_date",
        key: "publish_date",
        sorter: {
            compare: (a: any, b: any) => a.publish_date - b.publish_date,
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
        width: "12%",
        key: "x",
        render: (data: any) => (
            <Space size="small">
                <Link to={`/book/edit/${data._id}`}>
                    <div style={{ color: "#1890ff" }}>책 정보 수정</div>
                </Link>
            </Space>
        ),
    },
];

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
    const [data, setData] = useState();
    const [totalCnt, setTotalCnt] = useState(0);
    const authStore = useContext(AuthContext);

    const getAllBook = async () => {
        const res = await authStore?.authApi("GET", "FIND_ALL_BOOK", undefined);
        if (res?.result === "SUCCESS") {
            setData(res?.data);
        } else {
            alert(res?.msg);
        }
    };

    useEffect(() => {
        getAllBook();
    }, []);

    useEffect(() => {
        if (data) {
            setTotalCnt(Object.keys(data)?.length);
        }
    }, [data]);

    const handleClick = () => {
        alert("책 클릭");
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
