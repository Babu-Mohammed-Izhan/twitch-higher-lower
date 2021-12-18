import { useNavigate } from "react-router-dom";

interface TryagainProp {
  points: number;
}

const Tryagain = ({ points = 0 }: TryagainProp) => {
  const navigate = useNavigate();

  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 w-full bg-gray-700 opacity-50 h-[94%] relative">
      <div className="flex items-center justify-center flex-col text-white text-5xl">
        Nice! You got {points} points. Try Again to get more points!
      </div>
      <button
        className=" text-lg mt-5 px-5 py-2 rounded-full hover:outline-offset-8 text-white font-medium outline-1 outline outline-offset-4 outline-white"
        onClick={() => navigate("/game")}
      >
        Try Again
      </button>
      <button
        className=" text-lg mt-5 px-5 py-2 rounded-full hover:outline-offset-8 text-white font-medium outline-1 outline outline-offset-4 outline-white"
        onClick={() => navigate("/")}
      >
        Homepage
      </button>
    </div>
  );
};

export default Tryagain;
