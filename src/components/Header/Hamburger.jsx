import PropTypes from "prop-types";
import Open from "../../assets/images/icon-menu.svg";
import Close from "../../assets/images/icon-menu-close.svg";

const Hamburger = ({ toggleMenu, handleMenu }) => {
  return (
    <div
      className="relative z-50 flex cursor-pointer transition-all duration-300 ease-in-out lg:hidden"
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
