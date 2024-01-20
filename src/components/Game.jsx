import React, { useState } from "react";
import App, { questions } from "../App";
import { Link } from "react-router-dom";

const Game = ({ result, setResult }) => {
  const [questionsIndex, setQuestionsIndex] = useState(0);
  return (
    <div className="container-div">
      <div className="main_game">
        <div className="game">
          <div className="progress">
            <div className="progress_inner"></div>
          </div>
          <div style={{width: '280px'}} className="hrs"></div>
          <h2>{questions[questionsIndex].title}</h2>
        </div>
        <div className="game_nam">
          {
            questionsIndex === 2 ? (
              <Link to="/result">
                <li>{questions[questionsIndex].variants[0]}</li>
                <li>{questions[questionsIndex].variants[1]}</li>
                <li
                  onClick={() =>
                    setResult(questionsIndex === 2 ? result + 1 : result)
                  }
                >
                  {questions[questionsIndex].variants[2]}
                </li>
              </Link>
            ) : (
              <ul
                onClick={() =>
                  setQuestionsIndex(
                    questionsIndex === 2
                      ? questionsIndex + 0
                      : questionsIndex + 1
                  )
                }
              >
                <li
                  onClick={() =>
                    setResult(questionsIndex === 0 ? result + 1 : result)
                  }
                >
                  {questions[questionsIndex].variants[0]}
                </li>
                <li
                  onClick={() =>
                    setResult(questionsIndex === 1 ? result + 1 : result)
                  }
                >
                  {questions[questionsIndex].variants[1]}
                </li>
                <li>{questions[questionsIndex].variants[2]}</li>
              </ul>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Game;
