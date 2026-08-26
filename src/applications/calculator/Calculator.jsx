import { useState } from "react";
import { calculate } from "../../utils/calculator";
import { useEffect } from "react";
import Buttons from "./Buttons";

const Calculator = () => {
  const [firstValue, setFirstValue] = useState("");
  const [secondValue, setSecondValue] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");

  const handleNumber = (number) => {
    if (operator !== "") {
      setSecondValue((prev) => prev + number);
    } else {
      setFirstValue((prev) => prev + number);
    }
  };

  const handleOperator = (operatorValue) => {
    setOperator(operatorValue);
  };

  const handleCalculate = () => {
    const res = calculate(firstValue, secondValue, operator);
    setResult(res);
  };

  const handleBackspace = () => {
    if (secondValue !== "") {
      setResult("");
      setSecondValue((prev) => prev.slice(0, -1));
    } else if (operator !== "") {
      setOperator("");
    } else if (firstValue !== "") {
      setFirstValue((prev) => prev.slice(0, -1));
    }
  };

  const handleClear = () => {
    setFirstValue("");
    setSecondValue("");
    setOperator("");
    setResult("");
  };

  const buttons = [
    { key: "9", action: handleNumber },
    { key: "8", action: handleNumber },
    { key: "7", action: handleNumber },
    { key: "/", action: handleOperator },

    { key: "6", action: handleNumber },
    { key: "5", action: handleNumber },
    { key: "4", action: handleNumber },
    { key: "*", action: handleOperator },

    { key: "3", action: handleNumber },
    { key: "2", action: handleNumber },
    { key: "1", action: handleNumber },
    { key: "-", action: handleOperator },

    { key: "0", action: handleNumber },
    { key: ".", action: handleNumber },
    { key: "=", action: handleCalculate },
    { key: "+", action: handleOperator },

    { key: "C", action: handleClear },
    { key: "backspace", action: handleBackspace },
  ];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.key >= "0" && e.key <= "9") || e.key === ".") {
        handleNumber(e.key);
      }

      if (["+", "-", "*", "/"].includes(e.key)) {
        handleOperator(e.key);
      }

      if (e.key === "=" || e.key.toLowerCase() === "enter") {
        handleCalculate();
      }

      if (e.key.toLowerCase() === "backspace") {
        handleBackspace();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [firstValue, secondValue, operator, result]);

  return (
    <div className="h-full w-full bg-orange-300 px-5 pt-2 flex flex-col gap-3">
      <div className="h-12 w-full px-8 text-xl bg-[#242222] text-[text-[#f6e7d9]] border-2 border-orange-400 flex justify-end items-center">
        <h1>
          {firstValue} {operator} {secondValue} {result ? `= ${result}` : ""}
        </h1>
      </div>
      <div className="h-[85%] w-full flex justify-center items-start flex-wrap gap-0.5">
        {buttons.map((elem, id) => {
          return <Buttons elem={elem} key={id} />;
        })}
      </div>
    </div>
  );
};

export default Calculator;
