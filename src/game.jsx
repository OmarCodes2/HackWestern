import { useState, useEffect } from "react";
import drake from "./test images/Her_Loss.jpeg.webp";
import logo from "./test images/icon__menu_logo.png";
function Game() {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const questions = [
    { id: 0, begin: "Which ", end: " did they listen to the most?" },
    { id: 1, begin: "Which ", end: " did they listen to the least?" },
  ];

  const types = [
    { id: 0, thing: "artist" },
    { id: 1, thing: "song" },
  ];

  const stuff = [
    [
      { id: 0, name: "Drake", img: drake },
      { id: 1, name: "aJason", img: drake },
      { id: 2, name: "aOmar", img: drake },
      { id: 3, name: "aGayan", img: drake },
      { id: 4, name: "aKitty", img: drake },
    ],
    [
      { id: 0, name: "Rich Flex", img: drake },
      { id: 1, name: "sJason", img: drake },
      { id: 2, name: "sOmar", img: drake },
      { id: 3, name: "sGayan", img: drake },
      { id: 4, name: "sKitty", img: drake },
    ],
  ];

  const [count, setCount] = useState(0);
  const [question, setQuestion] = useState(() => {
    return questions[getRandomInt(2)];
  });
  const [type, setType] = useState(() => {
    return types[getRandomInt(2)];
  });

  const [answers, setAnswers] = useState(() => {
    if (question.id === 0 || question.id === 1) {
      let numbers = [];
      while (true) {
        let n = getRandomInt(5);
        if (!numbers.includes(n)) {
          numbers.push(n);
        }
        if (numbers.length === 4) break;
      }

      return [
        stuff[type.id][numbers[0]],
        stuff[type.id][numbers[1]],
        stuff[type.id][numbers[2]],
        stuff[type.id][numbers[3]],
      ];
    }
  });
  console.log(answers);

  const submit = (e) => {
    const submission = parseInt(e.target.className);
    let correct = true;
    if (question.id == 0) {
      for (let i = 0; i < 4; i++) {
        if (submission > answers[i].id) {
          correct = false;
        }
      }
    } else if (question.id == 1) {
      for (let i = 0; i < 4; i++) {
        if (submission < answers[i].id) {
          correct = false;
        }
      }
    }

    if (correct) {
      setCount(count + 1);
      setQuestion(questions[getRandomInt(2)]);
      setType(types[getRandomInt(2)]);
      setAnswers(() => {
        if (question.id === 0 || question.id === 1) {
          let numbers = [];
          while (true) {
            let n = getRandomInt(5);
            if (!numbers.includes(n)) {
              numbers.push(n);
            }
            if (numbers.length === 4) break;
          }

          return [
            stuff[type.id][numbers[0]],
            stuff[type.id][numbers[1]],
            stuff[type.id][numbers[2]],
            stuff[type.id][numbers[3]],
          ];
        }
      });
    }
  };

  return (
    <div className="game_body">
      <img className="logo_img" src={logo} alt="" />
      <div className="title">Question</div>
      <div className="question">
        {question.begin + type.thing + question.end}
      </div>
      <div className="answer_container">
        {answers?.map((content) => (
          <div className={content.id.toString() + " answer"} onClick={submit}>
            <img
              className={content.id.toString() + " answer_img"}
              src={content.img}
              alt=""
            />
            <div className={content.id.toString() + " answer_name"}>
              {content.name}
            </div>
          </div>
        ))}
      </div>
      <div className="score">Score: {count}</div>
    </div>
  );
}

export default Game;
