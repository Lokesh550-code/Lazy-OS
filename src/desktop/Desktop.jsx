import { useRef } from "react";
import Clock from "../clock/Clock";
import Taskbar from "../taskbar/Taskbar";
import url from "../wallpapers/wallpaper1.jpg";
import Window from "../window/Window";
import { useState } from "react";

const Desktop = () => {
  const [components, setComponents] = useState([]);
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const offsetRef = useRef({ x: 0, y: 100 });

  const addComponents = (name) => {
    setComponents((prev) => [
      ...prev.map((elem) => ({ ...elem, focused: false })),
      {
        id: crypto.randomUUID(),
        applicationName: name,
        focused: true,
        position: { x: 100, y: 100 },
      },
    ]);
  };

  const focusWindow = (id) => {
    setComponents((prev) =>
      prev.map((elem) => ({ ...elem, focused: elem.id === id })),
    );
  };

  const removeComponent = (id) => {
    let arr = [...components];
    arr = arr.filter((elem) => elem.id !== id);
    setComponents(arr);
  };

  const handlePointerDown = (event) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    offsetRef.current = {
      x: event.clientX - position.x,
      y: event.clientY - position.y,
    };
  };

  const handlePointerMove = (event) => {
    if (!event.currentTarget.hasPointerCapture(event.pointerId)) {
      return;
    }

    setPosition({
      x: event.clientX - offsetRef.current.x,
      y: event.clientY - offsetRef.current.y,
    });
  };

  const handlePointerUp = (event) => {
    event.currentTarget.releasePointerCapture(event.pointerId);
  };

  console.log(components);

  return (
    <div
      className="h-screen w-screen p-2 bg-[#242222] text-[#f6e7d9] font-ui flex flex-col justify-between overflow-hidden"
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
                key={elem.id}
                position={position}
                handlePointerDown={handlePointerDown}
                handlePointerMove={handlePointerMove}
                handlePointerUp={handlePointerUp}
                focusWindow={focusWindow}
                removeComponent={removeComponent}
              />
            );
          })
        : ""}
      <Taskbar addComponents={addComponents} />
    </div>
  );
};

export default Desktop;
