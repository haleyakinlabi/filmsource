import React, { useState } from "react";


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
    <div style={{ width: "100%", height: "100vh" }}>
      <nav>
        <div className="burger-menu" onClick={updateMenu}>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
        </div>
        <p>LOGO</p>
      </nav>

      <div className={menu_class}>
        <div className="pages">

            <a href="/" onclick="event.preventDefault()">
                <button>
                    Home
                </button>
            </a>

            <a href="/contact" onclick="event.preventDefault()">
                <button>
                    Contact
                </button>
            </a>

            <a href="/movies" onclick="event.preventDefault()">
                <button>
                    Movies
                </button>
            </a>


        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
