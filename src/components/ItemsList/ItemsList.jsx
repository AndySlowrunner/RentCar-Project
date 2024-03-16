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
  const [selectedItem, setSelectedItem] = useState(null);

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
        {items.map(item => (
          <CardWrapper key={item.id}>
            <StyledSvg
              width={18}
              height={18}
              onClick={() => onHandleClick(item.id)}
            >
              <use
                href={`${sprite}#${
                  activeItem === item.id ? 'active' : 'normal'
                }`}
              ></use>
            </StyledSvg>
            <CardImage src={item.img} alt="Car" />
            <Title>
              <CardText>{`${item.make} ${item.model}, ${item.year}`}</CardText>
              <CardText>{item.rentalPrice}</CardText>
            </Title>
            <Text>{`Kiev | Ukraine | ${item.rentalCompany} | ${item.type} | ${item.make} | ${item.mileage} | ${item.accessories[0]}`}</Text>
            <CardButton type="button" onClick={()=>openModal(item)}>
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



// {
//             id,
//             img,
//             make,
//             model,
//             year,
//             rentalPrice,
//             rentalCompany,
//             type,
//             mileage,
//             accessories,
//           }