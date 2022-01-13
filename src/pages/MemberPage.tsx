import React from "react";
import style from "./MemberPage.module.scss";
import { Table, Space } from "antd";

// HOC
import withAuthCheck from "../hoc/withAuthCheck";
import withPageLayout from "../hoc/withPayLayout";

// ANTD

// COMPS

// STATICS

// TYPES
type dataItem = {
    key: number;
    name: string;
    email: string;
    date: string;
    point: number;
};

type Props = {};

//구분될 항목들
const columns = [
    {
        title: "번호",
        dataIndex: "key",
        key: "key",
        sorter: {
            compare: (a: any, b: any) => a.key - b.key,
            multiple: 1,
        },
    },
    {
        title: "회원 명",
        dataIndex: "name",
        width: "10%",
        key: "name",
        sorter: {
            compare: (a: any, b: any) => a.name.localeCompare(b.name),
            multiple: 1,
        },
    },
    {
        title: "이메일 주소",
        dataIndex: "email",
        key: "email",
        width: "25%",
        sorter: {
            compare: (a: any, b: any) => a.email.localeCompare(b.email),
            multiple: 4,
        },
    },
    {
        title: "가입 일자",
        dataIndex: "date",
        width: "15%",
        key: "date",
        sorter: {
            compare: (a: any, b: any) => a.date - b.date,
            multiple: 2,
        },
    },
    {
        title: "보유 포인트",
        dataIndex: "point",
        width: "15%",
        key: "point",
        sorter: {
            compare: (a: any, b: any) => a.point - b.point,
            multiple: 2,
        },
    },
    {
        title: "관리",
        dataIndex: "",
        width: "25%",
        key: "x",
        render: () => (
            <Space size="small">
                <a>회원 정보 수정</a>
                <a>|</a>
                <a>포인트 수정</a>
            </Space>
        ),
    },
];

//실제로 들어갈 데이터
const data: dataItem[] = [
    {
        key: 1,
        name: "가",
        email: "hbin12212@gmail.com",
        date: "2022.01.10",
        point: 133,
    },
    {
        key: 2,
        name: "나",
        email: "damin8@gmail.com",
        date: "2022.01.10",
        point: 1323,
    },
    {
        key: 3,
        name: "다",
        email: "king199777@gmail.com",
        date: "2022.01.10",
        point: 14,
    },
    {
        key: 4,
        name: "라",
        email: "chuchu@gmail.com",
        date: "2022.01.10",
        point: 153,
    },
    {
        key: 5,
        name: "마",
        email: "hbin12212@gmail.com",
        date: "2022.01.10",
        point: 134,
    },
    {
        key: 6,
        name: "바",
        email: "hbin12212@gmail.com",
        date: "2022.01.10",
        point: 67,
    },
    {
        key: 7,
        name: "사",
        email: "damin8@gmail.com",
        date: "2022.01.10",
        point: 78678,
    },
    {
        key: 8,
        name: "아",
        email: "king199777@gmail.com",
        date: "2022.01.10",
        point: 234,
    },
    {
        key: 9,
        name: "자",
        email: "chuchu@gmail.com",
        date: "2022.01.10",
        point: 175,
    },
    {
        key: 10,
        name: "차",
        email: "chuchu@gmail.com",
        date: "2022.01.10",
        point: 967,
    },
    {
        key: 11,
        name: "카",
        email: "chuchu@gmail.com",
        date: "2022.01.10",
        point: 5364,
    },
    {
        key: 12,
        name: "타",
        email: "chuchu@gmail.com",
        date: "2022.01.10",
        point: 345,
    },
    {
        key: 13,
        name: "파",
        email: "chuchu@gmail.com",
        date: "2022.01.10",
        point: 731,
    },
    {
        key: 14,
        name: "하",
        email: "chuchu@gmail.com",
        date: "2022.01.10",
        point: 2487,
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
const MemberPage = (props: Props) => {
    return (
        <div className="MemberPage">
            <Table
                columns={columns}
                pagination={{ pageSize: 8 }}
                rowSelection={{ ...rowSelection }}
                dataSource={data}
                onChange={onChange}
            ></Table>
        </div>
    );
};

export default withAuthCheck(withPageLayout(MemberPage));
