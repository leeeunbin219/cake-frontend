import { useState } from "react";
import css from "styled-jsx/css";
import Cakechoice from "./Cake_choice";

export default function Letter() {
  const [value, setValue] = useState("");

  function handleChange(event) {
    const inputValue = event.target.value;
    if (inputValue.length <= 50) {
      setValue(inputValue);
    }
  }

  return (
    <div>
      <textarea
        value={value}
        onChange={handleChange}
        className="letter_textarea"
      />
      <style jsx>{letter}</style>
    </div>
  );
}
const letter = css`
  .letter_textarea {
    width: 350px;
    height: 150px;
    font-size: 25px;
    line-height: 40px;
    border: 0;
    border-radius: 15px;
    outline: none;
    padding: 30px;
  }
`;
