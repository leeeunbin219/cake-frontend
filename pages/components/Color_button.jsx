import React, { useState } from "react";
import { ChromePicker } from "react-color";
import Image from "next/image";
import cakeimg from "public/images/Caketable.png";
import { createGlobalStyle } from "styled-components";
import css from "styled-jsx/css";

export default function Color_button() {
  const [color, setColor] = useState("#FFFFFF"); // Set initial color to white

  const handleChange = (newColor) => {
    setColor(newColor.hex);
    document.getElementById("image-container").style.backgroundColor =
      newColor.hex; // Change background color of the image container
  };

  return (
    <div>
      <Global />
      <ChromePicker color={color} onChange={handleChange} width={450} />
      <div
        id="image-container"
        style={{ backgroundColor: color }}
        className="color_button_container"
      >
        <Image src={cakeimg} width={450} />
      </div>
      <style jsx>{colorbutton}</style>
    </div>
  );
}

const Global = createGlobalStyle`
.flexbox-fix:last-child {
  visibility: hidden;
}
.flexbox-fix:nth-child(1) {
  visibility: hidden;
}
.chrome-picker > div > div:nth-child(1){
  height:100px;
  /* margin-top: 50px; */
}
.chrome-picker:nth-child(1){
  height:100px;
  
}
.hue-horizontal {
  visibility: visible;
  position: fixed;
  top: -175px;
  left: -15px;
}
`;

const colorbutton = css`
  /* .color_button_container {
    margin-top: 60px;
  } */
`;
