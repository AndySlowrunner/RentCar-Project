
import sprite from "../../imeges/sprite.svg";
import { Container, Link, Logo, LogoText, Nav } from "./Heder.styled";

const Header = () => {
    return (
      <Container>
        <Logo>
          <svg width={100} height={90}>
            <use href={`${sprite}#avto-logo`}></use>
          </svg>
          <LogoText>Rent Car</LogoText>
        </Logo>
        <Nav>
          <Link to="/">Home</Link>
          <Link to="/cataloge">Cataloge</Link>
          <Link to="/favorite">Favorite</Link>
        </Nav>
      </Container>
    );
}

export default Header;