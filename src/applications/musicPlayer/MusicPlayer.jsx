import { useState, useRef, useEffect } from "react";
import { musicRegistery } from "./MusicRegistry";
import DetailComponent from "./DetailComponent";
import ControlComponent from "./ControlComponent";
import SongComponent from "./SongComponent";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);

  const songList = useRef(musicRegistery);
  const musicPlayerRef = useRef(null);

  return (
    <div className="h-full w-full flex bg-[#242222] text-[#f6e7d9] font-ui">
      <SongComponent
        songList={songList}
        setCurrentlyPlaying={setCurrentlyPlaying}
        setIsPlaying={setIsPlaying}
      />

      <div className="h-full w-[70%]">
        <DetailComponent currentlyPlaying={currentlyPlaying} />
        <ControlComponent
          musicPlayerRef={musicPlayerRef}
          currentlyPlaying={currentlyPlaying}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          currentTime={currentTime}
          setCurrentTime={setCurrentTime}
          volume={volume}
          setVolume={setVolume}
          duration={duration}
          setDuration={setDuration}
        />
      </div>
    </div>
  );
};

export default MusicPlayer;
