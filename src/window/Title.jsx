import { Diamond } from "lucide-react";

const Title = ({
  application,
  removeComponent,
  handlePointerDown,
  handlePointerMove,
  handlePointerUp,
}) => {
  return (
    <div className="w-full h-10 bg-[#141313] text-[#f6e7d9] flex justify-between items-center select-none">
      <div
        onPointerDown={(event) => {
          handlePointerDown(event);
        }}
        onPointerMove={(event) => {
          handlePointerMove(event);
        }}
        onPointerUp={(event) => {
          handlePointerUp(event);
        }}
        className="h-full w-full pl-5 flex justify-start items-center"
      >
        <h1>{application.applicationName}</h1>
      </div>
      <div className="flex">
        <button className="mr-2 h-7 w-7 text-2xl flex justify-center items-center hover:text-[#933E2A] hover:bg-[#2d2d2d] cursor-pointer rounded transition ">
          -
        </button>
        <button className="mr-2 h-7 w-7 text-2xl flex justify-center items-center hover:text-[#933E2A] hover:bg-[#2d2d2d] cursor-pointer rounded transition ">
          <Diamond size={16} />
        </button>
        <button
          onClick={() => {
            removeComponent(application.id);
          }}
          className="mr-2 h-7 w-7 text-2xl flex justify-center items-center hover:text-[#933E2A] hover:bg-[#2d2d2d] cursor-pointer rounded transition "
        >
          x
        </button>
      </div>
    </div>
  );
};

export default Title;
