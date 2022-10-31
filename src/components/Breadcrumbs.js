import "../styles/hero.scss";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = ({ title, scoreboard }) => {
  const location = useLocation();
  let BREADCRUMBS = [];
  if (scoreboard) {
    BREADCRUMBS = [
      { name: "Home", path: "/" },

      { name: "Scoreboard", path: "/scoreboard" },
    ];
  }
  if (!scoreboard) {
    BREADCRUMBS = [
      { name: "Home", path: "/" },

      { name: "Labs", path: "/labs" },
      {
        name: "Blue Teaming Challenge",
        path: location.pathname,
      },
    ];
  }

  const index = BREADCRUMBS.findIndex((item) => {
    return item.path === location.pathname;
  });
  const newBreadcrumbs = BREADCRUMBS.slice(0, index);
  return (
    <div className="hero_breadcrumbs">
      <div className="breadcrumb-link">
        {newBreadcrumbs.map((item) => {
          return (
            <div key={item.path}>
              <Link to={item.path}> {item.name}</Link> &rsaquo;
            </div>
          );
        })}{" "}
        <span> {BREADCRUMBS[index].name}</span>
      </div>

      <h2>{title}</h2>
      <h3>Level Up Your Cyber Security Skills</h3>
    </div>
  );
};

export default Breadcrumbs;
