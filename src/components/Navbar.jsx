import { useSelector } from 'react-redux';
import { BsCartDashFill } from "react-icons/bs";
import { FaShopware } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const cart = useSelector((state) => state.cart.cart);
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link to="/">
          <p className="navbar-brand">
            <FaShopware className="text-info" /> My Shop
          </p>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/cart">
                <button className="btn btn-outline-success me-3" type="submit">
                  <BsCartDashFill /> {cart?.length}
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/fav">
                <button className="btn btn-outline-danger" type="submit">
                  <AiFillHeart />
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
