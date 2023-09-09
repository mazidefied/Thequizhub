import React, { useEffect, useRef, useState } from "react";
import Options from "./Options";

const QuizQuestion = ({ question, id, answerQuestion }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  function handleAnswer(option) {
    setSelectedOption(option);
    answerQuestion(id, option);
  }
  const questionName = useRef(null);

  useEffect(() => {
    questionName.current.innerHTML = question.name;
  }, [question]);

  const options = question.options ? question.options : [];
  const optionsEl = options.map((option) => {
    return (
      <Options
        selectedOption={selectedOption}
        handleAnswer={handleAnswer}
        key={option}
        option={option}
      />
    );
  });
  return (
    <>
      <div className="question">
        <p ref={questionName}></p>
      </div>
      <div className="options-holder">{optionsEl}</div>
    </>
  );
};

export default QuizQuestion;
