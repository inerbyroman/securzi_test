import "../../styles/modal.scss";

const SolveMass = [
  { id: 1, name: "Test Name", date: "03/11/2022" },
  { id: 2, name: "Andre", date: "03/11/2022" },
  { id: 3, name: "Test Ne", date: "03/11/2022" },
  { id: 4, name: "Tt Name", date: "03/11/2022" },
  { id: 5, name: "Tes Name", date: "03/11/2022" },
  { id: 6, name: "Test Nae", date: "03/11/2022" },
  { id: 7, name: "Test Name", date: "03/11/2022" },
  { id: 8, name: "Tt Name", date: "03/11/2022" },
  { id: 9, name: "Tee", date: "03/11/2022" },
  { id: 10, name: "Test me", date: "03/11/2022" },
  { id: 11, name: "Tst Name", date: "03/11/2022" },
  { id: 12, name: "Test me", date: "03/11/2022" },
  { id: 13, name: "Test ame", date: "03/11/2022" },
  { id: 14, name: "st Name", date: "03/11/2022" },
  { id: 15, name: "Test me", date: "03/11/2022" },
  { id: 16, name: "st Name", date: "03/11/2022" },
  { id: 17, name: "Test e", date: "03/11/2022" },
  { id: 18, name: "Test e", date: "03/11/2022" },
  { id: 19, name: "Te Name", date: "03/11/2022" },
  { id: 20, name: "Test me", date: "03/11/2022" },
  { id: 21, name: "Team", date: "03/11/2022" },
  { id: 22, name: "Tes Name", date: "03/11/2022" },
];

const ModalSolve = () => {
  return (
    <ul className="modalSolve">
      <li className="firstLi">
        <p>Name</p>
        <span>Date</span>
      </li>
      {SolveMass.map((item) => {
        return (
          <li key={item.id}>
            <p>{item.name}</p>
            <span>{item.date}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default ModalSolve;
