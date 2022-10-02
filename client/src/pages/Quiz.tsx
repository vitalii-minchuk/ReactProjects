import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Question from "../components/Question";
import { useAppDispatch, useAppSelector } from "../store";
import { addNewTest } from "../store/Slices/testSlice";
import { createWordsGroupForQuiz, resetQuiz } from "../store/Slices/wordsSlice";
import { Test } from "../types";

function Quiz() {
  const dispatch = useAppDispatch();
  const { wordsForQuiz, currentQuestionIndex, quizIsAccomplished, score } =
    useAppSelector((state) => state.words);
  const navigate = useNavigate();

  const handleStart = () => {
    dispatch(createWordsGroupForQuiz());
  };

  const handleShowResults = () => {
    navigate("/result");
    dispatch(
      addNewTest({
        time: new Date(),
        result: score * 10,
      })
    );
    dispatch(resetQuiz());
  };

  return (
    <div>
      {!wordsForQuiz.length && <button onClick={handleStart}>start</button>}
      <h1>{`${currentQuestionIndex + 1} / ${wordsForQuiz.length}`}</h1>
      {!!wordsForQuiz.length && <Question />}
      {quizIsAccomplished && (
        <button onClick={handleShowResults}>show result</button>
      )}
    </div>
  );
}

export default Quiz;
