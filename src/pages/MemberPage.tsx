import React, { useContext, useEffect, useState } from "react";
import style from "./MemberPage.module.scss";
import { useLocation } from "react-router-dom";
import moment from "moment";

//TYPE
import { member_types } from "global";

//STORE
import { AuthContext } from "../App";

// HOC
import withAuthCheck from "../hoc/withAuthCheck";
import withPageLayout from "../hoc/withPayLayout";

// ANTD
import { Table, Radio, Divider, Space } from "antd";

// COMPS
import MemberInfoModal from "../components/MemberInfoModal";
import MemberPointModal from "../components/MemberPointModal";
import PageHeader from "../components/PageHeader";

// STATICS

// TYPES

type Props = {};

// COMPONENT
const MemberPage = (props: Props) => {
    const [realData, setRealData] = useState<member_types.real_member_list_data[]>([]);

    const authStore = useContext(AuthContext);
    const [totalCnt, setTotalCnt] = useState(0);
    const { search } = useLocation();
    const detail = search.includes("?keyword");
    const [selectedMembers, setSelectedMembers] = useState([]);

    //구분될 항목들
    const columns = [
        {
            title: "번호",
            dataIndex: "key",
            key: "key",
            sorter: {
                compare: (a: any, b: any) => a.key - b.key,
                multiple: 5,
            },
        },
        {
            title: "회원 명",
            dataIndex: "name",
            width: "12%",
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
            width: "12%",
            key: "create_date",
            sorter: {
                compare: (a: any, b: any) => moment(a.create_date).unix() - moment(b.create_date).unix(),
                multiple: 2,
            },
        },
        {
            title: "보유 포인트",
            dataIndex: "lordcon",
            width: "14%",
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
            render: (realData: any) => (
                <Space size="small">
                    <MemberInfoModal memberData={realData} />
                    <div style={{ color: "#1890ff" }}>|</div>
                    <MemberPointModal
                        lordcon={realData.lordcon}
                        setMemberData={setRealData}
                        memberId={realData.key}
                        type="EDIT"
                    />
                </Space>
            ),
        },
    ];

    const rowSelection = {
        onChange: (selectedRowKeys: React.Key[], selectedRows: any) => {
            setSelectedMembers(selectedRows);
        },
    };

    useEffect(() => {
        if (detail) {
            searchMember();
            return;
        }
        getAllMember();
    }, [search]);

    useEffect(() => {
        if (realData) {
            setTotalCnt(Object.keys(realData)?.length);
        }
    }, [realData]);

    const getMemberData = (data: member_types.member_list_data[]) => {
        let memberData: member_types.real_member_list_data[] = [];

        data.forEach((e: any) => {
            let curDate = new Date(e.create_date);
            let year = curDate.getFullYear();
            let month = curDate.getMonth() + 1;
            let date = curDate.getDate();

            memberData.push({
                key: e.id,
                name: e.name,
                email: e.email,
                create_date: `${year}-${month}-${date}`,
                lordcon: e.lordcon,
            });
        });

        setRealData(memberData);
    };

    const getAllMember = async () => {
        const res = await authStore?.authApi("GET", "FIND_ALL_MEMBER", undefined);
        if (res?.result === "SUCCESS") {
            getMemberData(res?.data);
        } else {
            alert(res?.msg);
        }
    };

    const searchMember = async () => {
        let keyword = search.split("=")[1];
        const res = await authStore?.authApi("GET", "SEARCH_MEMBER", {
            keyword: keyword,
        });
        if (res?.result === "SUCCESS") {
            getMemberData(res?.data);
        } else {
            alert(res?.msg);
        }
    };

    return (
        <div className={style.MemberPage}>
            <PageHeader
                mainTitle={"회원 현황 조회"}
                subTitle={`전체 회원 수 : ${totalCnt}명`}
                btnName={"포인트 일괄 지급"}
                selectedList={selectedMembers}
                placeHolder="회원 검색"
                isModal={true}
            />
            <Table
                rowSelection={{
                    type: "checkbox",
                    ...rowSelection,
                }}
                columns={columns}
                pagination={{ pageSize: 8 }}
                dataSource={realData}
            ></Table>
        </div>
    );
};

export default withAuthCheck(withPageLayout(MemberPage));
