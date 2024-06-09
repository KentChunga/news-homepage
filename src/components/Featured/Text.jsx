const Text = () => {
  return (
    <div className="mt-8 flex flex-col justify-between gap-8 md:flex-row">
      <div className="mb-4 w-full lg:mb-0 lg:w-72">
        <h1 className="text-5xl font-extrabold">
          The Bright Future of Web 3.0?
        </h1>
      </div>

      <div className="relative w-full lg:w-[22.0625rem]">
        <p className="mb-6 text-darkGrayishBlue">
          {" "}
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </p>
        <button
          type="button"
          className="bg-softRed px-8 py-3 text-center text-[15px] font-medium uppercase tracking-[0.125em] text-offWhite transition-all duration-300 ease-in hover:bg-veryDarkBlue"
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default Text;
