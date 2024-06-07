import PropTypes from "prop-types";

const Article = ({ title, description }) => {
  return (
    <div className="relative mb-4 border-b border-b-darkGrayishBlue pb-4 last:border-none last:pb-0">
      <h2 className="first:mp-0 mb-3 font-semibold text-offWhite transition-all duration-300 ease-in-out hover:text-softOrange">
        <a href="#">{title}</a>
      </h2>
      <p className="text-grayishBlue">{description}</p>
    </div>
  );
};

Article.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Article;
