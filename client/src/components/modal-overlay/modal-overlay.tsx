import { FC, ReactNode } from "react";
import "./modal-overlay.css";

interface IModalOverlay {
  closeModal: () => void;
  children: ReactNode;
}
const ModalOverlay: FC<IModalOverlay> = ({ children, closeModal }) => {
  function handleClick() {
    closeModal();
  }
  return (
    <section
      className="modal-overlay"
      onClick={(e) => e.currentTarget === e.target && handleClick()}
    >
      {children}
    </section>
  );
};

export default ModalOverlay;
