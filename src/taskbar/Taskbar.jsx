import { useState } from "react";
import StartUpButton from "./StartUpButton";
import StartUpMenu from "./StartUpMenu";
import { useRef } from "react";
import { useEffect } from "react";
import applicationRegistery from "../registery/applicationRegistery";
import TaskbarApplication from "../components/TaskbarApplication";

const Taskbar = ({ addComponents }) => {
  const [isFuzzelActive, setIsFuzzelActive] = useState(false);
  const startMenuRef = useRef(null);

  useEffect(() => {
    if (isFuzzelActive) {
      startMenuRef.current?.focus();
    }
  }, [isFuzzelActive]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key.toLowerCase() === "escape") {
        e.preventDefault();
        setIsFuzzelActive(false);
      }

      if (e.ctrlKey && e.key.toLowerCase() === "l") {
        e.preventDefault();
        setIsFuzzelActive((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleStartUpButtonClick = () => {
    setIsFuzzelActive((prev) => !prev);
  };

  return (
    <div className="h-10 w-full bg-[#242222] text-[#f6e7d9] font-ui flex relative items-center rounded">
      <StartUpMenu
        isFuzzelActive={isFuzzelActive}
        startMenuRef={startMenuRef}
        applicationRegistery={applicationRegistery}
        addComponents={addComponents}
      />
      <StartUpButton handleStartUpButtonClick={handleStartUpButtonClick} />
      <div className="h-full min-w-100 px-3 border-l border-[#c05037] flex items-center gap-3">
        {applicationRegistery.map((elem) => {
          return (
            <TaskbarApplication
              name={elem.name}
              key={elem.id}
              addComponents={addComponents}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Taskbar;
