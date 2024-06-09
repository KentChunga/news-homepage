import PropTypes from "prop-types";

const Trend = ({ thumbnail, title, description, position }) => {
  return (
    <div className="flex gap-5">
      <div
        className={`relative h-[7.5625rem] w-36 bg-cover bg-center`}
        style={{ backgroundImage: `url(${thumbnail})` }}
      ></div>

      <div className="flex flex-col">
        <span className="mb-3 text-2xl font-semibold text-darkGrayishBlue">
          {position}
        </span>
        <a
          href="#"
          className="text-md mb-3 inline-block font-bold text-veryDarkBlue transition-all duration-300 ease-in-out hover:text-softRed"
        >
          {title}
        </a>
        <p className="text-sm text-darkGrayishBlue">{description}</p>
      </div>
    </div>
  );
};

Trend.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
};

export default Trend;
