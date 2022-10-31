import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const HeroTabs = () => {
  const [tabsState, setTabsState] = useState("");
  let location = useLocation();

  useEffect(() => {
    if (location.pathname === "/scoreboard") {
      return setTabsState("Scoreboard");
    } else {
      return setTabsState("Labs");
    }
  }, [location]);

  return (
    <div className="hero__tabs">
      <button className={tabsState === "Labs" ? "active" : ""}>
        <Link to="/labs">Labs</Link>
      </button>
      <button className={tabsState === "Scoreboard" ? "active" : ""}>
        <Link to="/scoreboard">Scoreboard</Link>
      </button>
    </div>
  );
};

export default HeroTabs;
