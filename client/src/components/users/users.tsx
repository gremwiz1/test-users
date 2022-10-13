import { FC } from "react";
import { IUser } from "../../utils/types";
import User from "../user/user";
import "./users.css";

interface IUsers {
  users: IUser[];
  openModal: (args0: IUser) => void;
}
const Users: FC<IUsers> = ({ users, openModal }) => {
  return (
    <div className="users">
      {users.length > 0
        ? users.map((user, index) => (
            <User key={index} user={user} openModal={openModal} />
          ))
        : ""}
    </div>
  );
};
export default Users;
