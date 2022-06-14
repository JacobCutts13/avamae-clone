import { Link } from "react-router-dom";

export default function Navbar(): JSX.Element {
  return (
    <div id="navbar">
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about-us">About Us</Link>
        <Link to="/contact-us">Contact Us</Link>
      </div>
    </div>
  );
}
