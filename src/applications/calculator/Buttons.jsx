const Buttons = ({ elem }) => {
  console.log(elem);
  return (
    <div
      onClick={() => {
        elem.action(elem.key);
      }}
      className="h-[19%] w-[24%] text-xl text-[#242222] hover:bg-orange-500 flex justify-center items-center cursor-pointer border-2 border-orange-600 bg-orange-400 transition select-none"
    >
      {elem.key}
    </div>
  );
};

export default Buttons;
