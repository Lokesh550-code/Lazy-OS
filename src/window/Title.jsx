import { Diamond, Square, Minus, X } from "lucide-react";
import { useWindow } from "../hooks/useWindow";

const Title = ({
  application,
}) => {
  const {
    removeComponent,
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
    handleMinimize,
    handleMaximize,
  } = useWindow();
  return (
    <div className="w-full h-10 bg-[#141313] text-[#f6e7d9] flex justify-between items-center select-none">
      <div
        onPointerDown={(event) => {
          handlePointerDown(event, application.windowId);
        }}
        onPointerMove={(event) => {
          handlePointerMove(event, application.windowId);
        }}
        onPointerUp={(event) => {
          handlePointerUp(event);
        }}
        className="h-full w-full pl-5 flex justify-start items-center"
      >
        <h1>{application.applicationName}</h1>
      </div>
      <div className="flex">
        <button
          onClick={() => {
            handleMinimize(application.windowId);
          }}
          className="mr-2 h-7 w-7 flex justify-center items-center hover:text-[#933E2A] hover:bg-[#2d2d2d] cursor-pointer rounded transition "
        >
          <Minus size={14} />
        </button>
        <button
          onClick={() => {
            handleMaximize(application.windowId, application.applicationId);
          }}
          className="mr-2 h-7 w-7 flex justify-center items-center hover:text-[#933E2A] hover:bg-[#2d2d2d] cursor-pointer rounded transition "
        >
          {!application.maximized ? (
            <Square size={14} />
          ) : (
            <Diamond size={14} />
          )}
        </button>
        <button
          onClick={() => {
            removeComponent(application.windowId);
          }}
          className="mr-2 h-7 w-7 flex justify-center items-center hover:text-[#933E2A] hover:bg-[#2d2d2d] cursor-pointer rounded transition "
        >
          <X size={14} />
        </button>
      </div>
    </div>
  );
};

export default Title;
