import Title from "./Title";

const Window = ({ application, focusWindow, removeComponent }) => {
  return (
    <div
      onClick={() => {
        focusWindow(application.id);
      }}
      className={`${application.focused ? `border-[#943F2B] border-2` : ""} h-100 w-100 absolute top-1/3 left-1/2 bg-[#242222] text-[#f6e7d9] flex flex-col items-center justify-center`}
    >
      <Title
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
