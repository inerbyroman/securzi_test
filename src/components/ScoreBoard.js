import { useState } from "react";
import "../styles/scoreboard.scss";
import MoreButton from "./MoreButton";

const SCOREBOARD_USERS = [
  {
    id: 0,
    user: {
      photo: <img src="/image/workforce-foto1.png" alt="" />,
      name: "Dmitrii Murray",
    },

    company: "LTS Game",
    date: "03 / 11 / 2022",
    score: 2106,
  },
  {
    id: 1,
    user: {
      photo: <img src="/image/workforce-foto1.png" alt="" />,
      name: "Roman Murray",
    },
    company: "Securzy",
    date: "03 / 08 / 2022",
    score: 1430,
  },
  {
    id: 2,
    user: {
      photo: <img src="/image/workforce-foto1.png" alt="" />,
      name: "Victor Murray",
    },
    company: "Glory Star",
    date: "03 / 11 / 2022",
    score: 1220,
  },
  {
    id: 3,
    user: {
      photo: <img src="/image/workforce-foto1.png" alt="" />,
      name: "Vitalii Murray",
    },
    company: "LTS Game",
    date: "03 / 11 / 2022",
    score: 1167,
  },
  {
    id: 4,
    user: {
      photo: <img src="/image/workforce-foto1.png" alt="" />,
      name: "Poly Murray",
    },
    company: "Securzy",
    date: "03 / 11 / 2022",
    score: 1113,
  },
  {
    id: 5,
    user: {
      photo: <img src="/image/workforce-foto1.png" alt="" />,
      name: "Oleksii Murray",
    },
    company: "LTS Game",
    date: "03 / 11 / 2022",
    score: 987,
  },
  {
    id: 6,
    user: {
      photo: <img src="/image/workforce-foto1.png" alt="" />,
      name: "Bill Murray",
    },
    company: "Glory Star",
    date: "03 / 11 / 2022",
    score: 768,
  },
  {
    id: 7,
    user: {
      photo: <img src="/image/workforce-foto1.png" alt="" />,
      name: "Nikola Murray",
    },
    company: "LTS Game",
    date: "03 / 11 / 2022",
    score: 651,
  },
  {
    id: 8,
    user: {
      photo: <img src="/image/workforce-foto1.png" alt="" />,
      name: "Bill Murray",
    },
    company: "Securzy",
    date: "03 / 11 / 2022",
    score: 224,
  },
  {
    id: 9,
    user: {
      photo: <img src="/image/workforce-foto1.png" alt="" />,
      name: "Roman Murray",
    },
    company: "LTS Game",
    date: "03 / 11 / 2022",
    score: 112,
  },
];

const ScoreBoard = () => {
  const [newMass, setNewMass] = useState(SCOREBOARD_USERS);
  const moreHandler = () => {
    let newElMass = [];
    for (let i = newMass.length + 1; i < newMass.length + 5; i += 1) {
      newElMass.push({
        id: i,
        user: {
          photo: <img src="/image/workforce-foto1.png" alt="" />,
          name: "Roman Murray",
        },
        company: "LTS Game",
        date: "03 / 11 / 2022",
        score: 112,
      });
    }
    setNewMass([...newMass, ...newElMass]);
  };
  return (
    <div className="scoreboard-table">
      <ul>
        <li>
          <span>PLACE</span> <p>TEAM</p>
          <p>COMPANY</p>
          <p>DATA</p>
          <span>SCORE</span>
        </li>
        {newMass.map((row) => (
          <li key={row.id}>
            <span>{row.id + 1}</span>

            <div className="user">
              {row.user.photo}
              {row.user.name}
            </div>

            <p>{row.company}</p>
            <p>{row.date}</p>
            <span>{row.score}</span>
          </li>
        ))}
      </ul>
      <MoreButton onClick={moreHandler} />
    </div>
  );
};

export default ScoreBoard;
