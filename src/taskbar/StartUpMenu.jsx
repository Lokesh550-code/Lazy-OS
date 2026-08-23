import { useState } from "react";
import StartUpMenuApplication from "../components/StartUpMenuApplication";
import { useEffect } from "react";

const StartUpMenu = ({
  isFuzzelActive,
  startMenuRef,
  applicationRegistery,
  addComponents,
  setIsFuzzelActive
}) => {
  const [querry, setQuerry] = useState("");
  const [filteredArr, setFilteredArr] = useState(null);

  const handleInput = (e) => {
    setQuerry(e.target.value);
    setFilteredArr(
      applicationRegistery.filter((elem) =>
        elem.name.toLowerCase().includes(querry),
      ),
    );
  };

  useEffect(() => {
    if (querry == "") {
      setFilteredArr(null);
    }
  }, [querry]);

  return (
    <div
      className={` ${isFuzzelActive ? `fixed` : `hidden`} font-application h-80 w-100 p-3 bottom-14 flex flex-col gap-3 bg-[#242222] text-[#f6e7d9] rounded`}
    >
      <form
        className="w-full"
        onSubmit={(e) => {
          e.preventDefault();
          setQuerry("");
        }}
      >
        <input
          onChange={handleInput}
          value={querry}
          ref={startMenuRef}
          className="w-full pl-[35%] inherit focus:outline-none"
          type="text"
          name="querry"
          autoComplete="off"
          placeholder="Lazy Search"
        />
      </form>
      {filteredArr
        ? filteredArr.map((elem) => (
            <StartUpMenuApplication
              addComponents={addComponents}
              name={elem.name}
              key={elem.id}
            />
          ))
        : applicationRegistery?.map((elem) => {
            return (
              <StartUpMenuApplication
                name={elem.name}
                key={elem.id}
                addComponents={addComponents}
                setIsFuzzelActive={setIsFuzzelActive}
              />
            );
          })}
    </div>
  );
};

export default StartUpMenu;
