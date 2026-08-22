import Clock from "../clock/Clock";
import Taskbar from "../taskbar/Taskbar";
import url from "../wallpapers/wallpaper1.jpg";
import Window from "../window/Window";
import { useState } from "react";

const Desktop = () => {
  const [components, setComponents] = useState([]);

  const addComponents = (name) => {
    setComponents((prev) => [
      ...prev.map((elem) => ({ ...elem, focused: false })),
      { id: crypto.randomUUID(), applicationName: name, focused: true },
    ]);
  };

  const focusWindow = (id) => {
    setComponents((prev) =>
      prev.map((elem) => ({ ...elem, focused: elem.id === id })),
    );
  };

  return (
    <div
      className="h-screen w-screen p-2 bg-[#242222] text-[#f6e7d9] font-ui flex flex-col justify-between"
      style={{
        backgroundImage: `url(${url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Clock />
      {components
        ? components.map((elem) => {
            return (
              <Window
                application={elem}
                focusWindow={focusWindow}
                key={elem.id}
              />
            );
          })
        : ""}
      <Taskbar addComponents={addComponents} />
    </div>
  );
};

export default Desktop;
