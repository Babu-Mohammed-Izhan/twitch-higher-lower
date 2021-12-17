import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
      <div
        className="
      container
      px-5
      py-24
      mx-auto
      flex
      md:items-center
      lg:items-start
      md:flex-row md:flex-nowrap
      flex-wrap flex-col
    "
      >
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <Link to="/">
            <span
              className=" bg-clip-text text-transparent
                 bg-gradient-to-r 
                 from-blue-500 
                 to-purple-500
                  text-3xl
                 cursor-pointer
                 font-semibold
                 "
            >
              Casity
            </span>
          </Link>
          <p className="mt-2 text-sm text-gray-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi,
            quam?
          </p>
        </div>
        <div
          className="
        flex-grow flex flex-wrap
        md:pl-20
        -mb-10
        md:mt-0
        mt-10
        md:text-left
        text-center
      "
        ></div>
      </div>
      <div className="bg-gray-100">
        <div
          className="
        container
        mx-auto
        py-4
        px-5
        flex flex-wrap flex-col
        sm:flex-row
      "
        >
          <p className="text-gray-500 text-sm text-center sm:text-left">
            Made By
            <a
              href="https://babumohammedizhan.netlify.app/"
              className="text-purple-500 ml-1 font-bold"
              target="_blank"
              rel="noreferrer"
            >
              Babu Mohammed Izhan
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
