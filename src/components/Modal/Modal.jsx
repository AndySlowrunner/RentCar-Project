import Modal from "react-modal";
import { Container, StyledModal } from "./Modal.styled";
import sprite from "../../imeges/sprite.svg";

Modal.setAppElement('#root');

const ModalCard = ({ isOpen, closeModal }) => {
  return (
    <StyledModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Modal for Board"
    >
      <Container>
        <svg onClick={closeModal}>
          <use href={`${sprite}#close`}></use>
        </svg>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Container>
    </StyledModal>
  );
};

export default ModalCard;