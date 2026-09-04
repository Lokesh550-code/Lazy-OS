import { useState } from "react";
import { root } from "../../vfs/vfs";

const Files = () => {
  const [currentDirectory, setCurrentDirectory] = useState(root);
  console.log(currentDirectory);
  const changeDirectory = (directory) => {
    setCurrentDirectory(directory);
  };

  return (
    <div className="h-full w-full flex bg-[#242222] text-[#f6e7d9]">
      <div className="h-full w-[26%] px-5 py-2 border-r-2">
        <h1 className="select-none border-b-2 py-2">
          Current Directory: {currentDirectory.name}
        </h1>
        <h1 className="py-1 select-none">
          {currentDirectory.children.length === 0
            ? "Nothing to show here."
            : ""}
        </h1>
        {currentDirectory.children.map((elem) => {
          return (
            <h1
              onClick={() => {
                changeDirectory(elem);
              }}
              className="w-full my-2 px-3 py-0.5 cursor-pointer select-none rounded transition hover:bg-[#141313] active:bg-[#000000]"
            >
              {elem.type === "directory" ? elem.name : ""}
            </h1>
          );
        })}
      </div>
      <div className="h-full w-[74%] px-5 py-2 flex">
        {currentDirectory.children.map((elem) => {
          return (
            <div
              onClick={() => {
                changeDirectory(elem);
              }}
              className="h-30 w-35 my-2 px-3 py-0.5 flex justify-center items-center cursor-pointer select-none rounded transition hover:bg-[#141313] active:bg-[#000000]"
            >
              {elem.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Files;
