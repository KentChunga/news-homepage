import NLogo from "../../assets/images/logo.svg";

const Logo = () => {
  return (
    <div className="relative w-14">
      <a href="#">
        <img src={NLogo} alt="News logo" />
      </a>
    </div>
  );
};

export default Logo;
