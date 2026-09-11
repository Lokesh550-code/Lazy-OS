import { useState } from "react";
import { root } from "../../vfs/vfs";
import Sidebar from "./Sidebar";
import Main from "./Main";

const Files = () => {
  const [currentDirectory, setCurrentDirectory] = useState(root);
  const [directoryHistory, setDirectoryHistory] = useState([currentDirectory]);
  const [historyIndex, setHistoryIndex] = useState(0);
  const [currentPath, setCurrentPath] = useState(root.path);
  const changeDirectory = (directory) => {
    setDirectoryHistory((prev) => [...prev, directory]);
    setCurrentDirectory(directory);
    setCurrentPath(directory.path);
    setHistoryIndex((prev) => prev = 1);
  };

  const handleBack = () => {
    if (historyIndex > 0) {
      setHistoryIndex((prev) => prev - 1);
      setCurrentDirectory(directoryHistory[historyIndex - 1]);
      setCurrentPath(directoryHistory[historyIndex - 1].path);
    }
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
        directoryHistory={directoryHistory}
        handleBack={handleBack}
      />
    </div>
  );
};

export default Files;
