import ChallengeCart from "./ChallengeCart";
import "../styles/global.scss";
import MoreButton from "./MoreButton";
import { useContext, useEffect, useState } from "react";
import { LabContext } from "./context/LabContext";

let CHALLENGE_MASS = [
  {
    id: 0,
    title: "Loft Flash drive",
    value: "1200",
    description: "Test Challenge description",
    status: false,
    file: [] || "",
    tips: [{ id: 0, content: "some content" }],
  },
  {
    id: 1,
    title: "Test LFI",
    value: "100",
    description: "Test Challenge description",
    status: false,
    tips: [
      { id: 0, content: "some content" },
      { id: 1, content: "" },
      { id: 2, content: "some content 3" },
      { id: 3, content: "" },
    ],
  },
  {
    id: 2,
    title: "RFI",
    value: "250",
    description: "Test Challenge description",
    status: false,
    file: [] || "",
    tips: [{ id: 0, content: "some content" }],
  },
  {
    id: 3,
    title: "A friend",
    value: "112",
    description: "Test Challenge description",
    status: false,
    file: [] || "",
    tips: [{ id: 0, content: "some content" }],
  },
  {
    id: 4,
    title: "Loft Flash drive",
    value: "1200",
    description: "Test Challenge description",
    status: false,
    file: [] || "",
    tips: [{ id: 0, content: "some content" }],
  },
  {
    id: 5,
    title: "Test LFI",
    value: "100",
    status: false,
    description: "Test Challenge description",
    file: [] || "",
    tips: [{ id: 0, content: "some content" }],
  },
  {
    id: 6,
    title: "RFI",
    value: "250",
    status: false,
    description: "Test Challenge description",
    file: [] || "",
    tips: [{ id: 0, content: "some content" }],
  },
  {
    id: 7,
    title: "A friend",
    value: "112",
    status: false,
    description: "Test Challenge description",
    file: [] || "",
    tips: [{ id: 0, content: "some content" }],
  },
  {
    id: 8,
    title: "Loft Flash drive",
    value: "1200",
    status: false,
    description: "Test Challenge description",
    file: [] || "",
    tips: [{ id: 0, content: "some content" }],
  },
  {
    id: 9,
    title: "Test LFI",
    status: false,
    value: "100",
    description: "Test Challenge description",
    file: [] || "",
    tips: [{ id: 0, content: "some content" }],
  },
  {
    id: 10,
    title: "RFI",
    value: "250",
    status: false,
    description: "Test Challenge description",
    file: [] || "",
    tips: [{ id: 0, content: "some content" }],
  },
  {
    id: 11,
    title: "A friend",
    status: false,
    value: "112",
    description: "Test Challenge description",
    file: [] || "",
    tips: [{ id: 0, content: "some content" }],
  },
];
const ChallengeCartBlock = () => {
  const { indexOfCorrect } = useContext(LabContext);
  const [newMass, setNewMass] = useState(CHALLENGE_MASS);
  useEffect(() => {
    if (indexOfCorrect) {
      CHALLENGE_MASS[indexOfCorrect].status = true;
      return;
    }
  }, [indexOfCorrect]);
  const moreHandler = () => {
    let newElMass = [];
    for (let i = newMass.length + 1; i < newMass.length + 5; i += 1) {
      newElMass.push({
        id: i,
        title: "Loft Flash drive",
        value: "1200",
        status: false,
        description: "Test Challenge description",
        file: [] || "",
        tips: [{ id: 0, content: "some content" }],
      });
    }
    setNewMass([...newMass, ...newElMass]);
  };

  return (
    <>
      <div className="challenge-block container">
        {newMass.map((item) => (
          <ChallengeCart key={item.id} data={item} />
        ))}
      </div>
      <MoreButton onClick={moreHandler} />
    </>
  );
};

export default ChallengeCartBlock;
