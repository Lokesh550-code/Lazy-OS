const CameraComponent = ({ videoRef, canvasRef }) => {
  return (
    <div className="h-full w-full flex justify-center bg-gray-800 items-center relative overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        className="h-full w-full object-contain"
      />

      <canvas
        ref={canvasRef}
        className="hidden"
      />
    </div>
  );
};

export default CameraComponent;