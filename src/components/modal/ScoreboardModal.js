import "../../styles/modal.scss";
import CloseIcon from "../../icon/CloseIcon";
import ReactPortal from "../ReactPortal";
import BlueButton from "../BlueButton";
import InputOk from "../../icon/InputOk";
import { useState } from "react";

const ScoreboardModal = ({ onClose }) => {
  const [changeInput, setChangeInput] = useState("");
  const [errModal, setErrModal] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [falseName, setFalseName] = useState("");

  const changeInputHandler = (e) => {
    setChangeInput(e.target.value);
    if (changeInput.length > 0) {
      setDisabled(false);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const onClickButton = (e) => {
    setFalseName(changeInput);
    if (changeInput === "hero") {
      setErrModal(true);
      setChangeInput("");
      setDisabled(true);
      return;
    }
    onClose();
  };

  return (
    <ReactPortal>
      <div onClick={onClose} className="backScreen"></div>
      <div className="modalBlock">
        <button onClick={onClose} className="closeButton">
          <CloseIcon />
        </button>

        <div className="list">
          <h3>Your Username</h3>
          {errModal ? (
            <p>Username "{falseName}" already exists, try other username</p>
          ) : (
            <p>Enter the username for playing challenges</p>
          )}

          <form className="scoreboard-form" onSubmit={submitHandler}>
            <input onChange={changeInputHandler} value={changeInput} />{" "}
            {changeInput !== "" && <InputOk />}
            <BlueButton
              onClick={onClickButton}
              disabled={disabled}
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </ReactPortal>
  );
};

export default ScoreboardModal;
