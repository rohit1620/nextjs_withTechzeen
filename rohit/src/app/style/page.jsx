"use client";
import { useState } from "react";

const StyleComponent = () => {
  const [style, setStyle] = useState({ backgroundColor: "red" });
  return (
    <div>
      <h2 style={{ backgroundColor: "black", color: "white" }}>
        rohit kumar malav
      </h2>
      <h4 style={style}>Jitendre kumar malav</h4>
      <button onClick={() => setStyle({ backgroundColor: "yellow" })}>
        change color
      </button>
    </div>
  );
};

export default StyleComponent;
