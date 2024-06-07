import PropTypes from "prop-types";
const Overlay = ({ show }) => {
  return (
    <>
      {show && (
        <div className="fixed bottom-0 left-0 right-0 top-0 h-full w-full bg-darkGrayishBlue bg-opacity-60 transition-all duration-300 ease-in-out lg:hidden"></div>
      )}
    </>
  );
};

Overlay.propTypes = {
  show: PropTypes.bool.isRequired,
};

export default Overlay;
