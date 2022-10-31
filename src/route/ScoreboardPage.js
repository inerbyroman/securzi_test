import { useState } from "react";
import Hero from "../components/Hero";
import ScoreboardModal from "../components/modal/ScoreboardModal";
import ScoreBoard from "../components/ScoreBoard";

const ScoreboardPage = () => {
  const [modalState, setModalState] = useState(true);

  const onClose = () => {
    setModalState(false);
  };
  return (
    <>
      {modalState && <ScoreboardModal onClose={onClose} />}
      <Hero title="Scoreboard" scoreboard={true} />
      <ScoreBoard />
    </>
  );
};

export default ScoreboardPage;
