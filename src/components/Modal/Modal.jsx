import Modal from "react-modal";
import { Accessories, CardText, Condition, ConditionContainer, Container, Description, Features, ModalButton, StyledImage, StyledModal, StyledSvg, Text, Title } from "./Modal.styled";
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
              <Text>{`${selectedItem.address.split(",")[1]} | Ukraine | Id: ${selectedItem.id} | Year: ${selectedItem.year} | Type: ${selectedItem.type} | Fuel Consumption: ${selectedItem.fuelConsumption} | Engine Size: ${selectedItem.engineSize}`}</Text>
            </Title>
            <Description>{selectedItem.description}</Description>
            <Features>
              <Accessories>Accessories and functionalities:</Accessories>
              <Text>{selectedItem.accessories.join(' | ')}</Text>
            </Features>
            <Accessories>Rental Conditions:</Accessories>
            <ConditionContainer>
              {selectedItem.rentalConditions.split('\n').map(acces => {
                return <Condition>{acces}</Condition>;
              })}
              <Condition>{`Mileage: ${selectedItem.mileage}`}</Condition>
              <Condition>{`Price: ${selectedItem.rentalPrice}`}</Condition>
            </ConditionContainer>
            <ModalButton>
              <a href="tel:+380730000000">Rental car</a>
            </ModalButton>
          </div>
        )}
      </Container>
    </StyledModal>
  );
};

export default ModalCard;