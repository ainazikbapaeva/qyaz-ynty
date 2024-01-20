import { useState } from "react";
import "./App.css";
import Game from "./components/Game";
import Result from "./components/Result";
import { Route, Routes } from "react-router-dom";
export const questions = [
  {
    title: "React - это ... ?",
    variants: ["библиотека", "фреймворк", "приложение"],
    correct: 0,
  },
  {
    title: "Компонент - это ... ",
    variants: [
      "приложение",
      "часть приложения или страницы",
      "то, что я не знаю что такое",
    ],
    correct: 1,
  },
  {
    title: "Что такое JSX?",
    variants: [
      "Это простой HTML",
      "Это функция",
      "Это тот же HTML, но с возможностью выполнять JS-код",
    ],
    correct: 2,
  },
];
function App() {
  const [result, setResult] = useState(0);
  const [correct, setCorect] = useState(0);
  console.log("result", result);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<Game setResult={setResult} result={result} />}
        />
        <Route path="/result" element={<Result result={result} />} />
      </Routes>
    </div>
  );
}
export default App;
