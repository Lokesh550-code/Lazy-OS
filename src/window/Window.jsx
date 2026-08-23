import Title from "./Title";

const Window = ({
  application,
  focusWindow,
  removeComponent,
  handlePointerDown,
  handlePointerMove,
  handlePointerUp,
  position,
}) => {
  return (
    <div
      onClick={() => {
        focusWindow(application.id);
      }}
      style={{ top: position.y, left: position.x }}
      className={`${application.focused ? `border-[#943F2B] border-2` : ""} h-100 w-100 absolute top-1/3 left-1/2 bg-[#242222] text-[#f6e7d9] flex flex-col items-center justify-center`}
    >
      <Title
        handlePointerDown={handlePointerDown}
        handlePointerMove={handlePointerMove}
        handlePointerUp={handlePointerUp}
        application={application}
        removeComponent={removeComponent}
      />
      <div className="h-full flex justify-center items-center">
        {application.applicationName}
      </div>
    </div>
  );
};

export default Window;
