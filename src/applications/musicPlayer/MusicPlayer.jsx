import { useState } from "react";
import SongComponent from "./SongComponent";
import { useRef } from "react";
import { musicRegistery } from "./MusicRegistry";

const MusicPlayer = () => {
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);
  const songList = useRef(musicRegistery);

  console.log(currentlyPlaying);
  return (
    <div className="h-full w-full flex bg-[#242222] text-[#f6e7d9] font-ui">
      <SongComponent
        songList={songList}
        setCurrentlyPlaying={setCurrentlyPlaying}
      />
      <div className="h-full w-[70%]">
        <div className="h-[85%] w-full p-10 flex flex-col justify-center items-center gap-3 border-b-2">
          <img className="h-70 w-70 border" src={currentlyPlaying ? currentlyPlaying.cover : "" } alt="Cover art" />
          <h1>{currentlyPlaying? currentlyPlaying.title : "Title"}</h1>
          <p>{currentlyPlaying? currentlyPlaying.author : "Artist"}</p>
        </div>
        <div className="h-[15%] w-full">
          <audio controls src={currentlyPlaying? currentlyPlaying.src: ""} />
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
