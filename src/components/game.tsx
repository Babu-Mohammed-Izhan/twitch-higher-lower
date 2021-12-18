import { useState, Dispatch, SetStateAction, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { data } from "../assests/data";

// interface Streamer {
//   rank: number;
//   earning: string;
//   name: string;
//   login: string;
// }

interface GameProp {
  score: number;
  setScore: Dispatch<SetStateAction<number>>;
}

const Game = ({ score, setScore }: GameProp) => {
  const navigate = useNavigate();

  const [first, setFirst] = useState(
    data[Math.floor(Math.random() * (data.length - 1))]
  );
  const [second, setSecond] = useState(
    data[Math.floor(Math.random() * (data.length - 1))]
  );
  const [third, setThird] = useState(
    data[Math.floor(Math.random() * (data.length - 1))]
  );

  const [correct, setCorrect] = useState(false);
  const [wrong, setWrong] = useState(false);

  const handleHighorLow = (hl: string) => {
    const firstNumber: number = parseFloat(first.earning.replace(/,/g, ""));
    const secondNumber: number = parseFloat(second.earning.replace(/,/g, ""));

    switch (hl) {
      case "high":
        const highcheck = firstNumber < secondNumber;
        if (highcheck) {
          console.log("correct");
          setCorrect(true);
          setScore(score + 1);
        } else {
          setWrong(true);
          setTimeout(() => {
            navigate("/result");
          }, 1500);
        }
        break;
      case "low":
        const lowcheck = firstNumber > secondNumber;
        if (lowcheck) {
          console.log("correct");
          setCorrect(true);
          setScore(score + 1);
        } else {
          setWrong(true);
          setTimeout(() => {
            navigate("/result");
          }, 1500);
        }
        break;
    }

    setTimeout(() => {
      setCorrect(false);
      setWrong(false);
      setFirst(second);
      setSecond(third);
      setThird(data[Math.floor(Math.random() * (data.length - 1))]);
    }, 3000);
  };

  useEffect(() => {
    setScore(0);
    setCorrect(false);
    setWrong(false);
  }, [setScore]);

  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 w-full bg-slate-900 opacity-60  h-[94%] relative">
      <div className="flex items-center justify-center flex-col text-white text-2xl md:text-5xl">
        <h1 className="">{first.name}</h1>
        <h3 className="mt-3">$ {first.earning}</h3>
      </div>
      <div className="flex items-center justify-center flex-col text-white text-2xl md:text-5xl pt-[3.6rem]">
        <h1>{second.name}</h1>
        <h3
          className={`mt-3 ${
            correct || wrong ? "transition-all ease-in duration-500" : "hidden"
          }`}
        >
          $ {second.earning}
        </h3>

        <button
          className="text-md md:text-lg mt-5 px-3 py-1 md:px-5 md:py-2 rounded-full  text-white font-medium outline-1 outline outline-offset-4 outline-white"
          onClick={() => handleHighorLow("high")}
        >
          Higher
        </button>
        <button
          className=" text-md md:text-lg mt-5 px-3 py-1 md:px-5 md:py-2 rounded-full  text-white font-medium outline-1 outline outline-offset-4 outline-white"
          onClick={() => handleHighorLow("low")}
        >
          Lower
        </button>
      </div>
      <div
        className={`absolute top-1/2 left-1/2 -translate-y-3/4  md:-translate-y-1/2 -translate-x-1/2 bg-white p-5 px-7 rounded-full text-slate-900 font-bold text-2xl ${
          wrong ? "transition ease-in bg-red-700 duration-400 " : null
        } ${correct ? "transition ease-in bg-green-700 duration-400 " : null}`}
      >
        {score}
      </div>
    </div>
  );
};

export default Game;
