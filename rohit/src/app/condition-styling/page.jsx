"use client";
import { useState } from "react";
import style from "../condtional.module.css";

const ConditionalStyle = () => {
  let green = true;
  let pink = true;
  const [color, setColor] = useState(green);
  const [color2, setColor2] = useState(pink);
  return (
    <div>
      <h1 className={color == green ? style.green : style.black}>
        This is conditional style component
      </h1>
      <h2 style={{ backgroundColor: color2 == pink ? "pink" : "yellow" }}>
        It is Pink and yellow color
      </h2>
      <button onClick={() => setColor((green) => !green)}>click me</button>
      <button onClick={() => setColor2((pink) => !pink)}>second button</button>
      {console.log("After", color)}
      <h5 id={style.rohit}>rohit malav</h5>
    </div>
  );
};

export default ConditionalStyle;
