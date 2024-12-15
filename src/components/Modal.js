import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  width: 320px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  text-align: center;
`;

const Button = styled.button`
  all: unset;
  padding: 16px 20px;
  /* background-color: #f6bf00; */
  color: #f6bf00;
  font-weight: 600;
  border-radius: 25px;
  cursor: pointer;
`;

const Modal = ({ onClose, onAddToWishlist, onAddToReadlist }) => {
  return (
    <ModalOverlay>
      <ModalContent>
        <h3 style={{ marginBottom: "10px", fontSize: "14px" }}>
          이 책을 어디에 추가할까요?
        </h3>
        <Button onClick={onAddToWishlist}>위시리스트</Button>
        <Button onClick={onAddToReadlist}>완독리스트</Button>
        <Button onClick={onClose}>닫기</Button>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
