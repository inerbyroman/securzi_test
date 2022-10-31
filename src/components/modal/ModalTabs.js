import { useState } from "react";
import "../../styles/modal.scss";

const ModalTabs = ({ tabsState }) => {
  const [tabState, setTabState] = useState("left");
  tabsState(tabState);
  const clickHandler = (e) => {
    setTabState(e.target.value);
  };
  return (
    <div className="modalTabs">
      <button
        className={`${tabState === "left" ? "modalTab__active" : "modalTab"}`}
        value="left"
        onClick={clickHandler}
      >
        Challenge
      </button>
      <button
        className={`${tabState === "right" ? "modalTab__active" : "modalTab"}`}
        value="right"
        onClick={clickHandler}
      >
        Solve (21)
      </button>
    </div>
  );
};

export default ModalTabs;
