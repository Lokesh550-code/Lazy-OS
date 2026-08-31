import placeHolder from "../../assets/placehoder-Music.png";

const DetailComponent = ({currentlyPlaying}) => {
  return (
    <div className="h-[85%] w-full p-10 flex flex-col justify-center items-center gap-3 border-b-2">
      <img
        className="h-70 w-70"
        src={currentlyPlaying ? currentlyPlaying.cover : placeHolder}
        alt="Cover art"
      />
      <h1>{currentlyPlaying ? currentlyPlaying.title : "Title"}</h1>
      <p>{currentlyPlaying ? currentlyPlaying.author : "Artist"}</p>
    </div>
  );
};

export default DetailComponent;
