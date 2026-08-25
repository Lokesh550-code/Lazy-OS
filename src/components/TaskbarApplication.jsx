const TaskbarApplication = ({
  application,
  handleMinimize,
  handleRestore,
  focusWindow
}) => {
  console.log(application);
  return (
    <h1
      onClick={() => {
        if(application.minimized) {
          handleRestore(application.windowId)
        } else if(application.focused){
          handleMinimize(application.windowId)
        } else {
          focusWindow(application.windowId)
        }
      }}
      className={`${!application.focused ? `border-b border-[#ffa552]` :application.minimized? "border-b border-[#c05037]" : "border-b"} cursor-pointer select-none hover:scale-105 transition`}
    >
      {application.applicationName}
    </h1>
  );
};

export default TaskbarApplication;
