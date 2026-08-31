import { useState } from "react";

const Terminal = () => {
  const [history, setHistory] = useState([]);
  const [currentCommand, setCurrentCommand] = useState("");

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

    if (currentCommand.toLowerCase() === "history") {
      const now = new Date();
      setHistory((prev) => [
        ...prev,
        { command: currentCommand, output: now.toDateString() },
      ]);
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
                <p>{elem.output}</p>
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
          className="outline-0 w-[89%]"
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
