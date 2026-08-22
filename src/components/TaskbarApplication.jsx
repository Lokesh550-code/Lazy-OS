const TaskbarApplication = ({ name, addComponents }) => {
  return (
    <h1
      onClick={() => {
        addComponents(name);
      }}
      className="cursor-pointer select-none hover:scale-105 transition"
    >
      {name}
    </h1>
  );
};

export default TaskbarApplication;
