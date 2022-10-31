import "../../styles/modal.scss";
import CloseIcon from "../../icon/CloseIcon";
import ReactPortal from "../ReactPortal";
import { useContext, useState } from "react";
import { LabContext } from "../context/LabContext";
import ModalForm from "./ModalForm";
import ModalTabs from "./ModalTabs";
import CopyIcon from "../../icon/CopyIcon";
import BlueButton from "../BlueButton";
import ModalSolve from "./ModalSolve";
import ModalFile from "./ModalFile";
import CorrectIcon from "../../icon/CorrectIcon";
import IncorrectIcon from "../../icon/IncorrectIcon";

const Modal = () => {
  const { labCurrentCard, setLabCurrentCard, setIndexOfCorrect } =
    useContext(LabContext);
  const [tabsState, setTabsState] = useState("left");
  const [firstModal, setFirstModal] = useState(true);
  const [openHintModal, setOpenHintModal] = useState(false);
  const [openErrorModal, setOpenErrorModal] = useState(false);
  const [virtualValid, setVirtualValid] = useState(true);
  const [validOk, setValidOK] = useState(false);
  const [hintList, setHintList] = useState([]);
  const [correctModal, setCorrectModal] = useState(false);
  const [incorrectModal, setIncorrectModal] = useState(false);
  const data = labCurrentCard;
  const onHint = () => {
    setOpenHintModal(!openHintModal);
    setFirstModal(!firstModal);
  };

  const validPoints = () => {
    setOpenHintModal(false);
    setVirtualValid(!virtualValid);
    if (virtualValid) {
      Tips();
      return setValidOK(true);
    }
    setOpenErrorModal(true);
  };

  const onClose = () => {
    setFirstModal(true);
    setOpenHintModal(false);
    setOpenErrorModal(false);
    setLabCurrentCard(null);
    setValidOK(false);
    setCorrectModal(false);
    setIncorrectModal(false);
  };

  const tabsStateHandler = (value) => {
    setTabsState(value);
  };

  if (data === null) {
    return null;
  }
  const Tips = () => {
    setHintList([]);
    let result = data.tips.find((item) => {
      return item.content === "";
    });
    {
      result && (data.tips[result.id].content = "some txt");
    }
    let newObject = [];
    data.tips.map((item) => {
      if (item.content === "") {
        return;
      }
      return newObject.push(item);
    });
    setHintList(newObject);
  };

  const copyText = (text) => {
    navigator.clipboard.writeText(text);
    document.execCommand("copy", true, text);
  };

  const Correct = () => {
    setFirstModal(false);
    setCorrectModal(true);
    setIndexOfCorrect(data.id);
  };
  const Incorrect = () => {
    setFirstModal(false);
    setIncorrectModal(true);
  };

  const closeIncorrect = () => {
    setFirstModal(true);
    setIncorrectModal(false);
  };

  const newHit = () => {
    setValidOK(false);
    setFirstModal(true);
  };

  return (
    <ReactPortal>
      <div onClick={onClose} className="backScreen"></div>
      <div className="modalBlock">
        <button onClick={onClose} className="closeButton">
          <CloseIcon />
        </button>
        {firstModal && (
          <div className="modal">
            <ModalTabs tabsState={tabsStateHandler} />
            {tabsState === "right" && <ModalSolve />}
            {tabsState === "left" && (
              <>
                <div className="list">
                  <div className="challenge-cart__value">{data.value}</div>
                  <h4>{data.title}</h4>
                  <p>{data.description}</p>
                </div>
                {data.file && <ModalFile file={data.file} />}
                <ModalForm
                  onHint={onHint}
                  answer={data.title}
                  onCorrect={Correct}
                  onIncorrect={Incorrect}
                />
              </>
            )}
          </div>
        )}
        {openHintModal && (
          <div className="hitModal">
            <h2>Unlock Hint?</h2>
            <p>Are you sure you ant to open this hint?</p>
            <div className="buttonBlock">
              <BlueButton onClick={onHint} white value="No" />{" "}
              <BlueButton onClick={validPoints} value="Yes" />{" "}
            </div>
          </div>
        )}
        {openErrorModal && (
          <div className="hitModal">
            <h2>Error</h2>
            <p>You do not have enough points to unlock this hint</p>

            <BlueButton onClick={onClose} value="Got it" />
          </div>
        )}
        {validOk && (
          <div className="hitModal">
            <h2>Hint</h2>
            <p>Your hint below you can copy it</p>
            {hintList.map((item) => {
              return (
                <div className="input">
                  <input value={item.content} />{" "}
                  <CopyIcon
                    onClick={() => {
                      copyText(item.content);
                    }}
                  />
                </div>
              );
            })}

            <BlueButton onClick={newHit} value="Thank you!" />
          </div>
        )}
        {correctModal && (
          <>
            <ModalTabs tabsState={tabsStateHandler} />
            <div className="correctModal">
              <CorrectIcon />
              <h2>Correct!</h2>
              <p>You have successfully completed the challenge!</p>
              <BlueButton onClick={onClose} value="Thank You!" />
            </div>
          </>
        )}
        {incorrectModal && (
          <>
            <ModalTabs tabsState={tabsStateHandler} />
            <div className="correctModal">
              <IncorrectIcon />
              <h2>Incorrect!</h2>
              <p>Lorem Ipsum learn how to level up your recon</p>
              <div>
                <BlueButton white onClick={closeIncorrect} value="Back" />
                <BlueButton onClick={closeIncorrect} value="Try again" />
              </div>
            </div>
          </>
        )}
      </div>
    </ReactPortal>
  );
};

export default Modal;
