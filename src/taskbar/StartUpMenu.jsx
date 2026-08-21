import StartUpMenuApplication from "../components/StartUpMenuApplication";

const StartUpMenu = ({ isFuzzelActive,startMenuRef, applicationRegistery }) => {
  console.log(applicationRegistery)
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
      {applicationRegistery.map((elem) => {
        return <StartUpMenuApplication name={elem.name} key={elem.id} />
      })}
    </div>
  );
};

export default StartUpMenu;
