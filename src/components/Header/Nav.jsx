import PropTypes from "prop-types";
import Hamburger from "./Hamburger";
const links = ["home", "new", "popular", "trending", "categories"];

const Nav = ({ showMenu, handleMenu }) => {
  return (
    <>
      <nav
        className={`${showMenu ? "translate-x-0" : "translate-x-full"} fixed bottom-0 right-0 top-0 z-40 h-full w-64 bg-offWhite pl-8 pt-36 text-left transition-all duration-300 ease-out lg:relative lg:w-auto lg:translate-x-0 lg:p-0`}
      >
        <ul className="flex h-full flex-col gap-11 lg:flex-row lg:items-center">
          {links.map((link, index) => (
            <li
              key={index}
              className="font-medium capitalize text-darkGrayishBlue transition-colors duration-300 ease-in-out hover:text-softRed lg:font-semibold"
            >
              <a href="#">{link}</a>
            </li>
          ))}
        </ul>
      </nav>
      <Hamburger toggleMenu={showMenu} handleMenu={handleMenu} />
    </>
  );
};

Nav.propTypes = {
  showMenu: PropTypes.bool.isRequired,
  handleMenu: PropTypes.func.isRequired,
};

export default Nav;
