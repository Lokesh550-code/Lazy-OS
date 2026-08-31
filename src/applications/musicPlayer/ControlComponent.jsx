import { Play } from "lucide-react";
import { Pause } from "lucide-react";

const ControlComponent = ({
  currentlyPlaying,
  isPlaying,
  setIsPlaying,
  musicPlayerRef,
  currentTime,
  setCurrentTime,
}) => {
  const min = Math.floor(currentTime / 60);
  const sec = Math.floor(currentTime % 60);
  return (
    <div className="h-[15%] w-full flex gap-3 px-3">
      <audio
        ref={musicPlayerRef}
        autoPlay
        src={currentlyPlaying?.src || null}
      />
      <div className="h-full w-[10%] flex justify-center items-center">
        <div
          onClick={() => {
            if (isPlaying) {
              setIsPlaying(false);
              musicPlayerRef.current.pause();
            } else {
              setIsPlaying(true);
              musicPlayerRef.current.play();
            }
          }}
          className="h-[55%] w-12 flex justify-center items-center rounded cursor-pointer hover:bg-[#494949] active:bg-[#212121] transition"
        >
          {isPlaying ? <Pause /> : <Play />}
        </div>
      </div>
      <div className="h-full w-[80%] flex items-center gap-4">
        <p className="select-none">
          {" "}
          {`${min}:${sec.toString().padStart(2, "0")}`} /
          {currentlyPlaying?.duration || "0:0"}
        </p>
        <input
          onChange={(e) => {
            musicPlayerRef.current.currentTime = Number(e.target.value);
            setCurrentTime(Number(e.target.value));
          }}
          className="music-slider"
          type="range"
          value={currentTime || 0}
          min={0}
          max={currentlyPlaying?.duration}
        />
      </div>
    </div>
  );
};

export default ControlComponent;
