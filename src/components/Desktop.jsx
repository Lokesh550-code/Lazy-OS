import url from "../wallpapers/wallpaper1.jpg";
const Desktop = () => {
  return (
    <div
      className="h-screen w-screen bg-[#242222] text-[#f6e7d9] flex justify-center items-center"
      style={{
        backgroundImage: `url(${url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
        Lazy OS
    </div>
  );
};

export default Desktop;
