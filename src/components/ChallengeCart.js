import { useContext } from "react";
import "../styles/challenge-cart.scss";
import { LabContext } from "./context/LabContext";

const ChallengeCart = ({ data }) => {
  const { setLabCurrentCard } = useContext(LabContext);
  const clickHandler = () => {
    if (data.status === false) {
      setLabCurrentCard(data);
    }
  };
  return (
    <>
      <div
        onClick={clickHandler}
        className={
          data.status === false
            ? "challenge-cart container"
            : "challenge-cart disabled container"
        }
      >
        <div className="challenge-cart__value">{data.value}</div>
        <h4>{data.title}</h4>
        <p>{data.description}</p>
        {data.status === false ? (
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
        ) : (
          <span>
            <svg
              width="14"
              height="11"
              viewBox="0 0 14 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.0001 2L5.00004 9.00002L2 6"
                stroke="#41BB6A"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>{" "}
            Done
          </span>
        )}
      </div>
    </>
  );
};

export default ChallengeCart;
