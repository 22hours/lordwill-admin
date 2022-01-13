import React, { useCallback, useState } from "react";
import style from "./MenuSlider.module.scss";

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
    return (
        <Sider className={style.container} collapsible collapsed={collapsed} onCollapse={onCollapse}>
            <UserBox />
            <Menu onChange={(e) => console.log(e)} theme="dark" defaultSelectedKeys={["1"]} mode="inline">
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
