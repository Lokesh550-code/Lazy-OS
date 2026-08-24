import Title from "./Title";

const Window = ({
  application,
  focusWindow,
  removeComponent,
  handlePointerDown,
  handlePointerMove,
  handlePointerUp,
  handleMinimize,
  handleMaximize,
  handleResizeStart,
  handleResizeMove,
  handleResizeEnd,
}) => {
  return (
    <div
      onPointerDown={() => {
        focusWindow(application.id);
      }}
      style={
        application.maximized
          ? { top: 0, left: 0, height: "92%", width: "100%" }
          : {
              top: application.position.y,
              left: application.position.x,
              height: `${application.size.height}px`,
              width: `${application.size.width}px`,
            }
      }
      className={`${application.minimized ? `hidden` : application.focused ? `border-[#943F2B] border-2 z-40` : `z-30`} absolute top-1/3 left-1/2 bg-[#242222] text-[#f6e7d9] flex flex-col items-center justify-center`}
    >
      <Title
        handlePointerDown={handlePointerDown}
        handlePointerMove={handlePointerMove}
        handlePointerUp={handlePointerUp}
        application={application}
        removeComponent={removeComponent}
        handleMinimize={handleMinimize}
        handleMaximize={handleMaximize}
      />
      <div className="h-full flex justify-center items-center">
        {application.applicationName}
      </div>
      <div
        onPointerDown={(event) => {
          handleResizeStart(event, application.id);
        }}
        onPointerMove={(event) => {
          handleResizeMove(event, application.id, "nw");
        }}
        onPointerUp={(event) => {
          handleResizeEnd(event);
        }}
        className="h-2 w-2 cursor-nwse-resize z-40 absolute top-0 left-0"
      ></div>
      <div
        onPointerDown={(event) => {
          handleResizeStart(event, application.id);
        }}
        onPointerMove={(event) => {
          handleResizeMove(event, application.id, "ne");
        }}
        onPointerUp={(event) => {
          handleResizeEnd(event);
        }}
        className="h-2 w-2 cursor-nesw-resize z-40 absolute top-0 right-0"
      ></div>
      <div
        onPointerDown={(event) => {
          handleResizeStart(event, application.id);
        }}
        onPointerMove={(event) => {
          handleResizeMove(event, application.id, "ws");
        }}
        onPointerUp={(event) => {
          handleResizeEnd(event);
        }}
        className="h-2 w-2 cursor-nesw-resize z-40 absolute bottom-0 left-0"
      ></div>
      <div
        onPointerDown={(event) => {
          handleResizeStart(event, application.id);
        }}
        onPointerMove={(event) => {
          handleResizeMove(event, application.id, "es");
        }}
        onPointerUp={(event) => {
          handleResizeEnd(event);
        }}
        className="h-2 w-2 z-40 cursor-nwse-resize absolute bottom-0 right-0"
      ></div>
      <div
        onPointerDown={(event) => {
          handleResizeStart(event, application.id);
        }}
        onPointerMove={(event) => {
          handleResizeMove(event, application.id, "n");
        }}
        onPointerUp={(event) => {
          handleResizeEnd(event);
        }}
        className="absolute h-1 w-full z-30 cursor-n-resize top-0"
      ></div>
      <div
        onPointerDown={(event) => {
          handleResizeStart(event, application.id);
        }}
        onPointerMove={(event) => {
          handleResizeMove(event, application.id, "w");
        }}
        onPointerUp={(event) => {
          handleResizeEnd(event);
        }}
        className="absolute h-full w-1 z-30 cursor-w-resize left-0"
      ></div>
      <div
        onPointerDown={(event) => {
          handleResizeStart(event, application.id);
        }}
        onPointerMove={(event) => {
          handleResizeMove(event, application.id, "s");
        }}
        onPointerUp={(event) => {
          handleResizeEnd(event);
        }}
        className="absolute h-1 w-full z-30 cursor-s-resize bottom-0"
      ></div>
      <div
        onPointerDown={(event) => {
          handleResizeStart(event, application.id);
        }}
        onPointerMove={(event) => {
          handleResizeMove(event, application.id, "e");
        }}
        onPointerUp={(event) => {
          handleResizeEnd(event);
        }}
        className="absolute h-full w-1 z-30 cursor-e-resize right-0"
      ></div>
    </div>
  );
};

export default Window;
