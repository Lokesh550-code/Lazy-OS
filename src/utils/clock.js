const clock = () => {
  const now = new Date();
  const time = now.toLocaleString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const date = now.toLocaleString("en-us", { day: "2-digit" });

  const monthName = now.toLocaleString("en-us", { month: "long" });

  return { time, date, monthName };
};

export default clock;
