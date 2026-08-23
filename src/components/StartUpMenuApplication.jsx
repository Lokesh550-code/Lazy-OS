const StartUpMenuApplication = ({ name, addComponents, setIsFuzzelActive }) => {
  return (
    <h1
      onClick={() => {
        addComponents(name);
        setIsFuzzelActive(false);
      }}
      className="border-l text-center cursor-pointer hover:bg-[#1b1a1a] rounded-r transition select-none"
    >
      {name}
    </h1>
  );
};

export default StartUpMenuApplication;
