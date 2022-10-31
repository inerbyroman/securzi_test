import "./App.scss";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Labs from "./route/Labs";
import TeamChallenge from "./route/TeamChallenge";
import LabContextProvider from "./components/context/LabContext";
import Modal from "./components/modal/Modal";
import ScoreboardPage from "./route/ScoreboardPage";

function App() {
  return (
    <LabContextProvider>
      <Modal />
      <BrowserRouter>
        <Routes>
          <Route path="/labs" element={<Labs />} />
          <Route path="/labs/:id" element={<TeamChallenge />} />
          <Route path="/scoreboard" element={<ScoreboardPage />} />
        </Routes>
      </BrowserRouter>
    </LabContextProvider>
  );
}

export default App;
