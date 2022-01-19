import React, { useEffect, useState } from "react";
import style from "./MemberPage.module.scss";

// HOC
import withAuthCheck from "../hoc/withAuthCheck";
import withPageLayout from "../hoc/withPayLayout";

// ANTD
import { Table, Space } from "antd";

// COMPS
import MemberInfoModal from "../components/MemberInfoModal";
import MemberPointModal from "../components/MemberPointModal";
import PageHeader from "../components/PageHeader";

// STATICS

// TYPES

type Props = {};

//구분될 항목들
const columns = [
    {
        title: "번호",
        dataIndex: "id",
        key: "id",
        sorter: {
            compare: (a: any, b: any) => a.id - b.id,
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
                <div style={{ color: "#1890ff" }}>|</div>
                <MemberPointModal lordcon={data.lordcon} type="EDIT" />
            </Space>
        ),
    },
];

//실제로 들어갈 데이터
const data = [
    {
        id: 1,
        name: "가",
        email: "hbin12212@gmail.com",
        create_date: "2022.01.10",
        lordcon: 133,
    },
    {
        id: 2,
        name: "나",
        email: "damin8@gmail.com",
        create_date: "2022.01.10",
        lordcon: 1323,
    },
    {
        id: 3,
        name: "다",
        email: "king199777@gmail.com",
        create_date: "2022.01.10",
        lordcon: 14,
    },
    {
        id: 4,
        name: "라",
        email: "chuchu@gmail.com",
        create_date: "2022.01.10",
        lordcon: 153,
    },
    {
        id: 5,
        name: "마",
        email: "hbin12212@gmail.com",
        create_date: "2022.01.10",
        lordcon: 134,
    },
    {
        id: 6,
        name: "바",
        email: "hbin12212@gmail.com",
        create_date: "2022.01.10",
        lordcon: 67,
    },
    {
        id: 7,
        name: "사",
        email: "damin8@gmail.com",
        create_date: "2022.01.10",
        lordcon: 78678,
    },
    {
        id: 8,
        name: "아",
        email: "king199777@gmail.com",
        create_date: "2022.01.10",
        lordcon: 234,
    },
    {
        id: 9,
        name: "자",
        email: "chuchu@gmail.com",
        create_date: "2022.01.10",
        lordcon: 175,
    },
    {
        id: 10,
        name: "차",
        email: "chuchu@gmail.com",
        create_date: "2022.01.10",
        lordcon: 967,
    },
    {
        id: 11,
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
    const totalCount = data.length;
    const [visible, setVisible] = useState(false);

    const handleClick = () => {
        setVisible(true);
    };

    return (
        <div className={style.MemberPage}>
            <PageHeader
                mainTitle={"회원 현황 조회"}
                subTitle={`전체 회원 수 :${totalCount}명`}
                btnName={"포인트 일괄 지급"}
                placeHolder="회원 검색"
                isModal={true}
            />
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
