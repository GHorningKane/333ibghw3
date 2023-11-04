// Layout.js

import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          {/* <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li> */}
          <li>
            <Link to="/SignUpSPA">SignUp</Link>
          </li>
          <li>
            <Link to="/LoginSPA">Login</Link>
          </li>
          <li>
            <Link to="/Reviewboard">Reviewboard</Link>
          </li>
          {/* ONLY DISPLAY IF LOGGED INNNNNNNNNNNNNNNNNNNNNNNn */}
          <li>
            <Link to="/AddSong">AddSong</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;