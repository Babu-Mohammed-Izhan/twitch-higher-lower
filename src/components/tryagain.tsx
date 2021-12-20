import { useNavigate } from "react-router-dom";

interface TryagainProp {
  points: number;
}

const Tryagain = ({ points }: TryagainProp) => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center flex-col  w-full bg-gray-700 opacity-60 h-[93%]">
      <div className="flex items-center justify-center flex-col text-white text-3xl md:text-5xl text-center py-12">
        Nice! You got {points} point{points === 1 ? null : `s`}. <br />
        Try Again to get a higher score!
      </div>
      <button
        className=" text-lg mt-5 px-6 py-2 rounded-full hover:outline-offset-8 text-white font-medium outline-1 outline outline-offset-4 outline-white"
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
