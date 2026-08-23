import { useRef } from "react";
import Clock from "../clock/Clock";
import Taskbar from "../taskbar/Taskbar";
import url from "../wallpapers/wallpaper1.jpg";
import Window from "../window/Window";
import { useState } from "react";

const Desktop = () => {
  const [components, setComponents] = useState([]);
  const offsetRef = useRef({ x: 0, y: 0 });

  const addComponents = (name) => {
    setComponents((prev) => [
      ...prev.map((elem) => ({ ...elem, focused: false })),
      {
        id: crypto.randomUUID(),
        applicationName: name,
        focused: true,
        minimized: false,
        maximized: false,
        position: { x: 550, y: 100 },
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

  const handleMinimize = (id) => {
    setComponents((prev) =>
      prev.map((elem) =>
        elem.id === id ? { ...elem, minimized: true } : elem,
      ),
    );
  };

  const handleMaximize = (id) => {
    setComponents((prev) =>
      prev.map((elem) =>
        elem.id === id ? { ...elem, maximized: !elem.maximized } : elem,
      ),
    );
  };

  const handlePointerDown = (event, id) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    const activeComponent = components.find((elem) => elem.id === id);

    if (activeComponent.maximized) {
      const newPosition = { x: event.clientX - 250, y: event.clientY - 25 };
      offsetRef.current = {
        x: event.clientX - newPosition.x,
        y: event.clientY - newPosition.y,
      };

      setComponents((prev) =>
        prev.map((elem) =>
          elem.id === id
            ? {
                ...elem,
                maximized: false,
                position: newPosition,
              }
            : elem,
        ),
      );
    } else {
      offsetRef.current = {
        x: event.clientX - activeComponent.position.x,
        y: event.clientY - activeComponent.position.y,
      };
    }

    focusWindow(id);
  };

  const handlePointerMove = (event, id) => {
    if (!event.currentTarget.hasPointerCapture(event.pointerId)) {
      return;
    }

    setComponents((prev) =>
      prev.map((elem) =>
        elem.id === id
          ? {
              ...elem,
              position: {
                x: event.clientX - offsetRef.current.x,
                y: event.clientY - offsetRef.current.y,
              },
            }
          : elem,
      ),
    );
  };

  const handlePointerUp = (event) => {
    event.currentTarget.releasePointerCapture(event.pointerId);
  };

  return (
    <div
      className="h-screen w-screen p-2 bg-[#242222] text-[#f6e7d9] font-ui flex flex-col justify-between overflow-hidden z-10"
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
                handlePointerDown={handlePointerDown}
                handlePointerMove={handlePointerMove}
                handlePointerUp={handlePointerUp}
                focusWindow={focusWindow}
                removeComponent={removeComponent}
                handleMinimize={handleMinimize}
                handleMaximize={handleMaximize}
              />
            );
          })
        : ""}
      <Taskbar addComponents={addComponents} />
    </div>
  );
};

export default Desktop;
