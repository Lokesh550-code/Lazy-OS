import SongCard from "./SongCard";

const SongComponent = ({ songList, setCurrentlyPlaying, setIsPlaying }) => {
  return (
    <div className="h-full w-[30%] px-3 py-2 flex flex-col gap-2 border-[#f6e7d9] border-r">
      <h1 className="ml-3 select-none">Songs</h1>
      {songList.current.map((song, key) => {
        return (
          <SongCard
            song={song}
            key={key}
            setCurrentlyPlaying={setCurrentlyPlaying}
            setIsPlaying={setIsPlaying}
          />
        );
      })}
    </div>
  );
};

export default SongComponent;
