import React, { useEffect, useState } from "react";
import style from "./MemberPointModal.module.scss";

//HOOKS
import useInput from "../hooks/useInput";

// ANTD
import { Modal, Button } from "antd";

//TYPES
type Props = {
    lordcon?: any;
    type: "EDIT" | "ALL";
};

const MemberPointModal = (props: Props) => {
    const [visible, setVisible] = useState(false);
    const [confirmLoading, setConfimLoading] = useState(false);

    const memberLordcon = useInput();

    useEffect(() => {
        memberLordcon.setValue(props?.lordcon);
    }, [props?.lordcon]);

    const showModal = () => {
        setVisible(true);
    };

    const handleOk = () => {
        setConfimLoading(true);
        setTimeout(() => {
            setVisible(false);
            setConfimLoading(false);
        }, 2000);
    };

    const handleCancel = () => {
        console.log("Clicked cancel button");
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
                        confirmLoading={confirmLoading}
                        onCancel={handleCancel}
                        footer={[
                            <div className={style.modal_footer}>
                                <div className={style.edit_btn}>수정하기</div>
                                <div className={style.cancle_btn}>취소</div>
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
                                <div className={style.edit_btn}>지급하기</div>
                                <div className={style.cancle_btn}>취소</div>
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
