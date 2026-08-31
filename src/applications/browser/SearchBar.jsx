import { RotateCw, ChevronLeft, ChevronRight } from "lucide-react";

const SearchBar = ({ search, setSearch, setSearchResult }) => {
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="h-11 w-full px-2 flex gap-2">
      <div className="h-full flex justify-center items-center">
        <button className="text-[#f6e7d9] hover:bg-orange-400 active:bg-orange-500 px-1 py-1 rounded transition cursor-pointer">
          <ChevronLeft size={19} />
        </button>
        <button className="text-[#f6e7d9] hover:bg-orange-400 active:bg-orange-500 px-1 py-1 rounded transition cursor-pointer">
          <ChevronRight size={19} />
        </button>
        <button
          onClick={(e) => {
            setSearchResult("");
          }}
          className="text-[#f6e7d9] hover:bg-orange-400 active:bg-orange-500 px-1 py-1 rounded transition cursor-pointer"
        >
          <RotateCw size={19} />
        </button>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSearchResult(search);
          setSearch("");
        }}
        className="h-full w-full py-1"
      >
        <input
          onChange={(e) => {
            handleChange(e);
          }}
          value={search}
          className="h-full w-full px-2 bg-[#242222] text-[#f6e7d9] font-application border-[#c05037] border-2 outline-none rounded"
          type="text"
          placeholder="Search..."
        />
      </form>
    </div>
  );
};

export default SearchBar;
