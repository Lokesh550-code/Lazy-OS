import { useState } from "react";
import { calculate } from "../../utils/calculator";
import { Delete } from "lucide-react";

const Calculator = () => {
  const [firstValue, setFirstValue] = useState("");
  const [secondValue, setSecondValue] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");

  return (
    <div className="h-full w-full bg-orange-300 px-5 pt-2 flex flex-col gap-3">
      <div className="h-12 w-full px-8 text-xl bg-[#242222] text-[text-[#f6e7d9]] border-2 border-orange-400 flex justify-end items-center">
        <h1>
          {firstValue} {operator} {secondValue} {result ? `= ${result}` : ""}
        </h1>
      </div>
      <div className="h-[85%] w-full flex justify-center items-start flex-wrap gap-0.5">
        <div
          onClick={() => {
            if (operator !== "") {
              setSecondValue((prev) => prev + "9");
            } else {
              setFirstValue((prev) => prev + "9");
            }
          }}
          className="h-[19%] w-[24%] text-xl text-[#242222] hover:bg-orange-500 flex justify-center items-center cursor-pointer border-2 border-orange-600 bg-orange-400 transition"
        >
          9
        </div>
        <div
          onClick={() => {
            if (operator !== "") {
              setSecondValue((prev) => prev + "8");
            } else {
              setFirstValue((prev) => prev + "8");
            }
          }}
          className="h-[19%] w-[24%] text-xl text-[#242222] hover:bg-orange-500 flex justify-center items-center cursor-pointer border-2 border-orange-600 bg-orange-400 transition"
        >
          8
        </div>
        <div
          onClick={() => {
            if (operator !== "") {
              setSecondValue((prev) => prev + "7");
            } else {
              setFirstValue((prev) => prev + "7");
            }
          }}
          className="h-[19%] w-[24%] text-xl text-[#242222] hover:bg-orange-500 flex justify-center items-center cursor-pointer border-2 border-orange-600 bg-orange-400 transition"
        >
          7
        </div>
        <div
          onClick={() => {
            setOperator("/");
          }}
          className="h-[19%] w-[24%] text-xl text-[#242222] hover:bg-orange-500 flex justify-center items-center cursor-pointer border-2 border-orange-600 bg-orange-400 transition"
        >
          /
        </div>
        <div
          onClick={() => {
            if (operator !== "") {
              setSecondValue((prev) => prev + "6");
            } else {
              setFirstValue((prev) => prev + "6");
            }
          }}
          className="h-[19%] w-[24%] text-xl text-[#242222] hover:bg-orange-500 flex justify-center items-center cursor-pointer border-2 border-orange-600 bg-orange-400 transition"
        >
          6
        </div>
        <div
          onClick={() => {
            if (operator !== "") {
              setSecondValue((prev) => prev + "5");
            } else {
              setFirstValue((prev) => prev + "5");
            }
          }}
          className="h-[19%] w-[24%] text-xl text-[#242222] hover:bg-orange-500 flex justify-center items-center cursor-pointer border-2 border-orange-600 bg-orange-400 transition"
        >
          5
        </div>
        <div
          onClick={() => {
            if (operator !== "") {
              setSecondValue((prev) => prev + "4");
            } else {
              setFirstValue((prev) => prev + "4");
            }
          }}
          className="h-[19%] w-[24%] text-xl text-[#242222] hover:bg-orange-500 flex justify-center items-center cursor-pointer border-2 border-orange-600 bg-orange-400 transition"
        >
          4
        </div>
        <div
          onClick={() => {
            setOperator("*");
          }}
          className="h-[19%] w-[24%] text-xl text-[#242222] hover:bg-orange-500 flex justify-center items-center cursor-pointer border-2 border-orange-600 bg-orange-400 transition"
        >
          *
        </div>
        <div
          onClick={() => {
            if (operator !== "") {
              setSecondValue((prev) => prev * 10 + 3);
            } else {
              setFirstValue((prev) => prev * 10 + 3);
            }
          }}
          className="h-[19%] w-[24%] text-xl text-[#242222] hover:bg-orange-500 flex justify-center items-center cursor-pointer border-2 border-orange-600 bg-orange-400 transition"
        >
          3
        </div>
        <div
          onClick={() => {
            if (operator !== "") {
              setSecondValue((prev) => prev + "2");
            } else {
              setFirstValue((prev) => prev + "2");
            }
          }}
          className="h-[19%] w-[24%] text-xl text-[#242222] hover:bg-orange-500 flex justify-center items-center cursor-pointer border-2 border-orange-600 bg-orange-400 transition"
        >
          2
        </div>
        <div
          onClick={() => {
            if (operator !== "") {
              setSecondValue((prev) => prev + "1");
            } else {
              setFirstValue((prev) => prev + "1");
            }
          }}
          className="h-[19%] w-[24%] text-xl text-[#242222] hover:bg-orange-500 flex justify-center items-center cursor-pointer border-2 border-orange-600 bg-orange-400 transition"
        >
          1
        </div>
        <div
          onClick={() => {
            setOperator("-");
          }}
          className="h-[19%] w-[24%] text-xl text-[#242222] hover:bg-orange-500 flex justify-center items-center cursor-pointer border-2 border-orange-600 bg-orange-400 transition"
        >
          -
        </div>
        <div
          onClick={() => {
            if (operator !== "") {
              setSecondValue((prev) => prev + "0");
            } else {
              setFirstValue((prev) => prev + "0");
            }
          }}
          className="h-[19%] w-[24%] text-xl text-[#242222] hover:bg-orange-500 flex justify-center items-center cursor-pointer border-2 border-orange-600 bg-orange-400 transition"
        >
          0
        </div>
        <div
          onClick={() => {
            if (operator !== "") {
              setSecondValue((prev) => prev + ".");
            } else {
              setFirstValue((prev) => prev + ".");
            }
          }}
          className="h-[19%] w-[24%] text-xl text-[#242222] hover:bg-orange-500 flex justify-center items-center cursor-pointer border-2 border-orange-600 bg-orange-400 transition"
        >
          .
        </div>
        <div
          onClick={() => {
            const res = calculate(firstValue, secondValue, operator);
            setResult(res);
          }}
          className="h-[19%] w-[24%] text-xl text-[#242222] hover:bg-orange-500 flex justify-center items-center cursor-pointer border-2 border-orange-600 bg-orange-400 transition"
        >
          =
        </div>
        <div
          onClick={() => {
            setOperator("+");
          }}
          className="h-[19%] w-[24%] text-xl text-[#242222] hover:bg-orange-500 flex justify-center items-center cursor-pointer border-2 border-orange-600 bg-orange-400 transition"
        >
          +
        </div>
        <div
          onClick={() => {
            setFirstValue("");
            setSecondValue("");
            setOperator("");
            setResult("");
          }}
          className="h-[19%] w-[24%] text-xl text-[#242222] hover:bg-orange-500 flex justify-center items-center cursor-pointer border-2 border-orange-600 bg-orange-400 transition"
        >
          C
        </div>
        <div
          onClick={() => {
            if (secondValue !== "") {
              setResult("");
              setSecondValue((prev) => prev.slice(0, -1));
            } else if (operator !== "") {
              setOperator("");
            } else if (firstValue !== "") {
              setFirstValue((prev) => prev.slice(0, -1));
            }
          }}
          className="h-[19%] w-[24%] text-xl text-[#242222] hover:bg-orange-500 flex justify-center items-center cursor-pointer border-2 border-orange-600 bg-orange-400 transition"
        >
          <Delete size={22} />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
