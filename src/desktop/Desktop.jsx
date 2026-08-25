import Clock from "../clock/Clock";
import Taskbar from "../taskbar/Taskbar";
import url from "../wallpapers/wallpaper1.jpg";
import Window from "../window/Window";
import { useWindow } from "../hooks/useWindow";

const Desktop = () => {
  const { components } = useWindow();

  return (
    <div
      className="h-screen w-screen p-2 bg-[#242222] text-[#f6e7d9] font-ui flex flex-col justify-between overflow-hidden z-10"
      style={{
        backgroundImage: `url(${url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Clock />
      {components
        ? components.map((elem) => {
            return (
              <Window
                application={elem}
                key={elem.id}
              />
            );
          })
        : ""}
      <Taskbar
        components={components}
      />
    </div>
  );
};

export default Desktop;
