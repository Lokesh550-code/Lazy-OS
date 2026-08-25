import { useState } from "react";
import { createContext } from "react";
import { useRef } from "react";

export const WindowContext = createContext(null);
const WindowProvider = ({ children }) => {
  const [components, setComponents] = useState([]);
  const offsetRef = useRef({ x: 0, y: 0 });
  const sizeDataRef = useRef({
    startPointerX: 0,
    startPointerY: 0,
    startWidth: 0,
    startHeight: 0,
    startX: 0,
    startY: 0,
  });
  const [resizing, setResizing] = useState(false);

  const addComponents = (name, id) => {
    setComponents((prev) => [
      ...prev.map((elem) => ({ ...elem, focused: false })),
      {
        windowId: crypto.randomUUID(),
        applicationId: id,
        applicationName: name,
        focused: true,
        minimized: false,
        maximized: false,
        position: { x: 550, y: 100 },
        size: { height: 500, width: 500 },
      },
    ]);
  };

  const focusWindow = (id) => {
    setComponents((prev) =>
      prev.map((elem) => ({ ...elem, focused: elem.windowId === id })),
    );
  };

  const removeComponent = (id) => {
    let arr = [...components];
    arr = arr.filter((elem) => elem.windowId !== id);
    setComponents(arr);
  };

  const handleMinimize = (windowId) => {
    setComponents((prev) =>
      prev.map((elem) =>
        elem.windowId === windowId ? { ...elem, minimized: true } : elem,
      ),
    );
  };

  const handleRestore = (windowId) => {
    setComponents((prev) =>
      prev.map((elem) =>
        elem.windowId === windowId ? { ...elem, minimized: false } : elem,
      ),
    );

    focusWindow(windowId);
  };

  const handleMaximize = (id) => {
    setComponents((prev) =>
      prev.map((elem) =>
        elem.windowId === id ? { ...elem, maximized: !elem.maximized } : elem,
      ),
    );
  };

  const handlePointerDown = (event, id) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    const activeComponent = components.find((elem) => elem.windowId === id);
    offsetRef.current = {
      x: event.clientX - activeComponent.position.x,
      y: event.clientY - activeComponent.position.y,
    };

    focusWindow(id);
  };

  const handlePointerMove = (event, id) => {
    if (!event.currentTarget.hasPointerCapture(event.pointerId)) {
      return;
    }

    const activeComponent = components.find((elem) => elem.windowId === id);

    if (activeComponent.maximized) {
      const newPosition = { x: event.clientX - 250, y: event.clientY - 25 };
      offsetRef.current = {
        x: event.clientX - newPosition.x,
        y: event.clientY - newPosition.y,
      };

      setComponents((prev) =>
        prev.map((elem) =>
          elem.windowId === id
            ? {
                ...elem,
                maximized: false,
                position: newPosition,
              }
            : elem,
        ),
      );
    } else {
      setComponents((prev) =>
        prev.map((elem) =>
          elem.windowId === id
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
    }
  };

  const handlePointerUp = (event) => {
    event.currentTarget.releasePointerCapture(event.pointerId);
  };

  const handleResizeStart = (event, id) => {
    event.stopPropagation();
    event.currentTarget.setPointerCapture(event.pointerId);

    const activeComponent = components.find((elem) => elem.windowId === id);

    sizeDataRef.current = {
      startPointerX: event.clientX,
      startPointerY: event.clientY,
      startWidth: activeComponent.size.width,
      startHeight: activeComponent.size.height,
      startX: activeComponent.position.x,
      startY: activeComponent.position.y,
    };

    setResizing(true);
  };

  const handleResizeMove = (event, id, moveDirecton) => {
    if (!resizing) return;

    const data = sizeDataRef.current;
    const dx = event.clientX - data.startPointerX;
    const dy = event.clientY - data.startPointerY;
    const maxDx = data.startWidth - 500;
    const maxDy = data.startHeight - 500;
    const clampedDx = Math.min(dx, maxDx);
    const clampedDy = Math.min(dy, maxDy);
    const dxMax = Math.max(dx, maxDx);
    const dyMax = Math.max(dy, maxDy);

    if (moveDirecton === "es") {
      setComponents((prev) =>
        prev.map((elem) =>
          elem.windowId === id
            ? {
                ...elem,
                size: {
                  width: Math.max(500, data.startWidth + dx),
                  height: Math.max(500, data.startHeight + dy),
                },
              }
            : elem,
        ),
      );
    }

    if (moveDirecton === "e") {
      setComponents((prev) =>
        prev.map((elem) =>
          elem.windowId === id
            ? {
                ...elem,
                size: {
                  width: Math.max(500, data.startWidth + dx),
                  height: elem.size.height,
                },
              }
            : elem,
        ),
      );
    }

    if (moveDirecton === "s") {
      setComponents((prev) =>
        prev.map((elem) =>
          elem.windowId === id
            ? {
                ...elem,
                size: {
                  width: elem.size.width,
                  height: Math.max(500, data.startHeight + dy),
                },
              }
            : elem,
        ),
      );
    }

    if (moveDirecton === "w") {
      setComponents((prev) =>
        prev.map((elem) =>
          elem.windowId === id
            ? {
                ...elem,
                size: {
                  width: Math.max(500, data.startWidth - clampedDx),
                  height: elem.size.height,
                },
                position: { x: data.startX + clampedDx, y: elem.position.y },
              }
            : elem,
        ),
      );
    }

    if (moveDirecton === "n") {
      setComponents((prev) =>
        prev.map((elem) =>
          elem.windowId === id
            ? {
                ...elem,
                size: {
                  width: elem.size.width,
                  height: Math.max(500, data.startHeight - clampedDy),
                },
                position: { x: elem.position.x, y: data.startY + clampedDy },
              }
            : elem,
        ),
      );
    }

    if (moveDirecton === "ne") {
      setComponents((prev) =>
        prev.map((elem) =>
          elem.windowId === id
            ? {
                ...elem,
                size: {
                  width: data.startWidth + dxMax,
                  height: data.startHeight - clampedDy,
                },
                position: { x: data.startX, y: data.startY + clampedDy },
              }
            : elem,
        ),
      );
    }
    if (moveDirecton === "nw") {
      setComponents((prev) =>
        prev.map((elem) =>
          elem.windowId === id
            ? {
                ...elem,
                size: {
                  width: data.startWidth - clampedDx,
                  height: data.startHeight - clampedDy,
                },
                position: {
                  x: data.startX + clampedDx,
                  y: data.startY + clampedDy,
                },
              }
            : elem,
        ),
      );
    }
    if (moveDirecton === "ws") {
      setComponents((prev) =>
        prev.map((elem) =>
          elem.windowId === id
            ? {
                ...elem,
                size: {
                  width: data.startWidth - clampedDx,
                  height: data.startHeight + dyMax,
                },
                position: { x: data.startX + clampedDx, y: data.startY },
              }
            : elem,
        ),
      );
    }
  };

  const handleResizeEnd = (event) => {
    setResizing(false);
    event.currentTarget.releasePointerCapture(event.pointerId);
  };
  return (
    <WindowContext.Provider value={{components, addComponents, focusWindow, removeComponent, handleMinimize, handleRestore, handleMaximize, handlePointerDown, handlePointerMove, handlePointerUp, handleResizeStart, handleResizeMove, handleResizeEnd}}>
      {children}
    </WindowContext.Provider>
  )
};

export default WindowProvider;
