import React from "react";
import style from "./BookPage.module.scss";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";

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

//실제로 들어갈 데이터
const data = [
    {
        _id: 1,
        publish_date: "2022-01-10",
        author: "winterlood",
        author_email: "king12345@gmail.com",
        title: "한 입 크기로 잘라먹는 리액트",
    },
    {
        _id: 2,
        publish_date: "2022-01-10",
        author: "winterlood",
        author_email: "king12345@gmail.com",
        title: "두 입 크기로 잘라먹는 리액트",
    },
    {
        _id: 3,
        publish_date: "2022-01-10",
        author: "winterlood",
        author_email: "king12345@gmail.com",
        title: "세 입 크기로 잘라먹는 리액트",
    },
    {
        _id: 4,
        publish_date: "2022-01-10",
        author: "winterlood",
        author_email: "king12345@gmail.com",
        title: "네 입 크기로 잘라먹는 리액트",
    },
    {
        _id: 5,
        publish_date: "2022-01-10",
        author: "winterlood",
        author_email: "king12345@gmail.com",
        title: "다섯 입 크기로 잘라먹는 리액트",
    },
    {
        _id: 6,
        publish_date: "2022-01-10",
        author: "winterlood",
        author_email: "king12345@gmail.com",
        title: "여섯 입 크기로 잘라먹는 리액트",
    },
    {
        _id: 7,
        publish_date: "2022-01-10",
        author: "winterlood",
        author_email: "king12345@gmail.com",
        title: "일곱 입 크기로 잘라먹는 리액트",
    },
    {
        _id: 8,
        publish_date: "2022-01-10",
        author: "winterlood",
        author_email: "king12345@gmail.com",
        title: "여덟 입 크기로 잘라먹는 리액트",
    },
    {
        _id: 9,
        publish_date: "2022-01-10",
        author: "winterlood",
        author_email: "king12345@gmail.com",
        title: "아홉 입 크기로 잘라먹는 리액트",
    },
    {
        _id: 10,
        publish_date: "2022-01-10",
        author: "winterlood",
        author_email: "king12345@gmail.com",
        title: "열 입 크기로 잘라먹는 리액트",
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
    const totalCount = data.length;

    const handleClick = () => {
        alert("책 클릭");
    };

    return (
        <div className="BookPage">
            <PageHeader
                mainTitle={"책 관리"}
                subTitle={`전체 등록 된 책 수 : ${totalCount}권`}
                btnName={"상품 추가하기"}
                placeHolder="상품명 검색"
                isModal={false}
            />
            <Table columns={columns} pagination={{ pageSize: 8 }} dataSource={data} onChange={onChange}></Table>
        </div>
    );
};

export default withAuthCheck(withPageLayout(BookPage));
