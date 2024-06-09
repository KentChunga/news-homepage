const Attribution = () => {
  return (
    <footer className="mx-auto mb-6 flex w-[90%] max-w-[1440px] flex-col items-center justify-between font-normal lg:flex-row xl:w-[80%]">
      <div>&copy; {new Date().getFullYear()} - All Rights Reserved.</div>
      <div>
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          className="font-semibold text-veryDarkBlue transition-colors duration-300 ease-in-out hover:text-softRed"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://github.com/KentChunga"
          target="_blank"
          className="font-semibold text-veryDarkBlue transition-colors duration-300 ease-in-out hover:text-softRed"
        >
          Kent Chunga
        </a>
      </div>
    </footer>
  );
};

export default Attribution;
