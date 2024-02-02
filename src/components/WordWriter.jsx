import React, { useState, useEffect } from "react";
import './WordWriter.scss';
import './Landing.scss';

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
        charIndex = 0;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(() => {
          setShowPen(true);
        }, 500); // Adjust timing for pen display between words
      }
    };

    wordInterval = setInterval(type, 250); // Adjust timing for character display speed

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
