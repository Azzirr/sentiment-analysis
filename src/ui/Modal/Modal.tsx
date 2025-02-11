import { ReactNode, useState } from "react";
import "./Modal.css";
import { Button } from "../Button/Button";
import { XCircleIcon } from "@heroicons/react/24/solid";
interface ModalProps {
  children: ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ children }) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <Button onClick={toggleModal}>Analizuj</Button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            {children}
            <XCircleIcon onClick={toggleModal} className="close-modal" />
          </div>
        </div>
      )}
    </>
  );
};
