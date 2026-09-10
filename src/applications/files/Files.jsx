import { useState } from "react";
import { root } from "../../vfs/vfs";
import Sidebar from "./Sidebar";
import Main from "./Main";

const Files = () => {
  const [currentDirectory, setCurrentDirectory] = useState(root);
  const [directoryHistory, setDirectoryHistory] = useState([]);
  const [currentPath, setCurrentPath] = useState(root.path);
  const changeDirectory = (directory) => {
    setDirectoryHistory((prev) => [...prev, directory]);
    setCurrentDirectory(directory);
  };

  return (
    <div className="h-full w-full flex bg-[#242222] text-[#f6e7d9]">
      <Sidebar
        currentDirectory={currentDirectory}
        changeDirectory={changeDirectory}
        currentPath={currentPath}
        setCurrentPath={setCurrentPath}
      />
      <Main
        currentDirectory={currentDirectory}
        changeDirectory={changeDirectory}
        currentPath={currentPath}
        setCurrentPath={setCurrentPath}
      />
    </div>
  );
};

export default Files;
