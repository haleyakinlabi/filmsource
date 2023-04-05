import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Search } from "./Search";

const BurgerMenu = () => {
  // to change burger classes
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  // toggle burger menu change
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <div>
      <nav>
        <div className="burger-menu" onClick={updateMenu}>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
        </div>
        <p>LOGO</p>
        <Search />
      </nav>

      <div className={menu_class}>
        <div>
            <ul className="pages">
                <li className="navBtn"><AnchorLink href="#home">Home</AnchorLink></li>
                <li className="navBtn"><AnchorLink href="#movies">Movies</AnchorLink></li>
                <li className="navBtn"><AnchorLink href="#contact">Contact</AnchorLink></li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
