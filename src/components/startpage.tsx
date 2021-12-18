import { Link } from "react-router-dom";

const Startpage = () => {
  return (
    <div className=" flex justify-center items-center w-full bg- bg-blend-multiply bg-twitch h-[93%]">
      <div className="flex justify-center items-center flex-col ">
        <h1 className="text-4xl  md:text-6xl text-white font-medium">
          Higher or Lower
        </h1>
        <p className="text-2xl text-white font-medium py-8 text-center">
          <span className="bg-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="157" height="60">
              <path
                d="M149.1 25.267v22.945L136.396 57h-7.81v-3.906L122.727 57h-6.835v-3.906L111.498 57H98.805L94.9 53.094 93.923 57l-11.204-.03-4.418-3.876L77.813 57l-12.693-.03-.488-3.876-3.417 3.876-19.528.03-3.906-1.953V57H27.04l-11.717-7.323L8 42.354v-32.22h15.134l7.323 7.323h33.198v-7.323h27.34v7.323h6.835v3.906l3.906-3.906h8.3l7.323-7.323h15.622v7.323h8.3zM27.04 20.873h-6.835V13.55h-8.788v27.34l5.37 5.858H27.04v-9.276h-6.835v-7.81h6.835zm36.615 0h-8.788v16.6H51.45v-16.6h-8.3v16.6h-3.417v-16.6h-9.276v25.875h27.34l5.858-5.858zm11.717 0h-8.3v25.875h8.3zm0-7.323h-8.3v3.906h8.3zm19.04 7.323h-6.835V13.55H78.79v27.34l5.37 5.858H94.41v-9.276h-6.835v-7.81h6.835zm22.457 0H103.2l-5.37 5.37V40.89l5.858 5.858h13.18v-9.276h-9.764v-7.81h9.764zm28.804 5.37l-5.858-5.37h-10.252V13.55h-9.276v33.198h9.276V29.66h6.835v17.087h9.276z"
                fill="#6441a4"
                fill-rule="evenodd"
              />
            </svg>
          </span>{" "}
          Edition
        </p>
        <button className="mb-10  px-7 py-3 rounded-full hover:outline-offset-8 text-white font-medium outline-1 outline outline-offset-4 outline-white mt-32">
          <Link to="/game">Start Game</Link>
        </button>
      </div>
    </div>
  );
};

export default Startpage;
