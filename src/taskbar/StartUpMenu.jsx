const StartUpMenu = ({ isFuzzelActive,startMenuRef }) => {
  return (
    <div
      className={` ${isFuzzelActive ? `fixed` : `hidden`} font-application h-80 w-100 p-3 bottom-14 flex flex-col gap-3 bg-[#242222] text-[#f6e7d9] rounded`}
    >
      <form className="w-full">
        <input
          ref={startMenuRef}
          className="w-full pl-[35%] inherit focus:outline-none"
          type="text"
          name="querry"
          id=""
          placeholder="Lazy Search"
        />
      </form>
      <h1 className="border-l text-center cursor-pointer hover:bg-[#1b1a1a] rounded-r transition select-none">
        Files
      </h1>
      <h1 className="border-l text-center cursor-pointer hover:bg-[#1b1a1a] rounded-r transition select-none">
        Terminal
      </h1>
      <h1 className="border-l text-center cursor-pointer hover:bg-[#1b1a1a] rounded-r transition select-none">
        Editor
      </h1>
    </div>
  );
};

export default StartUpMenu;
