import React from "react";
import style from "./PageHeader.module.scss";
import { Link } from "react-router-dom";

// ANTD
import { Input } from "antd";

//COMPS
import MemberPointModal from "../components/MemberPointModal";

//TYPES
type Props = {
    mainTitle: string;
    subTitle?: string;
    btnName?: string;
    placeHolder?: string;
    isModal: boolean;
};

const PageHeader = (props: Props) => {
    const { Search } = Input;
    const onSearch = (value: string) => console.log(value);

    return (
        <>
            <div className={style.header}>
                <div className={style.title}>
                    <div className={style.main_title}>{props.mainTitle}</div>
                    <div className={style.sub_title}>{props.subTitle}</div>
                </div>
                <div className={style.btn_searchbar}>
                    {props?.isModal ? (
                        <MemberPointModal type="ALL" />
                    ) : (
                        <Link className={style.btn} to={"/book/new"}>
                            {props.btnName}
                        </Link>
                    )}
                    <Search placeholder={props.placeHolder} onSearch={onSearch} style={{ width: 200 }} />
                </div>
            </div>
        </>
    );
};

export default PageHeader;
