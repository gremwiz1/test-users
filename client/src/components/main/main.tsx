import React from "react";
import { FC } from "react";
import * as appApi from "../../utils/api";
import { IUser } from "../../utils/types";
import Modal from "../modal/modal";
import SearchInput from "../search-input/search-input";
import Users from "../users/users";
import "./main.css";

const Main: FC = () => {
  const [dataUsers, SetDataUsers] = React.useState<IUser[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [textInput, setTextInput] = React.useState("");
  const [userDataForModal, setUserDataForModal] = React.useState<IUser>(
    {} as IUser
  );
  const [isOpenModal, setIsOpenModal] = React.useState(false);

  function closeModal() {
    setIsOpenModal(false);
  }

  function openModal(user: IUser) {
    setUserDataForModal(user);
    setIsOpenModal(true);
  }
  React.useEffect(() => {
    appApi
      .getContent()
      .then((data: IUser[]) => {
        SetDataUsers(data);
        setIsLoading(true);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  React.useEffect(() => {
    if (textInput === "") {
      appApi.getContent().then((data: IUser[]) => {
        SetDataUsers(data);
      });
    } else {
      appApi.searchContent(textInput).then((data: IUser[]) => {
        SetDataUsers(data);
      });
    }
  }, [textInput]);
  return (
    <section className="main">
      {isLoading ? (
        <>
          <SearchInput textInput={textInput} setTextInput={setTextInput} />
          <Users users={dataUsers} openModal={openModal} />
        </>
      ) : (
        <p>Грузится...</p>
      )}
      {isOpenModal ? (
        <Modal user={userDataForModal} closeModal={closeModal} />
      ) : (
        ""
      )}
    </section>
  );
};
export default Main;
