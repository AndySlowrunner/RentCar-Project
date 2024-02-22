import { Link } from "react-router-dom";
import sprite from "../../imeges/sprite.svg";
import { Container } from "./Heder.styled";

const Header = () => {
    return (
      <Container>
        <svg width={100} height={98}>
          <use href={`${sprite}#avto-logo`}></use>
        </svg>
        <h2>Rent Car</h2>
        <Link to="/">Home</Link>
        <Link to="/cataloge">Cataloge</Link>
        <Link to="/favorite">Favorite</Link>
      </Container>
    );
}

export default Header;