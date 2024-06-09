import PropTypes from "prop-types";
const Overlay = ({ show, toggleMenu }) => {
  return (
    <>
      {show && (
        <div
          className="fixed bottom-0 left-0 right-0 top-0 z-40 h-screen w-full cursor-pointer bg-darkGrayishBlue bg-opacity-50 transition-all duration-300 ease-in-out lg:hidden"
          onClick={toggleMenu}
        ></div>
      )}
    </>
  );
};

Overlay.propTypes = {
  show: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};

export default Overlay;
