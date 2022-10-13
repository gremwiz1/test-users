import React, { FC } from "react";
import "./modal.css";
import ModalOverlay from "../modal-overlay/modal-overlay";
import { IUser } from "../../utils/types";

interface IModal {
  user: IUser;
  closeModal: () => void;
}
const Modal: FC<IModal> = ({ user, closeModal }) => {
  React.useEffect(() => {
    document.addEventListener("keydown", closeESC);
    return () => document.removeEventListener("keydown", closeESC);
  });
  const EscCode = 27;
  function closeESC(evt: KeyboardEvent) {
    if (evt.keyCode === EscCode) {
      closeModal();
    }
  }
  function handleClick() {
    closeModal();
  }
  return (
    <ModalOverlay closeModal={closeModal}>
      <section className="modal">
        <div className="modal__container">
          <svg
            onClick={handleClick}
            className="modal__close-button"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.5167 1.48335C10.3617 1.32714 10.1774 1.20315 9.97431 1.11854C9.77122 1.03392 9.55337 0.990356 9.33335 0.990356C9.11333 0.990356 8.89549 1.03392 8.69239 1.11854C8.48929 1.20315 8.30496 1.32714 8.15002 1.48335L6.00002 3.65002L3.85002 1.48335C3.53618 1.16951 3.11052 0.993202 2.66669 0.993202C2.22285 0.993202 1.79719 1.16951 1.48335 1.48335C1.16951 1.79719 0.993202 2.22285 0.993202 2.66669C0.993202 3.11052 1.16951 3.53618 1.48335 3.85002L3.65002 6.00002L1.48335 8.15002C1.32714 8.30496 1.20315 8.48929 1.11854 8.69239C1.03392 8.89549 0.990356 9.11333 0.990356 9.33335C0.990356 9.55337 1.03392 9.77122 1.11854 9.97432C1.20315 10.1774 1.32714 10.3617 1.48335 10.5167C1.63829 10.6729 1.82263 10.7969 2.02573 10.8815C2.22882 10.9661 2.44667 11.0097 2.66669 11.0097C2.88671 11.0097 3.10455 10.9661 3.30765 10.8815C3.51075 10.7969 3.69508 10.6729 3.85002 10.5167L6.00002 8.35002L8.15002 10.5167C8.30496 10.6729 8.48929 10.7969 8.69239 10.8815C8.89549 10.9661 9.11333 11.0097 9.33335 11.0097C9.55337 11.0097 9.77122 10.9661 9.97431 10.8815C10.1774 10.7969 10.3617 10.6729 10.5167 10.5167C10.6729 10.3617 10.7969 10.1774 10.8815 9.97432C10.9661 9.77122 11.0097 9.55337 11.0097 9.33335C11.0097 9.11333 10.9661 8.89549 10.8815 8.69239C10.7969 8.48929 10.6729 8.30496 10.5167 8.15002L8.35002 6.00002L10.5167 3.85002C10.6729 3.69508 10.7969 3.51075 10.8815 3.30765C10.9661 3.10455 11.0097 2.88671 11.0097 2.66669C11.0097 2.44667 10.9661 2.22882 10.8815 2.02573C10.7969 1.82263 10.6729 1.63829 10.5167 1.48335Z"
              fill="#40BFFF"
            />
          </svg>
          <h2>{user.name}</h2>
          <div className="modal__content">
            <div className="modal__left-column">
              <p className="modal__text">Телефон:</p>
              <p className="modal__text">Почта:</p>
              <p className="modal__text">Дата приема:</p>
              <p className="modal__text">Должность:</p>
              <p className="modal__text">Подразделение:</p>
            </div>
            <div className="modal__right-column">
              <p className="modal__text text">{user.phone}</p>
              <p className="modal__text text">{user.email}</p>
              <p className="modal__text text">{user.hire_date}</p>
              <p className="modal__text text">{user.position_name}</p>
              <p className="modal__text text">{user.department}</p>
            </div>
          </div>
          <p className="modal__text">Дополнительная информация:</p>
          <p className="modal__text text__address">{user.address}</p>
        </div>
      </section>
    </ModalOverlay>
  );
};

export default Modal;
