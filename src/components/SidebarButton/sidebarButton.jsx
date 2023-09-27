import { useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";

function SidebarButton() {
  const [burgerLine, setBurgerLine] = useState("burgerBar unclicked");
  const [menuClass, setMenuCLass] = useState("menu hidden");
  const [isMenuCLicked, setIsMenuCLicked] = useState(false);
  const updateMenu = () => {
    if (!isMenuCLicked) {
      setBurgerLine("burgerBar clicked");
      setMenuCLass("menu visible");
    } else {
      setBurgerLine("burgerBar unclicked");
      setMenuCLass("menu hidden");
    }
    setIsMenuCLicked(!isMenuCLicked);
  };

  return (
    <div>
      <div className="burgerMenu" onClick={updateMenu}>
        <div className={burgerLine}></div>
        <div className={burgerLine}></div>
        <div className={burgerLine}></div>
      </div>
      <div className={menuClass}>
        <ul className="routes">
          <li>About Us</li>
          <li>Services</li>
          <li>Case studies</li>
          <li>Our team</li>
          <li>Our partners</li>
          <li>Testomonials</li>
          <li>Careers</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
}

export default SidebarButton;
