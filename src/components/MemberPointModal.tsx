import React, { useContext, useEffect, useState } from "react";
import style from "./MemberPointModal.module.scss";
import { useLocation } from "react-router-dom";

//STORE
import { AuthContext } from "../App";

//HOOKS
import useInput from "../hooks/useInput";

// ANTD
import { Modal, Spin } from "antd";

//TYPES
type Props = {
    lordcon?: any;
    type: "EDIT" | "ALL";
    memberId?: number;
};

const MemberPointModal = (props: Props) => {
    const [visible, setVisible] = useState(false);
    const [confirmLoading, setConfimLoading] = useState(false);
    const location = useLocation();
    const memberLordcon = useInput();
    //@ts-ignore
    const { authApi } = useContext(AuthContext);

    useEffect(() => {
        memberLordcon.setValue(props?.lordcon);
    }, [props?.lordcon]);

    const showModal = () => {
        setVisible(true);
    };

    const changeMemberPoint = async () => {
        const res = await authApi("PUT", "EDIT_MEMBER_POINT", undefined, {
            member_id: props?.memberId,
            lordcon: parseInt(memberLordcon.value),
        });
        if (res?.result === "SUCCESS") {
            alert("포인트 수정 완료");
        } else {
            alert(res?.msg);
        }
    };

    const giveAllMemberPoint = async () => {
        const res = await authApi("PUT", "ADD_MEMBER_POINT", undefined, {
            lordcon: parseInt(memberLordcon.value),
        });
        if (res?.result === "SUCCESS") {
            alert("포인트 지급 완료");
        } else {
            alert(res?.msg);
        }
    };

    const handleEdit = () => {
        if (!memberLordcon.value) {
            alert("변경할 포인트를 입력해주세요");
            return;
        }
        changeMemberPoint();
        setConfimLoading(true);
        setTimeout(() => {
            setVisible(false);
            setConfimLoading(false);
        }, 2000);
    };

    const handleAdd = () => {
        if (!memberLordcon.value) {
            alert("지급할 포인트를 입력해주세요");
            return;
        }
        giveAllMemberPoint();
        setConfimLoading(true);
        setTimeout(() => {
            setVisible(false);
            setConfimLoading(false);
        }, 2000);
    };

    const handleCancel = () => {
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
            ) : (
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
                                    <div className={style.edit_btn} onClick={handleAdd}>
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
            )}
        </div>
    );
};

export default MemberPointModal;
