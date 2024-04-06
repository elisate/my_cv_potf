import React, { useState, useEffect } from "react";
import "./WordWriter.scss";
import "./Landing.scss";

const WordWriter = ({ words }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedCharacters, setDisplayedCharacters] = useState("");
  const [showPen, setShowPen] = useState(true);

  useEffect(() => {
    let wordInterval;
    let wordIndex = 0;
    let charIndex = 0;

    const type = () => {
      const word = words[wordIndex];
      if (charIndex <= word.length) {
        setDisplayedCharacters(word.substring(0, charIndex));
        charIndex += 1;
      } else {
        setShowPen(true);
        setTimeout(() => {
          setShowPen(false);
          charIndex = 0;
          wordIndex = (wordIndex + 1) % words.length;
          setDisplayedCharacters(""); // Clear displayedCharacters before displaying the next word
        }, 2000); // Wait 5 seconds before moving to the next word
      }
    };

    wordInterval = setInterval(type, 260); // Adjust timing for character display speed

    return () => clearInterval(wordInterval);
  }, [words]);

  return (
    <div className="word-writer">
      {displayedCharacters}
      <span className={`pen ${showPen ? "show" : ""}`} />
    </div>
  );
};

export default WordWriter;
