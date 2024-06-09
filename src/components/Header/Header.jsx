import { useState } from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import Overlay from "./Overlay";

const Header = () => {
  const windowWidth = window.innerWidth > 800 ? false : true;
  const [isNavOpen, setIsNavOpen] = useState(windowWidth);

  const handleMenu = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="relative mx-auto mb-4 mt-8 flex h-11 w-[90%] min-w-[375px] items-center justify-between xl:w-[80%]">
      <Logo />
      <Nav showMenu={isNavOpen} handleMenu={handleMenu} />
      {/* <Hamburger handleMenu={handleMenu} toggleMenu={isNavOpen} /> */}
      <Overlay show={isNavOpen} toggleMenu={handleMenu} />
    </header>
  );
};

export default Header;
