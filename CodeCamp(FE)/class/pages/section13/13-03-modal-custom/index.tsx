import { Modal } from "antd";
import { useState } from "react";
export default function ModalAlertPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = (): void => {
    setIsModalOpen(true);
  };
  const handleOk = (): void => {
    setIsModalOpen(false);
  };
  const handleCancel = (): void => {
    setIsModalOpen(false);
  };
  return (
    <>
      <button onClick={showModal}>모달창 열기!!</button>
      {isModalOpen && (
        <Modal
          title="모달 제목"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          비밀번호 입력 : <input type="password" />
        </Modal>
      )}
    </>
  );
}
