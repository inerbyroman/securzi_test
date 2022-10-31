import "../styles/global.scss";

const BlueButton = ({ type, value, disabled, white, onClick }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={white ? "white-button" : "blue-button"}
      type={type}
    >
      {value}
    </button>
  );
};

export default BlueButton;
