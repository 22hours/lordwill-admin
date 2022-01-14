import React, { useEffect, useState } from "react";

// HOC
import withAuthCheck from "../hoc/withAuthCheck";
import withPageLayout from "../hoc/withPayLayout";

// ANTD
import { Table, Space } from "antd";

// COMPS
import MemberInfoModal from "../components/MemberInfoModal";
import MemberPointModal from "../components/MemberPointModal";

// STATICS

// TYPES

type Props = {};

//구분될 항목들
const columns = [
    {
        title: "번호",
        dataIndex: "_id",
        key: "_id",
        sorter: {
            compare: (a: any, b: any) => a._id - b._id,
            multiple: 5,
        },
    },
    {
        title: "회원 명",
        dataIndex: "name",
        width: "10%",
        key: "name",
        sorter: {
            compare: (a: any, b: any) => a.name.localeCompare(b.name),
            multiple: 4,
        },
    },
    {
        title: "이메일 주소",
        dataIndex: "email",
        key: "email",
        width: "25%",
        sorter: {
            compare: (a: any, b: any) => a.email.localeCompare(b.email),
            multiple: 1,
        },
    },
    {
        title: "가입 일자",
        dataIndex: "create_date",
        width: "15%",
        key: "create_date",
        sorter: {
            compare: (a: any, b: any) => a.create_date - b.create_date,
            multiple: 2,
        },
    },
    {
        title: "보유 포인트",
        dataIndex: "lordcon",
        width: "15%",
        key: "lordcon",
        sorter: {
            compare: (a: any, b: any) => a.lordcon - b.lordcon,
            multiple: 3,
        },
    },
    {
        title: "관리",
        dataIndex: "",
        width: "25%",
        key: "x",
        render: (data: any) => (
            <Space size="small">
                <MemberInfoModal memberData={data} />
                <div style={{ color: "#40a9ff" }}>|</div>
                <MemberPointModal lordcon={data.lordcon} />
            </Space>
        ),
    },
];

//실제로 들어갈 데이터
const data = [
    {
        _id: 1,
        name: "가",
        email: "hbin12212@gmail.com",
        create_date: "2022.01.10",
        lordcon: 133,
    },
    {
        _id: 2,
        name: "나",
        email: "damin8@gmail.com",
        create_date: "2022.01.10",
        lordcon: 1323,
    },
    {
        _id: 3,
        name: "다",
        email: "king199777@gmail.com",
        create_date: "2022.01.10",
        lordcon: 14,
    },
    {
        _id: 4,
        name: "라",
        email: "chuchu@gmail.com",
        create_date: "2022.01.10",
        lordcon: 153,
    },
    {
        _id: 5,
        name: "마",
        email: "hbin12212@gmail.com",
        create_date: "2022.01.10",
        lordcon: 134,
    },
    {
        _id: 6,
        name: "바",
        email: "hbin12212@gmail.com",
        create_date: "2022.01.10",
        lordcon: 67,
    },
    {
        _id: 7,
        name: "사",
        email: "damin8@gmail.com",
        create_date: "2022.01.10",
        lordcon: 78678,
    },
    {
        _id: 8,
        name: "아",
        email: "king199777@gmail.com",
        create_date: "2022.01.10",
        lordcon: 234,
    },
    {
        _id: 9,
        name: "자",
        email: "chuchu@gmail.com",
        create_date: "2022.01.10",
        lordcon: 175,
    },
    {
        _id: 10,
        name: "차",
        email: "chuchu@gmail.com",
        create_date: "2022.01.10",
        lordcon: 967,
    },
    {
        _id: 11,
        name: "카",
        email: "chuchu@gmail.com",
        create_date: "2022.01.10",
        lordcon: 5364,
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
    const [memberData, setMemberData] = useState();

    useEffect(() => {}, []);

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
