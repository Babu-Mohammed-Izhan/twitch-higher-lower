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

  const [mark, setMark] = useState(false);

  const handleHighorLow = (hl: string) => {
    const firstNumber: number = parseFloat(first.earning.replace(/,/g, ""));
    const secondNumber: number = parseFloat(second.earning.replace(/,/g, ""));

    switch (hl) {
      case "high":
        const highcheck = firstNumber < secondNumber;
        if (highcheck) {
          console.log("correct");
          setMark(true);
          setScore(score + 1);
        } else {
          setMark(true);
          setTimeout(() => {
            navigate("/tryagain");
          }, 1500);
        }
        break;
      case "low":
        const lowcheck = firstNumber > secondNumber;
        if (lowcheck) {
          console.log("correct");
          setMark(true);
          setScore(score + 1);
        } else {
          setMark(true);
          setTimeout(() => {
            navigate("/tryagain");
          }, 1500);
        }
        break;
    }

    setTimeout(() => {
      setMark(false);
      setFirst(second);
      setSecond(third);
      setThird(data[Math.floor(Math.random() * (data.length - 1))]);
    }, 3000);
  };

  useEffect(() => {
    setScore(0);
    setMark(false);
  }, [setScore]);

  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 w-full bg-gray-700 opacity-50 h-[94%] relative">
      <div className="flex items-center justify-center flex-col text-white text-2xl md:text-5xl">
        <h1 className="">{first.name}</h1>
        <h3 className="mt-3">$ {first.earning}</h3>
      </div>
      <div className="flex items-center justify-center flex-col text-white text-2xl md:text-5xl pt-[3.6rem]">
        <h1>{second.name}</h1>
        <h3 className={`mt-3 ${mark ? null : "hidden"}`}>$ {second.earning}</h3>

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
      <div className="absolute top-1/2 left-1/2 -translate-y-3/4  md:-translate-y-1/2 -translate-x-1/2 bg-white p-5 px-7 rounded-full text-slate-900 font-bold text-2xl">
        {score}
      </div>
    </div>
  );
};

export default Game;
