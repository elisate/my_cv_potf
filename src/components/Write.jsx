import React from "react";
import WordWriter from "./WordWriter";
import './Landing.scss';

const Write= () => {
  const words = ["Hello", "React", "World", "Component"];

  return (
    <div className="App">
      <WordWriter words={words} />
    </div>
  );
};

export default Write;
