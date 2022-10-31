import React, { useState } from "react";

export const LabContext = React.createContext(null);

const LabContextProvider = (props) => {
  const [labCurrentCard, setLabCurrentCard] = useState(null);
  const [indexOfCorrect, setIndexOfCorrect] = useState("");

  return (
    <LabContext.Provider
      value={{
        labCurrentCard,
        setLabCurrentCard,
        indexOfCorrect,
        setIndexOfCorrect,
      }}
    >
      {props.children}
    </LabContext.Provider>
  );
};

export default LabContextProvider;
