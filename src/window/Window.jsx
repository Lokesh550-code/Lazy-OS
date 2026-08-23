import Title from "./Title";

const Window = ({
  application,
  focusWindow,
  removeComponent,
  handlePointerDown,
  handlePointerMove,
  handlePointerUp,
  handleMinimize,
}) => {
  return (
    <div
      onClick={() => {
        focusWindow(application.id);
      }}
      style={{ top: application.position.y, left: application.position.x }}
      className={`${application.minimized ? `hidden` : application.focused ? `border-[#943F2B] border-2 z-10` : `z-9`} h-100 w-100 absolute top-1/3 left-1/2 bg-[#242222] text-[#f6e7d9] flex flex-col items-center justify-center`}
    >
      <Title
        handlePointerDown={handlePointerDown}
        handlePointerMove={handlePointerMove}
        handlePointerUp={handlePointerUp}
        application={application}
        removeComponent={removeComponent}
        handleMinimize={handleMinimize}
      />
      <div className="h-full flex justify-center items-center">
        {application.applicationName}
      </div>
      <div className="h-1 w-1 cursor-nwse-resize rounded-full absolute top-0 left-0"></div>
      <div className="h-1 w-1 cursor-nesw-resize rounded-full absolute top-0 right-0"></div>
      <div className="h-1 w-1 cursor-nesw-resize rounded-full absolute bottom-0 left-0"></div>
      <div className="h-1 w-1 cursor-nwse-resize rounded-full absolute bottom-0 right-0"></div>
    </div>
  );
};

export default Window;
