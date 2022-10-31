import LabsCard from "./LabsCard";
import "../styles/global.scss";
import MoreButton from "./MoreButton";
import { useState } from "react";

const LABCARDS_MASS = [
  {
    id: 1,
    name: "Web",
    text: "Explore the challenges related to Web App Security!",
  },
  {
    id: 2,
    name: "OSINT",
    text: "Explore the challenges related to Web App Security!",
  },
  {
    id: 3,
    name: "Forensics",
    text: "Explore the challenges related to Web App Security!",
  },
  {
    id: 4,
    name: "Red Teaming",
    text: "Explore the challenges related to Web App Security!",
  },
  {
    id: 5,
    name: "Main",
    text: "Explore the challenges related to Web App Security!",
  },
  {
    id: 6,
    name: "Blue Teaming",
    text: "Explore the challenges related to Web App Security!",
  },
  {
    id: 7,
    name: "Web",
    text: "Explore the challenges related to Web App Security!",
  },
  {
    id: 8,
    name: "Crypto",
    text: "Explore the challenges related to Web App Security!",
  },
  {
    id: 9,
    name: "Blue Teaming",
    text: "Explore the challenges related to Web App Security!",
  },
  {
    id: 10,
    name: "Main",
    text: "Explore the challenges related to Web App Security!",
  },
  {
    id: 11,
    name: "Web",
    text: "Explore the challenges related to Web App Security!",
  },
  {
    id: 12,
    name: "Crypto",
    text: "Explore the challenges related to Web App Security!",
  },
];

const LabsCardsBlock = () => {
  const [next, setNext] = useState(9);

  const moreHandler = () => {
    setNext(next + 3);
  };

  return (
    <>
      <div className="LabsCards-block container">
        {LABCARDS_MASS.slice(0, next)?.map((item) => {
          return <LabsCard key={item.id} data={item} />;
        })}
      </div>
      <MoreButton onClick={moreHandler} />
    </>
  );
};

export default LabsCardsBlock;
