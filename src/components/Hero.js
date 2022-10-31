import ChevronLeftIcon from "../icon/ChevronLeftIcon";
import "../styles/hero.scss";
import Breadcrumbs from "./Breadcrumbs";
import HeroTabs from "./HeroTabs";

const Hero = ({ title, active, scoreboard }) => {
  const backButtonHandler = () => {
    console.log(scoreboard);
    return;
  };
  return (
    <div className="hero__bg">
      <div className="hero container">
        <button
          onClick={backButtonHandler}
          className={`hero__back ${active ? "active" : " "}`}
        >
          <ChevronLeftIcon />
        </button>
        <HeroTabs />
       <Breadcrumbs title={title}  scoreboard={scoreboard}/>
      </div>
    </div>
  );
};

export default Hero;
