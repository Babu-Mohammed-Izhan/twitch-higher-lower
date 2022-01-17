import { Link } from 'react-router-dom';
import Twitch from '../assests/images/twitch-new-2019-seeklogo.com-3.png';

const Startpage = () => {
  return (
    <div className=" flex justify-center items-center w-full bg-grey-500 bg-blend-multiply bg-no-repeat bg-cover bg-purple-900  h-[93%]">
      <div className="flex justify-center items-center flex-col ">
        <h1 className="text-4xl sm:text-6xl text-white font-twitch font-bold text-center tracking-widest  ">
          Higher or Lower
        </h1>
        <p className="text-2xl xs:text-4xl text-white font-twitch font-bold text-center mt-20 tracking-widest">
          Twitch Edition
        </p>
        <button className=" px-7 pb-6 pt-1 mt-28 rounded-full hover:outline-offset-8 font-twitch text-white font-bold outline-1 outline outline-offset-4 outline-white text-lg tracking-widest">
          <Link to="/game">Start Game</Link>
        </button>
      </div>
    </div>
  );
};

export default Startpage;
