const TaskbarApplication = ({
  application,
  setTaskbarApplication,
  addComponents,
  handleMaximize
}) => {
  return (
    <h1
      onClick={() => {
        addComponents(application.name);
        // handleMaximize(application.id);
        // setTaskbarApplication((prev) =>
        //   prev.map((elem) =>
        //     elem.id === application.id ? { ...elem, active: !elem.active } : elem,
        //   ),
        // );
      }}
      className={`cursor-pointer select-none hover:scale-105 transition`}
    >
      {application.name}
    </h1>
  );
};

export default TaskbarApplication;
