import { IoCloseSharp } from "react-icons/io5";
import { toast } from "react-toastify";
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
  position: relative;
`;

const ButtonWish = styled.button`
  all: unset;
  width: 110px;
  height: 30px;
  /* background-color: #f6bf00; */
  border: 1px solid #f6bf00;
  color: #f6bf00;
  font-weight: 600;
  border-radius: 10px;
  margin-right: 8px;
  cursor: pointer;
`;

const ButtonRead = styled.button`
  all: unset;
  width: 110px;
  height: 30px;
  background-color: #f6bf00;
  color: #fff;
  font-weight: 600;
  border-radius: 10px;
  cursor: pointer;
`;

const Modal = ({ onClose, onAddToWishlist, onAddToReadlist }) => {
  const handleAddToWish = () => {
    onAddToWishlist();
    toast.success("위시리스트에 추가되었습니다! 🎉");
    onClose();
  };

  const handleAddToRead = () => {
    onAddToReadlist();
    toast.success("완독리스트에 추가되었습니다! 📚");
    onClose();
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <h3 style={{ marginBottom: "20px", fontSize: "14px" }}>
          이 책을 어디에 추가할까요?
          <IoCloseSharp
            onClick={onClose}
            style={{
              fontSize: "18px",
              position: "absolute",
              top: "10px",
              right: "10px",
              cursor: "pointer",
            }}
          />
        </h3>

        <ButtonWish onClick={handleAddToWish}>위시리스트</ButtonWish>
        <ButtonRead onClick={handleAddToRead}>완독리스트</ButtonRead>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
