import { useNavigate } from "react-router-dom";

interface TryagainProp {
  points: number;
}

const Tryagain = ({ points }: TryagainProp) => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center flex-col  w-full bg-no-repeat bg-cover bg-[url('/src/assests/images/twitch.png')]  h-[92%]">
      <div className="flex items-center justify-center flex-col text-white text-3xl md:text-5xl text-center py-12">
        <h1 className="py-5">
          Nice! You got <span className="font-bold">{points}</span> point
          {points === 1 ? null : `s`}. <br />
        </h1>
        Try Again to get a higher score!
      </div>
      <button
        className=" text-lg mt-5 px-6 py-2 rounded-full hover:outline-offset-8 text-white font-bold outline-1 outline outline-offset-4 outline-white"
        onClick={() => navigate("/game")}
      >
        Try Again
      </button>
      <button
        className=" text-lg mt-5 px-5 py-2 rounded-full hover:outline-offset-8 text-white font-bold outline-1 outline outline-offset-4 outline-white"
        onClick={() => navigate("/")}
      >
        Homepage
      </button>
    </div>
  );
};

export default Tryagain;
