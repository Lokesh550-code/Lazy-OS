import { ChevronRight, ChevronLeft } from "lucide-react";
import { useState } from "react";

const PreviewComponent = ({ photo }) => {
  const [counter, setCounter] = useState(0);
  const counterIncrement = () => {
    if (counter < photo.length -1) {
      setCounter((prev) => prev+ 1);
    }
  };
  const counterDecrement = () => {
    if (counter > 0) {
      setCounter((prev) => prev - 1);
    }
  };
  return (
    <div className="h-full w-full flex justify-center items-center relative overflow-hidden">
      {photo.length !== 0 ? (
        <img className="h-full w-full" src={URL.createObjectURL(photo[counter])} alt="" />
      ) : (
        <p>No Images yet.</p>
      )}

      <div
        onClick={counterDecrement}
        className="h-10 w-10 text-white flex justify-center items-center cursor-pointer hover:bg-stone-900 transition absolute top-[45%] left-1 bg-stone-600 rounded-full"
      >
        <ChevronLeft />
      </div>
      <div
        onClick={counterIncrement}
        className="h-10 w-10 text-white flex justify-center items-center cursor-pointer hover:bg-stone-900 transition absolute top-[45%] right-1 bg-stone-600 rounded-full"
      >
        <ChevronRight />
      </div>
    </div>
  );
};

export default PreviewComponent;
