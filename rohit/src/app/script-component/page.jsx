"use client";
import Script from "next/script";
const ScriptComponent = () => {
  return (
    <div>
      <h1>This is ScriptComponent</h1>
      <Script src="/features.js" onLoad={() => console.log("onload")} />
    </div>
  );
};

export default ScriptComponent;
