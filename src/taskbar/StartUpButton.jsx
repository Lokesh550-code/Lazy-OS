import logo from "../assets/logo.png";

const StartUpButton = ({ handleStartUpButtonClick }) => {
  return (
    <button
      onClick={handleStartUpButtonClick}
      className="h-10 cursor-pointer hover:scale-105 select-none"
    >
      <img
        className="h-10 hover:scale-105 transition select-none"
        src={logo}
        alt=""
      />
    </button>
  );
};

export default StartUpButton;
