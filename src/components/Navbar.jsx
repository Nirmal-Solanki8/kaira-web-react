import { useState } from "react";
import { NavLink } from "react-router-dom";
import Search from "./Search";
import Home from './Home'
import data from "./data";
import Section2 from "./Section2";
import Newarrival from "./Newarrival";
import Mainproduct from "./Mainproduct";
import Bestselliing from "./Bestselliing";
import Videoimg from "./Videoimg";
import Likepart from "./Likepart";
import Blog from "./Blog";
import Logo from "../Logo";
import Feedback from "../Feedback";
import Footer from "./Footer";

const Navbar = () => {
  const [value, setValue] = useState(data);

  const [inputval, setInputval] = useState("");

  const filterItem = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setInputval(searchValue);

    const filteredData = data.filter((item) =>
      item.name.toLowerCase().includes(searchValue)
    );

    console.log(filteredData);
    setValue(filteredData);
  };

  return (
    <>
      <div className="navbar">
        <div className="Logo">
          <p>KAIRA</p>
        </div>
        <div className="nav-page">
          <NavLink to="/" className={"nav-page"}>
            HOME
          </NavLink>
          <NavLink to="/Shop" className={"nav-page"}>
            SHOP
          </NavLink>
          <NavLink to="/Blog" className={"nav-page"}>
            BLOG
          </NavLink>
          <NavLink to="/Pages" className={"nav-page"}>
            PAGES
          </NavLink>
          <NavLink to="/Contect" className={"nav-page"}>
            CONTECT
          </NavLink>
        </div>
        <div className="nav-right">
          <NavLink to="/" className={"nav-page"}>
            WISHLIST
          </NavLink>
          <NavLink to="/Cart" className={"nav-page"}>
            CART
          </NavLink>
          <NavLink to="/search"><Search value={value} inputval={inputval} onchangedata={filterItem} /></NavLink>
        </div>
      </div>

      <Home />

      <div className="card">
        {value.map((item) => (
          <div className="hero-card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <a href="#">DISCOVER NOW</a>
          </div>
        ))}
      </div>
      <Section2 />
      <Newarrival />
      <Mainproduct/>
      <Bestselliing />
      <Videoimg />
      <Likepart />
      <Blog />
      <Logo />
      <Feedback/>
      <Footer/>
    </>
  );
};

export default Navbar;
