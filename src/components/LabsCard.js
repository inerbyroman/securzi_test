import { Link } from "react-router-dom";
import "../styles/LabsCard.scss";

const LabsCard = ({ data }) => {
  return (
    <Link to={`/labs/${data.id}`} className="LabsCard">
      <h4>{data.name}</h4>
      <p>{data.text}</p>
      <span>
        Get started{" "}
        <svg
          width="26"
          height="10"
          viewBox="0 0 26 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.5 5H1M24.5 5L20.5 9M24.5 5L20.5 1"
            stroke="#0A88DD"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </Link>
  );
};

export default LabsCard;
