import Modal from "react-modal";
import { Container, StyledModal, StyledSvg } from "./Modal.styled";
import sprite from "../../imeges/sprite.svg";

Modal.setAppElement('#root');

const ModalCard = ({ isOpen, closeModal, selectedItem }) => {
  return (
    <StyledModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Modal for Board"
    >
      <Container>
        <StyledSvg onClick={closeModal} width="24" height="24">
          <use href={`${sprite}#close`}></use>
        </StyledSvg>
        {selectedItem && (
          <div>
            <img src={selectedItem.img} alt="Car" />
            <p>{selectedItem.rentalCompany}</p>
          </div>
        )}
      </Container>
    </StyledModal>
  );
};

export default ModalCard;