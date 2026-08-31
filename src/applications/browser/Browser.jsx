import { useState } from "react";
import SearchBar from "./SearchBar";
import mascot from "../../assets/shinchan.png";

const Browser = () => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState("");
  console.log(JSON.stringify(searchResult));
  return (
    <div className="h-full w-full bg-[#242222] text-[#f6e7d9] relative flex flex-col justify-center items-center">
      <SearchBar
        setSearch={setSearch}
        search={search}
        setSearchResult={setSearchResult}
      />
      {searchResult === "" ? (
        <div className="absolute bottom-0 right-0 select-none text-[#bcb1a6] mr-2">
          <p>Powered by: absolutely <span className="text-orange-800">nothing</span></p>
        </div>
      ) : (
        ""
      )}

      {searchResult === "" ? (
        <div className="h-full w-full text-xl text-[#f6e7d9] flex justify-center items-center select-none">
          Crawl the internet
          <br />
          search to get started
        </div>
      ) : searchResult.trim().toLowerCase() === "laz is awesome" ? (
        <div className="h-full w-full px-10 text-xl text-[#f6e7d9] flex flex-col justify-center items-center gap-3">
          Ab mai itna bhi kuch Khas nahi, hehehe.
          <img className="w-62.5" src={mascot} alt="Shinchan Blushing" />
        </div>
      ) : (
        <div className="h-full w-full px-10 text-xl text-[#f6e7d9] flex justify-center items-center">
          You really thought I would make a browser inside a browser?
        </div>
      )}
    </div>
  );
};

export default Browser;
