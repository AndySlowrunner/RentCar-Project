import { useSelector } from "react-redux"
import { selectVisibleCars } from "../../redux/selectors";
import { Button, CardButton, CardImage, CardText, CardWrapper, Container, StyledSvg, Text, Title } from "./ItemsList.styled";
import sprite from "../../imeges/sprite.svg";
import { useState } from "react";
import ModalCard from "components/Modal/Modal";

const ItemList = () => {
  // const items = useSelector(getCars);
  const [activeItem, setActiveItem] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const cars = useSelector(selectVisibleCars);

  const onHandleClick = (id) => {
    setActiveItem(id === activeItem ? null : id);
  };
  
  const openModal = (item) => {
    setSelectedItem(item);
    setIsOpen(true);
  };
    
  const closeModal = () => {
    setIsOpen(false);
  }

    return (
      <Container>
        {cars.map(car => (
          <CardWrapper key={car.id}>
            <StyledSvg
              width={18}
              height={18}
              onClick={() => onHandleClick(car.id)}
            >
              <use
                href={`${sprite}#${
                  activeItem === car.id ? 'active' : 'normal'
                }`}
              ></use>
            </StyledSvg>
            <CardImage src={car.img} alt="Car" />
            <Title>
              <CardText>{`${car.make} ${car.model}, ${car.year}`}</CardText>
              <CardText>{car.rentalPrice}</CardText>
            </Title>
            <Text>{`${car.address.split(",")[1]} | Ukraine | ${car.rentalCompany} | ${car.type} | ${car.make} | ${car.mileage} | ${car.accessories[0]}`}</Text>
            <CardButton type="button" onClick={() => openModal(car)}>
              Learn more
            </CardButton>
          </CardWrapper>
        ))}
        <ModalCard
          isOpen={modalIsOpen}
          closeModal={closeModal}
          selectedItem={selectedItem}
        />
        <Button type="button">Load more</Button>
      </Container>
    );

};

export default ItemList;