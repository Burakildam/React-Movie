import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link className="brand-link" to={"/add"}>
            <h1>Dev Movies</h1>
            </Link>
          </div>

          <ul className="nav-links">
          <li>
          <Link to={"/"}>İzlenecekler</Link>
          </li>
            <li>
              <Link to={"/watched"}>İzlenenler</Link>
            </li>
            
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
