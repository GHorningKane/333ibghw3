import "./SignUp.css";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    backgroundColor: "#FF8B26", // Add your desired background color
    padding: "10px",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "white",
    fontWeight: 'bold',
  };

  return (
    <div>
      <header>
        <nav style={navStyle}>
        <Link to="/SignUpSPA" style={linkStyle}>SignUp</Link>
        <Link to="/LoginSPA" style={linkStyle}>Login</Link>
        <Link to="/Reviewboard" style={linkStyle}>Reviewboard</Link>
        <Link to="/AddSong" style={linkStyle}>AddSong</Link>
        </nav>
      </header>

      <Outlet />
    </div>
  );
};

export default Layout;
