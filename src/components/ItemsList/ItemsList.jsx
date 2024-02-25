// import { useEffect } from "react";
import { useSelector } from "react-redux"
// import { fetchCars } from "redux/operations";
import { getCars } from "../../redux/selectors";
import { Button, CardButton, CardImage, CardText, CardWrapper, Container, StyledSvg, Text, Title } from "./ItemsList.styled";
import sprite from "../../imeges/sprite.svg";
import { useState } from "react";

const ItemList = () => {
    const items = useSelector(getCars);
    const [activeItem, setActiveItem] = useState(null);
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(fetchCars());
    // }, [dispatch]);

    const onHandleClick = (id) => {
        setActiveItem(id === activeItem ? null : id);
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
              <StyledSvg width={18} height={18} onClick={()=>onHandleClick(id)}>
                <svg>
                        <use href={`${sprite}#${activeItem === id ? 'active' : 'normal'}`}></use>
                  </svg>
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
        <Button type="button">Load more</Button>
      </Container>
    );

};

export default ItemList;