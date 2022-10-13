import React, { ChangeEvent } from "react";
import { FC } from "react";
import "./search-input.css";
import iconSearch from "../../assets/images/search.png";

interface ISearchInput {
  setTextInput: (arg0: string) => void;
  textInput: string;
}
const SearchInput: FC<ISearchInput> = ({ setTextInput, textInput }) => {
  function handleChangeInput(e: ChangeEvent) {
    const element = e.target as HTMLInputElement;
    setTextInput(element.value);
  }

  return (
    <div className="search">
      <input
        className="search__input"
        onChange={handleChangeInput}
        value={textInput}
        type="text"
      />
      <img src={iconSearch} alt="Иконка поиска" className="search__icon" />
    </div>
  );
};

export default SearchInput;
