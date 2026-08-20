import { useEffect } from "react";
import { useState } from "react";

const Clock = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const [time, setTime] = useState(null);
  return (
    <div className="h-68 w-100 mt-5 ml-5 bg-[#242222] text-[#f6e7d9] border border-[#B85C3A] flex flex-col gap-3 justify-center items-center select-none">
      <h1 className="text-6xl">
        {time ? time.toLocaleString([], {
          hour: "2-digit",
          minute: "2-digit",
        }): "00:00"}
      </h1>
      <h2 className="text-xl">{`${time? time.toLocaleString("en-us", {day: "2-digit"}): "01"} ${time? time.toLocaleString("en-us", {month: "long"}): "Lazy month"}`}</h2>
    </div>
  );
};

export default Clock;
