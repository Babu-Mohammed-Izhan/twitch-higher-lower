import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { data } from "../assests/data";

// interface Streamer {
//   rank: number;
//   earning: string;
//   name: string;
//   login: string;
// }

const Game = () => {
  const [first, setFirst] = useState(
    data[Math.floor(Math.random() * (data.length - 1))]
  );
  const [second, setSecond] = useState(
    data[Math.floor(Math.random() * (data.length - 1))]
  );
  const [third, setThird] = useState(
    data[Math.floor(Math.random() * (data.length - 1))]
  );

  const [mark, setMark] = useState(null);
  const [score, setScore] = useState(0);

  const handleHighorLow = (hl: string) => {
    switch (hl) {
      case "high":
        const highcheck = Number(first.earning) > Number(second.earning);
        if (highcheck) {
          console.log("correct");
          setScore(score + 1);
        } else {
          console.log("wrong");
        }
        break;
      case "low":
        const lowcheck = Number(first.earning) < Number(second.earning);
        if (lowcheck) {
          console.log("correct");
          setScore(score + 1);
        } else {
          console.log("wrong");
        }
        break;
    }

    setFirst(second);
    setSecond(third);
    setThird(data[Math.floor(Math.random() * (data.length - 1))]);
  };

  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 w-full bg-gray-700 opacity-50 h-[100%]">
      <div className="flex items-center justify-center flex-col text-white text-5xl">
        <h1 className="">{first.name}</h1>
        <h3 className="mt-3">$ {first.earning}</h3>
      </div>
      <div className="flex items-center justify-center flex-col text-white text-5xl">
        <h1>{second.name}</h1>
        <h3 className="mt-3">$ {second.earning}</h3>

        <button
          className="text-lg mt-5 px-5 py-2 rounded-full hover:outline-offset-8 text-white font-medium outline-1 outline outline-offset-4 outline-white"
          onClick={() => handleHighorLow("high")}
        >
          Higher
        </button>
        <button
          className=" text-lg mt-5 px-5 py-2 rounded-full hover:outline-offset-8 text-white font-medium outline-1 outline outline-offset-4 outline-white"
          onClick={() => handleHighorLow("low")}
        >
          Lower
        </button>
      </div>
      <div className="absolute top-1/2 left-1/2">Mark</div>
    </div>
  );
};

export default Game;
