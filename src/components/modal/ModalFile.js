import DownloadIcon from "../../icon/DownloadIcon";
import "../../styles/modal.scss";

const ModalFile = ({ file }) => {
  return (
    <div className="modalFile">
      <a href={file} target="_blank">
        <DownloadIcon />
        Download file
      </a>
    </div>
  );
};

export default ModalFile;
