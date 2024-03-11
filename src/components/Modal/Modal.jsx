import Modal from "react-modal";
import { StyledModal } from "./Modal.styled";

Modal.setAppElement('#root');

const ModalCard = ({ isOpen, closeModal }) => {
  return (
    <StyledModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Modal for Board"
    >
      <h2>Hello</h2>
      <button onClick={closeModal}>close</button>
      <div>I am a modal</div>
      <form>
        <input />
        <button>tab navigation</button>
        <button>stays</button>
        <button>inside</button>
        <button>the modal</button>
      </form>
    </StyledModal>
  );
};

export default ModalCard;