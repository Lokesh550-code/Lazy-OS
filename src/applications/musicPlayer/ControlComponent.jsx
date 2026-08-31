import { Play, Pause, Volume2 } from "lucide-react";
import { useState } from "react";

const ControlComponent = ({
  currentlyPlaying,
  isPlaying,
  setIsPlaying,
  musicPlayerRef,
  currentTime,
  setCurrentTime,
  volume,
  setVolume,
  duration,
  setDuration,
}) => {
  const min = Math.floor(currentTime / 60);
  const sec = Math.floor(currentTime % 60);
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="h-[15%] w-full flex gap-3 px-3">
      <audio
        ref={musicPlayerRef}
        autoPlay
        src={currentlyPlaying?.src || null}
        onTimeUpdate={(e) => {
          setCurrentTime(e.currentTarget.currentTime);
        }}
        onLoadedMetadata={(e) => {
          setDuration(e.currentTarget.duration);
          setCurrentTime(0);
        }}

        onEnded={() => {setIsPlaying(false)}}
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
        <p className="select-none w-[20%]">
          {" "}
          {`${min}:${sec.toString().padStart(2, "0")}`} /
          {currentlyPlaying?.duration || "0:0"}
        </p>
        <input
          type="range"
          min={0}
          max={duration}
          value={currentTime}
          onChange={(e) => {
            musicPlayerRef.current.currentTime = Number(e.target.value);
          }}
          className="music-slider w-[80%]"
        />
      </div>

      <div className="h-full w-[10%] flex justify-center items-center relative">
        <div
          className={`${isActive ? `absolute` : `hidden`} h-fit w-fit px-5 py-2 rounded bg-[#0b0b0b] top-[-150%]`}
        >
          <input
            onChange={(e) => {
              musicPlayerRef.current.volume = Number(e.target.value);
              setVolume(e.target.value);
            }}
            className="vertical-slider"
            type="range"
            value={volume}
            min={0}
            max={1}
            step={0.1}
          />
        </div>
        <div
          onClick={() => {
            setIsActive((prev) => !prev);
          }}
          className="h-[55%] w-12 flex justify-center items-center rounded cursor-pointer hover:bg-[#494949] active:bg-[#212121] transition"
        >
          <Volume2 />
        </div>
      </div>
    </div>
  );
};

export default ControlComponent;
