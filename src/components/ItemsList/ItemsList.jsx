import { useSelector } from "react-redux"
import { getCars } from "../../redux/selectors";
import { Button, CardButton, CardImage, CardText, CardWrapper, Container, StyledSvg, Text, Title } from "./ItemsList.styled";
import sprite from "../../imeges/sprite.svg";
import { useState } from "react";

const ItemList = () => {
    const items = useSelector(getCars);
    const [activeItem, setActiveItem] = useState(null);

    const onHandleClick = (id) => {
        setActiveItem(id === activeItem ? null : id);
    };

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
                    href={`${sprite}#${
                      activeItem === id ? 'active' : 'normal'
                    }`}
                  ></use>
              </StyledSvg>
              <CardImage src={img} alt="car" />
              <Title>
                <CardText>{`${make} ${model}, ${year}`}</CardText>
                <CardText>{rentalPrice}</CardText>
              </Title>
              <Text>{`Kiev | Ukraine | ${rentalCompany} | ${type} | ${make} | ${mileage} | ${accessories[0]}`}</Text>
              <CardButton type="button">Learn more</CardButton>
            </CardWrapper>
          )
        )}
        <Button type="button">
          Load more
        </Button>
      </Container>
    );

};

export default ItemList;