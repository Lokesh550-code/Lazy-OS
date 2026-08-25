const TaskbarApplication = ({
  application,
  handleMinimize,
  handleRestore
}) => {
  console.log(application);
  return (
    <h1
      onClick={() => {
        if(application.minimized) {
          handleRestore(application.windowId)
        } else {
          handleMinimize(application.windowId)
        }
      }}
      className={`${application.minimized? "border-b border-[#c05037]" : "border-b"} cursor-pointer select-none hover:scale-105 transition`}
    >
      {application.applicationName}
    </h1>
  );
};

export default TaskbarApplication;
