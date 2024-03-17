import Modal from "react-modal";
import { CardText, Container, StyledImage, StyledModal, StyledSvg, Text, Title } from "./Modal.styled";
import sprite from "../../imeges/sprite.svg";

Modal.setAppElement('#root');

const ModalCard = ({ isOpen, closeModal, selectedItem }) => {
  
  return (
    <StyledModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Modal for Board"
      style={{
        overlay: {
          backgroundColor: 'rgba(18, 20, 23, 0.5)',
        },
      }}
    >
      <Container>
        <StyledSvg onClick={closeModal} width="24" height="24">
          <use href={`${sprite}#close`}></use>
        </StyledSvg>
        {selectedItem && (
          <div>
            <StyledImage src={selectedItem.img} alt="Car" />
            <Title>
              <CardText>{`${selectedItem.make} ${selectedItem.model}, ${selectedItem.year}`}</CardText>
              <Text>{`Kiev | Ukraine | Id: ${selectedItem.id} | Year: ${selectedItem.year} | Type: ${selectedItem.type} | Fuel Consumption: ${selectedItem.fuelConsumption} | Engine Size: ${selectedItem.engineSize}`}</Text>
            </Title>
            <p>{selectedItem.description}</p>
            <p>Accessories and functionalities:</p>
            <Text>{selectedItem.accessories }</Text>
          </div>
        )}
      </Container>
    </StyledModal>
  );
};

export default ModalCard;