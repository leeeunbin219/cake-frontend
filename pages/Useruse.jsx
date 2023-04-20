import css from "styled-jsx/css";
import React from "react";
import Color_button from "./components/Color_button";
import Image from "next/image";
import Sidebar from "pages/components/Sidebar.jsx";

export default function Useruse() {
  return (
    <div className="useruse_container">
      <Sidebar />
      <div className="useruse_nickname_container">
        <label for="nickname" className="useruse_name font">
          닉네임 :{" "}
        </label>
        <input
          type="text"
          maxLength="7"
          className="useruse_nickname font"
          id="nickname"
        />
      </div>
      <div className="useruse_color_button">
        <Color_button />
      </div>
      <style jsx>{useruse}</style>
    </div>
  );
}

const useruse = css`
  @font-face {
    font-family: "Bazzi";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/Bazzi.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  .useruse_container {
    width: 500px;
    height: 100vh;
    background-color: #f7bedf;
    color: white;
    text-align: center;
    //중앙정렬
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .useruse_nickname_container {
    margin-top: 7vh;
  }
  .useruse_name {
    font-size: 35px;
  }
  .useruse_nickname {
    border: none;
    height: 40px;
    width: 250px;
    border-radius: 15px;
    text-align: center;
    font-size: 25px;
  }
  .useruse_nickname:focus {
    border: 2px solid #ff08b9;
    outline: none;
  }
  .font {
    font-family: "Bazzi";
  }
  .useruse_color_button {
    height: 400px;
    width: 450px;
    margin: 0 auto;
    margin-top: 30px;
  }
`;
