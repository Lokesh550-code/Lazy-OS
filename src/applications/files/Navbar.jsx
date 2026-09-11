import { ChevronLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";

const Navbar = ({ currentPath, setCurrentPath, handleBack }) => {
  // console.log(directoryHistory);
  return (
    <div className="h-10 w-full flex items-center justify-between">
      <input
        className="h-full w-[87%] border-2 border-[#c05037] outline-none text-md font-application px-2"
        onSubmit={(e) => {
          e.preventDefault();
        }}
        onChange={(e) => {
          setCurrentPath(e.target.value);
        }}
        value={currentPath}
        type="text"
      />
      <div className="w-[10%] h-full flex gap-1 items-center justify-center">
        <ChevronLeft
          onClick={() => {handleBack()}}
        className="h-10 w-10 rounded cursor-pointer hover:bg-[#141313] active:bg-[#000000] " />
        <ChevronRight className="h-10 w-10 rounded cursor-pointer hover:bg-[#141313] active:bg-[#000000] " />
      </div>
    </div>
  );
};

export default Navbar;
