import { useState, useEffect, useRef } from "react";
import PreviewComponent from "./PreviewComponent";
import CameraComponent from "./CameraComponent";

const Camera = () => {
  const [isPreview, setIsPreview] = useState(false);
  const [photo, setPhoto] = useState([]);

  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const streamRef = useRef(null);

  useEffect(() => {
    const getStream = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });

        streamRef.current = stream;
        videoRef.current.srcObject = stream;

        await videoRef.current.play();
      } catch (err) {
        console.error("Camera error:", err);
      }
    };

    getStream();

    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => {
          track.stop();
        });

        streamRef.current = null;
      }

      if (videoRef.current) {
        videoRef.current.srcObject = null;
      }
    };
  }, [isPreview]);

  const takePicture = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const ctx = canvas.getContext("2d");

    ctx.drawImage(video, 0, 0);

    canvas.toBlob((blob) => {
      if (!blob) return;
      setPhoto((prev) => [...prev, blob]);
    }, "image/jpeg");
  };

  return (
    <div className="h-full w-full bg-orange-300 text-[#242222] flex flex-col overflow-hidden">
      <div className="h-[calc(100%-4rem)] w-full">
        <div className="h-10 shrink-0 w-full px-5 pt-2">
          <div className="h-full flex items-center gap-3 text-xl">
            <button
              onClick={() => setIsPreview(false)}
              className={`h-full px-4 rounded-t-md cursor-pointer transition ${
                !isPreview
                  ? "bg-orange-500"
                  : "bg-orange-400 hover:bg-orange-500"
              }`}
            >
              Camera
            </button>

            <button
              onClick={() => setIsPreview(true)}
              className={`h-full px-4 rounded-t-md cursor-pointer transition ${
                isPreview
                  ? "bg-orange-500"
                  : "bg-orange-400 hover:bg-orange-500"
              }`}
            >
              Preview
            </button>
          </div>
        </div>

        <div className="flex-1 min-h-0 w-full px-5">
          {!isPreview ? (
            <CameraComponent videoRef={videoRef} canvasRef={canvasRef} />
          ) : (
            <PreviewComponent photo={photo} />
          )}
        </div>
      </div>
      <div className="h-16 shrink-0 w-full flex justify-center items-center">
        <button
          onClick={takePicture}
          className="px-5 py-2 text-xl bg-orange-500 rounded
          cursor-pointer hover:scale-105 hover:bg-[#fb6746]
          active:scale-95 active:bg-[#ff5731] transition"
        >
          Snap
        </button>
      </div>
    </div>
  );
};

export default Camera;
