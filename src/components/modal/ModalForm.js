import LampIcon from "../../icon/LampIcon";
import BlueButton from "../BlueButton";
import "../../styles/modal.scss";
import { useState } from "react";

const ModalForm = ({ onHint, answer, onCorrect, onIncorrect }) => {
  const [inputValue, setInputValue] = useState("");
  const [disabled, setDisabled] = useState(true);

  const changeInputValue = (e) => {
    setInputValue(e.target.value);
    if (e.target.value.length > 0) {
      return setDisabled(false);
    }
    return setDisabled(true);
  };

  const onClickButton = () => {
    if (inputValue === answer) {
      return onCorrect();
    }
    onIncorrect();
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="modal-form">
      <div className="modal-form__hint">
        <div onClick={onHint} className="modal-form__hint__left">
          <LampIcon />
          <p>Unlock Hint for 10 points</p>
        </div>
        <p>0/5 attempts</p>
      </div>
      <form onSubmit={submitHandler}>
        <input onChange={changeInputValue} placeholder="Flag" />{" "}
        <div disabled>
          <BlueButton
            onClick={onClickButton}
            disabled={disabled}
            type="submit"
            value="Submit"
          />
        </div>
      </form>
    </div>
  );
};

export default ModalForm;
