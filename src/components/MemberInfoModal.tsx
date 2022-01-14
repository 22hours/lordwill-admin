import React, { useState } from "react";
import style from "./MemberInfoModal.module.scss";
import { member_types } from "global";

// ANTD
import { Modal, Button } from "antd";

//TYPES
type Props = {
    memberData: member_types.member_list_data;
};

const MemberInfoModal = (props: Props) => {
    const { memberData } = props;

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <div className="MemberInfoModal">
            <div className={style.table_modal_btn} onClick={showModal}>
                회원 정보 조회
            </div>
            <Modal
                title="회원 정보 조회"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <div className={style.modal_footer}>
                        <div className={style.ok_btn}>확인</div>
                    </div>,
                ]}
            >
                <div className={style.member_info_modal}>
                    <div className={style.label}>이름</div>
                    <input className={style.modal_input} value={memberData.name} disabled />
                </div>
                <div className={style.member_info_modal}>
                    <div className={style.label}>이메일</div>
                    <input className={style.modal_input} value={memberData.email} disabled />
                </div>
                <div className={style.member_info_modal}>
                    <div className={style.label}>가입 일자</div>
                    <input className={style.modal_input} value={memberData.create_date} disabled />
                </div>
                <div className={style.member_info_modal}>
                    <div className={style.label}>보유 포인트</div>
                    <input className={style.modal_input} value={memberData.lordcon} disabled />
                </div>
            </Modal>
        </div>
    );
};

export default MemberInfoModal;
