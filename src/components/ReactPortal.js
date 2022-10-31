import { createPortal } from "react-dom";

function ReactPortal({ children }) {
  return createPortal(children, document.getElementById("portal"));
}
export default ReactPortal;
