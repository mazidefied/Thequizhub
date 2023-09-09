import React, { useEffect, useRef, useState } from "react";

const Options = ({ option, handleAnswer, selectedOption }) => {
  const [optionState, setOptionState] = useState(false);

  const thisOption = useRef(null);

  useEffect(() => {
    thisOption.current.innerHTML = option;
  }, [option]);

  useEffect(() => {
    if (selectedOption !== option) {
      setOptionState(false);
    } else {
      setOptionState(true);
    }
  }, [selectedOption, optionState, option]);
  return (
    <div
      key={option}
      className={`${optionState ? "option selected" : "option"}`}
      onClick={() => {
        handleAnswer(option);
      }}
    >
      <div className="select"></div>
      <p ref={thisOption}></p>
    </div>
  );
};

export default Options;
