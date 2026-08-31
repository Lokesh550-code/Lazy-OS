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
    <div className="h-full w-full bg-[#242222] text-[#f6e7d9] font-ui">
      <div className="h-10 w-full flex gap-4 items-end px-3">
        <button onClick={() => {setIsPreview(false)}} className="text-xl px-4 rounded-t-md cursor-pointer bg-[#c05037] hover:bg-[#bb3d20] active:bg-[#a43219] ">Lens</button>
        <button onClick={() => {setIsPreview(true)}} className="text-xl px-4 rounded-t-md cursor-pointer bg-[#c05037] hover:bg-[#bb3d20] active:bg-[#a43219]">Preview</button>
      </div>
      <div className="h-[calc(100%-6.5rem)] w-full px-3">
        {!isPreview? <CameraComponent videoRef={videoRef} canvasRef={canvasRef} />: <PreviewComponent photo={photo} />}
      </div>
      <div className="h-16 w-full flex justify-center items-center">
        <button onClick={takePicture} className="px-4 py-2 text-xl rounded cursor-pointer bg-[#c05037] hover:bg-[#bb3d20] active:bg-[#a43219]">
          Snap
        </button>
      </div>
    </div>
  );
};

export default Camera;
