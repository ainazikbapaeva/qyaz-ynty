import React from "react";
import logo from "../img/2278992.png";
import { questions } from "../App";

const Result = ({ result }) => {
  //   result();
  return (
    <div>
      <div className="hap">
        <h1>
          {result === 3
            ? ` Поздравляю  вы ответили на ${questions.length} из 3 вопросов`
            : `Поздравляю !вы ответили на ${result} из 3 вопросов:`}
        </h1>
        <div className="happy">
          <img src={logo} alt="" />
        </div>
        <a href="/">
          <button className="Начать">Начать сначала?</button>
        </a>
      </div>
    </div>
  );
};

export default Result;
