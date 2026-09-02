import { useState } from "react";
import { useWindow } from "../../hooks/useWindow";
import MusicPlayer from "../musicPlayer/MusicPlayer";
import Files from "../Files/Files";
import Editor from "../editor/Editor";
import Camera from "../camera/Camera";
import Calculator from "../calculator/Calculator";
import Browser from "../browser/Browser";

const Terminal = () => {
  const [history, setHistory] = useState([]);
  const [currentCommand, setCurrentCommand] = useState("");
  const { components, addComponents, removeComponent } = useWindow();

  const submitHandle = (e) => {
    e.preventDefault();
    if (currentCommand.toLowerCase() === "clear") {
      setHistory([]);
    }

    if (currentCommand.toLowerCase() === "whoami") {
      setHistory((prev) => [
        ...prev,
        { command: currentCommand, output: "Laz" },
      ]);
    }

    if (currentCommand.toLowerCase() === "about") {
      setHistory((prev) => [
        ...prev,
        {
          command: currentCommand,
          output: "A web-application trying to cosplay as an OS",
        },
      ]);
    }

    if (currentCommand.toLowerCase() === "date") {
      const now = new Date();
      setHistory((prev) => [
        ...prev,
        { command: currentCommand, output: now.toDateString() },
      ]);
    }

    if (currentCommand.split(" ")[0].toLowerCase() === "open") {
      if (currentCommand.split(" ")[1].toLowerCase() === "melody") {
        addComponents("Melody", 6, MusicPlayer);
        setHistory((prev) => [
          ...prev,
          { command: currentCommand, output: "" },
        ]);
      } else if (currentCommand.split(" ")[1].toLowerCase() === "files") {
        addComponents("Files", 5, Files);
        setHistory((prev) => [
          ...prev,
          { command: currentCommand, output: "" },
        ]);
      } else if (currentCommand.split(" ")[1].toLowerCase() === "ink") {
        addComponents("Ink", 4, Editor);
        setHistory((prev) => [
          ...prev,
          { command: currentCommand, output: "" },
        ]);
      } else if (currentCommand.split(" ")[1].toLowerCase() === "lens") {
        addComponents("Lens", 3, Camera);
        setHistory((prev) => [
          ...prev,
          { command: currentCommand, output: "" },
        ]);
      } else if (currentCommand.split(" ")[1].toLowerCase() === "calc") {
        addComponents("Calc", 2, Calculator);
        setHistory((prev) => [
          ...prev,
          { command: currentCommand, output: "" },
        ]);
      } else if (currentCommand.split(" ")[1].toLowerCase() === "crawl") {
        addComponents("Crawl", 1, Browser);
        setHistory((prev) => [
          ...prev,
          { command: currentCommand, output: "" },
        ]);
      } else {
        setHistory((prev) => [
          ...prev,
          { command: currentCommand, output: "app not found" },
        ]);
      }
    }

    if (currentCommand.split(" ")[0].toLowerCase() === "close") {
      console.log("close is working");
      let id = currentCommand.split(" ")[1];
      console.log(components.includes((elem) => elem.windowId === id));
      if (components.some((elem) => elem.windowId === id)) {
        console.log("the id is correct");
        removeComponent(id);
      }
    }

    if (currentCommand.split(" ")[0].toLowerCase() === "history") {
      let str = "";
      history.map((elem) => (str = str + elem.command + "\n "));
      setHistory((prev) => [...prev, { command: currentCommand, output: str }]);
    }

    setCurrentCommand("");
  };


  return (
    <div className="h-full w-full px-5 py-2.5">
      {history.length !== 0
        ? history.map((elem) => {
            return (
              <>
                <span className="inline">lazy@lazy-os:$ </span>
                {elem.command}
                <p className="whitespace-pre-line">{elem.output}</p>
              </>
            );
          })
        : ""}
      <form
        onSubmit={(e) => {
          submitHandle(e);
        }}
        className="inline"
      >
        <label>lazy@lazy-os:$ </label>
        <input
          className="outline-0 w-[85%]"
          autoFocus
          onChange={(e) => {
            setCurrentCommand(e.target.value);
          }}
          value={currentCommand}
          type="text"
        />
      </form>
    </div>
  );
};

export default Terminal;
