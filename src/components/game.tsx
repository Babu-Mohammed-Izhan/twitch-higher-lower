import { Link } from "react-router-dom";

const Game = () => {
  return (
    <div className=" flex justify-center items-center w-full bg-gray-700 opacity-50 h-[100%]">
      <div className="flex justify-center items-center flex-col ">
        <h1 className="text-6xl text-white font-medium">Higher or Lower</h1>
        <p className="text-2xl text-white font-medium py-8">Twitch Edition</p>
        <button className="mb-10  px-7 py-3 rounded-full hover:outline-offset-8 text-white font-medium outline-1 outline outline-offset-4 outline-white mt-32">
          <Link to="/game">Start Game</Link>
        </button>
      </div>
    </div>
  );
};

export default Game;
