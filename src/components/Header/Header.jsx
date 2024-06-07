import { useState } from "react";
import Hamburger from "./Hamburger";
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
    <header className="relative mx-auto mb-4 mt-8 flex h-11 w-[90%] items-center justify-between md:w-[69.5rem] lg:w-[70%]">
      <Logo />
      <Nav showMenu={isNavOpen} />
      <Hamburger handleMenu={handleMenu} toggleMenu={isNavOpen} />
      <Overlay show={isNavOpen} />
    </header>
  );
};

export default Header;
