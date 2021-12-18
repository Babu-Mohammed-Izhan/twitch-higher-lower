const Footer = () => {
  return (
    <footer className="text-gray-800 body-font">
      <div
        className="
      flex
      md:items-center
      md:flex-row 
      flex-wrap flex-col
    "
      >
        <div className="bg-gray-100">
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
      </div>
    </footer>
  );
};

export default Footer;
