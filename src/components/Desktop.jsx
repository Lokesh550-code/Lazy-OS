import Clock from "../clock/Clock";
import url from "../wallpapers/wallpaper1.jpg";
const Desktop = () => {
  return (
    <div
      className="h-screen w-screen bg-[#242222] text-[#f6e7d9] font-ui p-1"
      style={{
        backgroundImage: `url(${url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
        <Clock />
      {/* <h1 className="text-2xl select-none">Lazy OS</h1> */}
    </div>
  );
};

export default Desktop;
