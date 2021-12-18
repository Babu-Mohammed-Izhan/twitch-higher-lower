import { Link } from "react-router-dom";
import Twitch from "../assests/images/twitch-new-2019-seeklogo.com-3.png";

const Startpage = () => {
  return (
    <div className=" flex justify-center items-center w-full bg-grey-500 bg-blend-multiply bg-no-repeat bg-cover bg-[url('/src/assests/images/twitch.png')]  h-[93%]">
      <div className="flex justify-center items-center flex-col ">
        <h1 className="text-4xl md:text-6xl text-white font-bold">
          Higher or Lower
        </h1>
        <p className="text-3xl text-white font-bold py-2 text-center ">
          <span>
            <img src={Twitch} width="150" height="150" alt="logo" />
          </span>{" "}
          Edition
        </p>
        <button className="mb-10 px-7 py-3 rounded-full hover:outline-offset-8 text-white font-medium outline-1 outline outline-offset-4 outline-white mt-32 text-lg">
          <Link to="/game">Start Game</Link>
        </button>
      </div>
    </div>
  );
};

export default Startpage;
