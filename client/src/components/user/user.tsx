import { FC } from "react";
import { IUser } from "../../utils/types";
import iconPhone from "../../assets/images/telephone.png";
import iconEmail from "../../assets/images/email.png";
import "./user.css";

interface IUserComponent {
  user: IUser;
  openModal: (args0: IUser) => void;
}
const User: FC<IUserComponent> = ({ user, openModal }) => {
  function handleClick() {
    openModal(user);
  }
  return (
    <div className="user" onClick={handleClick}>
      <h2 className="user__subtitle">{user.name}</h2>
      <div className="user__telephone">
        <img src={iconPhone} alt="Иконка телефона" className="user__icon" />
        <p className="user__text">{user.phone}</p>
      </div>
      <div className="user__email">
        <img src={iconEmail} alt="Иконка почты" className="user__icon" />
        <p className="user__text user__text_email">{user.email}</p>
      </div>
    </div>
  );
};
export default User;
