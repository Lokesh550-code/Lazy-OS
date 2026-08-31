const SongCard = ({ isPlaying, song, setCurrentlyPlaying, setIsPlaying }) => {
  return (
    <div
      onClick={() => {
        setCurrentlyPlaying(song);
        setIsPlaying(true);
      }}
      className={`${isPlaying ? "bg-orange-400" : "bg-[#1f1f1f]"} h-19 w-full px-1 py-1 select-none flex gap-3 justify-between items-center cursor-pointer rounded bg-[#595959] hover:bg-[#4b4b4b] active:bg-[#1f1f1f] transition`}
    >
      <div className="flex py-2 justify-center items-center gap-2 select-none">
        <img
          className="h-full w-19  object-contain rounded"
          src={song.cover}
          alt="album art"
        />
        <div>
          <h1 className="text-md">{song.title}</h1>
          <p className="text-xs text-[#e9d9ca]">{song.author}</p>
        </div>
      </div>
      <p className=" text-sm">{song.duration}</p>
    </div>
  );
};

export default SongCard;
