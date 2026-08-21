import { useEffect } from "react";
import { useState } from "react";
import clock from "../utils/clock";

const Clock = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      setClockInfo(clock());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const [clockInfo, setClockInfo] = useState(null);

  return (
    <div className="w-100 mt-5 ml-5  text-[#f6e7d9]  flex flex-col gap-3 justify-center items-center select-none">
      <h1 className="text-6xl">
        {clockInfo ? clockInfo.time: "00:00"}
      </h1>
      <h2 className="text-xl">{`${clockInfo? clockInfo.date: "01"} ${clockInfo? clockInfo.monthName : "Lazy month"}`}</h2>
    </div>
  );
};

export default Clock;
