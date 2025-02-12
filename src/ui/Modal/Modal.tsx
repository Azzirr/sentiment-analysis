import { ReactNode } from "react";
import "./Modal.css";
import { XCircleIcon } from "@heroicons/react/24/solid";

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  closeModal: () => void;
}

export const Modal: React.FC<ModalProps> = ({
  children,
  isOpen,
  closeModal,
}) => {
  return (
    <>
      {isOpen && (
        <div className="modal">
          <div onClick={closeModal} className="overlay"></div>
          <div className="modal-content">
            {children}
            <XCircleIcon onClick={closeModal} className="close-modal" />
          </div>
        </div>
      )}
    </>
  );
};
