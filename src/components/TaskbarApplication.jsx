const TaskbarApplication = ({name}) => {
  return (
    <h1 className="cursor-pointer select-none hover:scale-105 transition">
      {name}
    </h1>
  );
};

export default TaskbarApplication;
