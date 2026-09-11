import Navbar from "./Navbar";

const Main = ({ currentDirectory, changeDirectory, currentPath, setCurrentPath, directoryHistory, handleBack }) => {
  return (
    <div className="h-full w-[74%] px-5 py-2 flex flex-col">
      <Navbar currentDirectory={currentDirectory} setCurrentPath={setCurrentPath} currentPath={currentPath} directoryHistory={directoryHistory} handleBack={handleBack} />
      <div className="h[calc(100% - 2.5rem)] flex py-3">
        {currentDirectory.children.map((elem) => {
          return (
            <div
              onClick={() => {
                changeDirectory(elem);
                setCurrentPath(elem.path);
              }}
              className="h-30 w-35 my-2 px-3 py-0.5 flex justify-center items-center cursor-pointer select-none rounded transition hover:bg-[#141313] active:bg-[#000000]"
            >
              {elem.type === "directory"
                ? elem.name + " /"
                : elem.name + elem.extension}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Main;
