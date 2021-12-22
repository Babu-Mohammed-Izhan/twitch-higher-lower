import { Link } from "react-router-dom";
import Twitch from "../assests/images/twitch-new-2019-seeklogo.com-3.png";

const Startpage = () => {
  return (
    <div className=" flex justify-center items-center w-full bg-grey-500 bg-blend-multiply bg-no-repeat bg-cover bg-[url('/src/assests/images/twitch.png')]  h-[93%]">
      <div className="flex justify-center items-center flex-col ">
        <h1 className="text-4xl sm:text-6xl text-white font-bold text-center mb-5">
          Higher or Lower
        </h1>
        <p className="text-2xl xs:text-4xl text-white font-bold text-center ">
          <span>
            <img
              src={Twitch}
              width="130"
              height="130"
              alt="logo"
              className="mb-3"
            />
          </span>{" "}
          Edition
        </p>
        <button className="mb-10 px-7 py-3 mt-28 rounded-full hover:outline-offset-8 text-white font-bold outline-1 outline outline-offset-4 outline-white text-lg">
          <Link to="/game">Start Game</Link>
        </button>
      </div>
    </div>
  );
};

export default Startpage;
