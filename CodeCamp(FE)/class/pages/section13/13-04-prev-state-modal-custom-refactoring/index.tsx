import { Modal } from "antd";
import { useState } from "react";
import { DaumPostcodeEmbed } from "react-daum-postcode";
import type { Address } from "react-daum-postcode";
export default function ModalAlertPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onToggleModal = (): void => {
    setIsModalOpen((prev) => !prev);
  };
  const handleOk = (): void => {
    //setIsModalOpen(false);
    onToggleModal();
  };
  const handleCancel = (): void => {
    //setIsModalOpen(false);
    onToggleModal();
  };

  const handleComplete = (data: Address): void => {
    console.log(data);
    //setIsModalOpen(false);
    onToggleModal();
  };
  return (
    <>
      <button onClick={onToggleModal}>모달창 열기!!</button>
      {/* 모달 종료 방식 1 - 모달 숨기는 방법(ex, 이력서 등) */}
      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <DaumPostcodeEmbed onComplete={handleComplete} />
      </Modal>
      {/* 모달 종료 방식 2 - 모달 삭제하는 방법(ex, 신용카드, 비밀번호 등) */}
      {isModalOpen && (
        <Modal open={true} onOk={handleOk} onCancel={handleCancel}>
          <DaumPostcodeEmbed onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
}
