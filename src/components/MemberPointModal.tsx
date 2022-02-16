import React, { useContext, useEffect, useState } from "react";
import style from "./MemberPointModal.module.scss";
import { useNavigate, useLocation } from "react-router-dom";

//STORE
import { AuthContext } from "../App";

//HOOKS
import useInput from "../hooks/useInput";

// ANTD
import { Modal, Spin } from "antd";

//TYPES
type Props = {
    lordcon?: number | null;
    type: "EDIT" | "ALL" | "SELECT";
    memberId?: number;
    setMemberData?: any;
    selectedList?: any;
};

const MemberPointModal = (props: Props) => {
    const [visible, setVisible] = useState(false);
    const [confirmLoading, setConfimLoading] = useState(false);
    const memberLordcon = useInput();
    const authStore = useContext(AuthContext);

    useEffect(() => {
        if (props?.lordcon) {
            memberLordcon.setValue(props?.lordcon.toString());
        }
    }, [props?.lordcon]);

    const showModal = () => {
        setVisible(true);
    };

    //수정
    const changeMemberPoint = async () => {
        const res = await authStore?.authApi("PUT", "EDIT_MEMBER_POINT", undefined, {
            member_id: props?.memberId,
            lordcon: parseInt(memberLordcon.value),
        });
        if (res?.result === "SUCCESS") {
            window.location.reload();
            alert("포인트 수정 완료");
        } else {
            alert(res?.msg);
        }
    };

    //전체
    const giveAllMemberPoint = async () => {
        const res = await authStore?.authApi("PUT", "ADD_MEMBER_POINT", undefined, {
            lordcon: parseInt(memberLordcon.value),
        });
        if (res?.result === "SUCCESS") {
            window.location.reload();
            alert("포인트 지급 완료");
        } else {
            alert(res?.msg);
        }
    };

    //선택
    const giveSelectedMemberPoint = async () => {
        console.log(props.selectedList);
        let selectedKey: any[] = [];
        props?.selectedList?.forEach((e: any) => {
            selectedKey.push(e.key);
        });

        const res = await authStore?.authApi("PUT", "SELECTED_MEMBER_POINT", undefined, {
            member_id_list: selectedKey,
            lordcon: parseInt(memberLordcon.value),
        });
        if (res?.result === "SUCCESS") {
            window.location.reload();
            alert("포인트 선택 지급 완료");
        } else {
            alert(res?.msg);
        }
    };

    //선택지급
    const handleSelect = () => {
        if (!memberLordcon.value) {
            alert("지급할 포인트를 입력해주세요");
            return;
        }
        if (parseInt(memberLordcon.value) < 0) {
            alert("양수 값을 입력해주세요");
            return;
        }
        giveSelectedMemberPoint();
        setConfimLoading(true);
        setTimeout(() => {
            setVisible(false);
            setConfimLoading(false);
        }, 2000);
    };

    //수정
    const handleEdit = () => {
        if (!memberLordcon.value) {
            alert("변경할 포인트를 입력해주세요");
            return;
        }
        if (parseInt(memberLordcon.value) < 0) {
            alert("양수 값을 입력해주세요");
            return;
        }
        changeMemberPoint();
        setConfimLoading(true);
        setTimeout(() => {
            setVisible(false);
            setConfimLoading(false);
        }, 2000);
    };

    //전체지급
    const handleAll = () => {
        if (!memberLordcon.value) {
            alert("지급할 포인트를 입력해주세요");
            return;
        }
        if (parseInt(memberLordcon.value) < 0) {
            alert("양수 값을 입력해주세요");
            return;
        }
        giveAllMemberPoint();
        setConfimLoading(true);
        setTimeout(() => {
            setVisible(false);
            setConfimLoading(false);
        }, 2000);
    };

    //취소
    const handleCancel = () => {
        memberLordcon.setValue("");
        setVisible(false);
    };

    return (
        <div className={style.MemberPointModal}>
            {props.type === "EDIT" ? (
                <>
                    <div className={style.table_modal_btn} onClick={showModal}>
                        포인트 수정
                    </div>
                    <Modal
                        title="포인트 수정"
                        visible={visible}
                        onCancel={handleCancel}
                        footer={[
                            <div className={style.modal_footer}>
                                <Spin spinning={confirmLoading}>
                                    <div className={style.edit_btn} onClick={handleEdit}>
                                        수정하기
                                    </div>
                                </Spin>
                                <div className={style.cancle_btn} onClick={handleCancel}>
                                    취소
                                </div>
                            </div>,
                        ]}
                    >
                        <div className={style.member_point_modal}>
                            <div>변경할 포인트를 입력해주세요</div>
                            <input
                                className={style.modal_input}
                                value={memberLordcon.value}
                                onChange={memberLordcon.onChange}
                            />
                        </div>
                    </Modal>
                </>
            ) : props.type === "ALL" ? (
                <>
                    <div className={style.btn} onClick={showModal}>
                        포인트 일괄 지급
                    </div>

                    <Modal
                        title="포인트 일괄 지급"
                        visible={visible}
                        confirmLoading={confirmLoading}
                        onCancel={handleCancel}
                        footer={[
                            <div className={style.modal_footer}>
                                <Spin spinning={confirmLoading}>
                                    <div className={style.edit_btn} onClick={handleAll}>
                                        지급하기
                                    </div>
                                </Spin>
                                <div className={style.cancle_btn} onClick={handleCancel}>
                                    취소
                                </div>
                            </div>,
                        ]}
                    >
                        <div className={style.member_point_modal}>
                            <div>일괄 지급할 포인트를 입력해주세요</div>
                            <input
                                className={style.modal_input}
                                value={memberLordcon.value}
                                onChange={memberLordcon.onChange}
                            />
                        </div>
                    </Modal>
                </>
            ) : (
                <>
                    <div className={style.btn} onClick={showModal}>
                        포인트 선택 지급
                    </div>

                    <Modal
                        title="포인트 선택 지급"
                        visible={visible}
                        confirmLoading={confirmLoading}
                        onCancel={handleCancel}
                        footer={[
                            <div className={style.modal_footer}>
                                <Spin spinning={confirmLoading}>
                                    <div className={style.edit_btn} onClick={handleSelect}>
                                        지급하기
                                    </div>
                                </Spin>
                                <div className={style.cancle_btn} onClick={handleCancel}>
                                    취소
                                </div>
                            </div>,
                        ]}
                    >
                        <div className={style.member_point_modal}>
                            <div>선택 지급할 포인트를 입력해주세요</div>
                            <input
                                className={style.modal_input}
                                value={memberLordcon.value}
                                onChange={memberLordcon.onChange}
                            />
                        </div>
                    </Modal>
                </>
            )}
        </div>
    );
};

export default MemberPointModal;
