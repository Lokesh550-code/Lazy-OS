import { useState } from "react";
import StartUpButton from "./StartUpButton";
import StartUpMenu from "./StartUpMenu";
import { useRef } from "react";
import { useEffect } from "react";

const Taskbar = () => {
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
      />
      <StartUpButton handleStartUpButtonClick={handleStartUpButtonClick} />
      <div className="h-full min-w-100 px-3 border-l border-[#c05037] flex items-center gap-3">
        <h1 className="cursor-pointer select-none hover:scale-105 transition">
          Files
        </h1>
        <h1 className="cursor-pointer select-none hover:scale-105 transition">
          Terminal
        </h1>
        <h1 className="cursor-pointer select-none hover:scale-105 transition">
          Editor
        </h1>
      </div>
    </div>
  );
};

export default Taskbar;
