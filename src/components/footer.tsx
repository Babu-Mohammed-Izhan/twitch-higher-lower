const Footer = () => {
  return (
    <footer className="text-white body-font w-full bg-black">
      <div
        className="
      flex
      items-center
      flex-wrap flex-col
    "
      >
        <div>
          <div
            className="
        container
        mx-auto
        py-4
        px-5
        flex flex-wrap 
        flex-row
      "
          >
            <p className=" text-sm text-center sm:text-left">
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
      </div>
    </footer>
  );
};

export default Footer;
