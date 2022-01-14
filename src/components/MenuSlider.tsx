import React, { useCallback, useEffect, useState } from "react";
import style from "./MenuSlider.module.scss";
import { useNavigate, useLocation, Navigate } from "react-router-dom";

// ANTD
import { Layout, Menu } from "antd";
import { TeamOutlined, BookOutlined } from "@ant-design/icons";

// COMPS
import UserBox from "./UserBox";

// STATIC DATAS
const { Sider } = Layout;
const menu_list = [
    {
        key: "member",
        icon: <TeamOutlined />,
        title: "회원 관리",
    },
    {
        key: "book",
        icon: <BookOutlined />,
        title: "책 관리",
    },
];

// TYPES
type Props = {};

// COMPONENT
const MenuSlider = (props: Props) => {
    const [collapsed, setCollapsed] = useState(false);
    const onCollapse = useCallback(() => setCollapsed((v) => !v), []);
    const [selectedKeys, setSelectedKeys] = useState(["member"]);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        let nowPath = location.pathname.split("/");
        setSelectedKeys([nowPath[1]]);
    }, [location.pathname]);

    const handleClick = (e: any) => {
        if (e.key === "member") {
            navigate("/member");
        } else {
            navigate("/book");
        }
    };

    return (
        <Sider className={style.container} collapsible collapsed={collapsed} onCollapse={onCollapse}>
            <UserBox />
            <Menu
                onClick={(e) => handleClick(e)}
                theme="dark"
                defaultSelectedKeys={["member"]}
                selectedKeys={selectedKeys}
                mode="inline"
            >
                {menu_list.map(({ key, icon, title }) => (
                    <Menu.Item key={key} icon={icon} title={title}>
                        {title}
                    </Menu.Item>
                ))}
            </Menu>
        </Sider>
    );
};

export default MenuSlider;
