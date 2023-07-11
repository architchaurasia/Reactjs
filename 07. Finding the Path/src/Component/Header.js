import { useState } from "react";
import { Link } from "react-router-dom";
//Title

//? SPA- Single Page Application
//? Two type of routing
//? Client Side and Server side routing

export const Title = () => (
  <a href="/">
    <img
      className="logo"
      src="https://obs.line-scdn.net/0m0339dd5b72513e8a8d6127b836e5ecf1e128f1da5cb7"
      alt="logo"
    />
  </a>
);

//Header
const Header = () => {
  const [login, setLogin] = useState(false);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>

          <Link to="/About">
            <li>About Us</li>
          </Link>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
      {login ? (
        <button onClick={() => setLogin(false)}>Logout</button>
      ) : (
        <button onClick={() => setLogin(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
