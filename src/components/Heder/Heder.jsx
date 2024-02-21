import { Link } from "react-router-dom";

const Header = () => {
    return (
      <div>
        <Link to="/">Home</Link>
        <Link to="/cataloge">Cataloge</Link>
        <Link to="/favorite">Favorite</Link>
      </div>
    );
}

export default Header;