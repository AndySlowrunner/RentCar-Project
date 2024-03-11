import { useSelector } from "react-redux"
import { getCars } from "../../redux/selectors";
import { Button, CardButton, CardImage, CardText, CardWrapper, Container, StyledSvg, Text, Title } from "./ItemsList.styled";
import sprite from "../../imeges/sprite.svg";
import { useState } from "react";
import ModalCard from "components/Modal/Modal";

const ItemList = () => {
    const items = useSelector(getCars);
  const [activeItem, setActiveItem] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);

    const onHandleClick = (id) => {
        setActiveItem(id === activeItem ? null : id);
  };
  
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  }

    return (
      <Container>
        {items.map(
          ({
            id,
            img,
            make,
            model,
            year,
            rentalPrice,
            rentalCompany,
            type,
            mileage,
            accessories,
          }) => (
            <CardWrapper key={id}>
              <StyledSvg
                width={18}
                height={18}
                onClick={() => onHandleClick(id)}
              >
                <use
                  href={`${sprite}#${activeItem === id ? 'active' : 'normal'}`}
                ></use>
              </StyledSvg>
              <CardImage src={img} alt="car" />
              <Title>
                <CardText>{`${make} ${model}, ${year}`}</CardText>
                <CardText>{rentalPrice}</CardText>
              </Title>
              <Text>{`Kiev | Ukraine | ${rentalCompany} | ${type} | ${make} | ${mileage} | ${accessories[0]}`}</Text>
              <CardButton type="button" onClick={openModal}>
                Learn more
              </CardButton>
            </CardWrapper>
          )
        )}
        <ModalCard isOpen={modalIsOpen} closeModal={closeModal}></ModalCard>
        <Button type="button">Load more</Button>
      </Container>
    );

};

export default ItemList;