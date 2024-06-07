import PropTypes from "prop-types";
import Open from "/images/icon-menu.svg";
import Close from "/images/icon-menu-close.svg";

const Hamburger = ({ toggleMenu, handleMenu }) => {
  return (
    <div
      className={`z-50 flex cursor-pointer transition-all duration-300 ease-in-out lg:relative lg:hidden ${toggleMenu ? "fixed right-3" : ""}`}
      onClick={handleMenu}
    >
      {!toggleMenu ? (
        <img
          src={Open}
          alt=""
          className="transition-all duration-300 ease-in"
        />
      ) : (
        <img src={Close} alt="" />
      )}
    </div>
  );
};

Hamburger.propTypes = {
  toggleMenu: PropTypes.bool.isRequired,
  handleMenu: PropTypes.func.isRequired,
};

export default Hamburger;
