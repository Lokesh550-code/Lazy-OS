import Title from "./Title";

const Window = ({
  application,
  focusWindow,
  removeComponent,
  handlePointerDown,
  handlePointerMove,
  handlePointerUp,
  handleMinimize,
  handleMaximize
}) => {
  return (
    <div
      style={ application.maximized? {top: 0, left: 0, height: "92%", width: "100%"}: {top: application.position.y, left: application.position.x,  height: "500px", width: "500px"} }
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
      <div className="h-3 w-3 cursor-nwse-resize rounded-full absolute top-0 left-0"></div>
      <div className="h-3 w-3 cursor-nesw-resize rounded-full absolute top-0 right-0"></div>
      <div className="h-3 w-3 cursor-nesw-resize rounded-full absolute bottom-0 left-0"></div>
      <div className="h-3 w-3 cursor-nwse-resize rounded-full absolute bottom-0 right-0"></div>
    </div>
  );
};

export default Window;
