import { useState, Dispatch, SetStateAction, useEffect } from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { data } from "../assests/data";
import TwitchLogo from "../assests/images/android-chrome-512x512.png";

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
  const [clicked, setClicked] = useState(false);

  const handleHighorLow = (hl: string) => {
    const firstNumber: number = first.gross_earning;
    const secondNumber: number = second.gross_earning;

    switch (hl) {
      case "high":
        const highcheck = firstNumber < secondNumber;
        if (highcheck) {
          setCorrect(true);
          setScore(score + 1);
          setTimeout(() => {
            setClicked(true);
          }, 1500);
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
          setCorrect(true);
          setScore(score + 1);
          setTimeout(() => {
            setClicked(true);
          }, 1500);
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
      setClicked(false);
      setFirst(second);
      setSecond(third);
      setThird(data[Math.floor(Math.random() * (data.length - 1))]);
    }, 3000);
  };

  useEffect(() => {
    setScore(0);
    setCorrect(false);
    setWrong(false);
  }, []);

  const handleSrcError = (e: any) => {
    e.target.src = TwitchLogo;
    e.target.onError = null;
  };

  return (
    <div className="w-full bg-purple-900  h-[94%] relative">
      <div className="grid lg:grid-cols-2 grid-cols-1 h-full">
        <div
          className={`${
            clicked
              ? "transition-all -translate-y-[100%] lg:-translate-y-0 lg:-translate-x-[100%] duration-500"
              : ""
          } xs:mb-16  flex items-center justify-center flex-col text-white text-2xl md:text-5xl`}
        >
          <img
            className="rounded-full h-14 w-14 text-sm"
            src={`https://static-cdn.jtvnw.net/jtv_user_pictures/${first.path}`}
            onError={handleSrcError}
            alt="profile-pic"
          />
          <h1>{first.username}</h1>
          <h3 className="mt-3">$ {Math.round(first.gross_earning)}</h3>
        </div>
        <div
          className={` ${
            clicked
              ? "transition-all -translate-y-[75%] lg:-translate-y-0 lg:-translate-x-[110%] duration-500"
              : ""
          } flex items-center justify-center flex-col text-white text-2xl md:text-5xl pt-24 md:pt-30 `}
        >
          <img
            className="rounded-full h-14 w-14 text-sm"
            src={`https://static-cdn.jtvnw.net/jtv_user_pictures/${second.path}`}
            onError={handleSrcError}
            alt="profile-pic"
          />
          <h1>{second.username}</h1>
          <h3 className="mt-3 h-10">
            {correct || wrong ? (
              <>
                {" "}
                <CountUp
                  prefix="$ "
                  end={Math.round(second.gross_earning)}
                  duration={0.5}
                  separator=" "
                />{" "}
              </>
            ) : (
              ""
            )}
          </h3>
          <div
            className={`${
              clicked ? "pb-24" : ""
            } flex items-center justify-center flex-col`}
          >
            <button
              className={` ${
                clicked ? "hidden" : ""
              } text-md md:text-lg mt-5 px-3 py-1 md:px-5 md:py-2 rounded-full  text-white md:font-bold outline-1 outline outline-offset-4 outline-white`}
              onClick={() => handleHighorLow("high")}
            >
              Higher
            </button>
            <button
              className={` ${
                clicked ? "hidden" : ""
              } text-md md:text-lg mt-5 px-4 py-1 md:px-5 md:py-2 rounded-full  text-white md:font-bold outline-1 outline outline-offset-4 outline-white`}
              onClick={() => handleHighorLow("low")}
            >
              Lower
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${
          clicked
            ? "transition-all -translate-y-[235%] lg:-translate-y-0 lg:-translate-x-[235%] duration-500"
            : ""
        } absolute xs:mb-16 lg:top-1/2 top-[110%] left-1/2 -translate-x-1/2 lg:-left-[200%] flex items-center justify-center flex-col text-white text-2xl md:text-5xl`}
      >
        <img
          className="rounded-full h-14 w-14 text-sm"
          src={`https://static-cdn.jtvnw.net/jtv_user_pictures/${third.path}`}
          onError={handleSrcError}
          alt="profile-pic"
        />
        <h1>{third.username}</h1>
        <h3 className="mt-3">$ {Math.round(third.gross_earning)}</h3>
      </div>
      <div
        className={`absolute top-1/2 left-1/2 -translate-y-20 md:-translate-y-30 lg:-translate-y-1/2 -translate-x-1/2 bg-white p-5 px-7 rounded-full text-slate-900 font-bold text-2xl ${
          wrong ? "transition ease-in bg-red-700 duration-400 " : null
        } ${correct ? "transition ease-in bg-green-700 duration-400 " : null}`}
      >
        {score}
      </div>
    </div>
  );
};

export default Game;
