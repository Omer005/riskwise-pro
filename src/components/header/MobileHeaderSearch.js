import { useState } from "react";
import * as SVG from "../../common/Icons";

const MobileHeaderSearch = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState("");

  const handleChange = (event) => {
    setSearchValue(event.target.value);

    // TODO when api integration
    setSearchResult("Awesome! There is no logic here yet. TODO");
  };

  return (
    <div>
      <div
        onClick={() => setShowSearch(!showSearch)}
        className="flex items-center p-2 bg-[#142028] rounded-full"
      >
        <div className=" text-white hover:text-yellow-400 cursor-pointer">
          <SVG.Search active={true} />
        </div>
      </div>
      {showSearch && (
        <div className="fixed w-full h-[72px] z-[99999] bg-[#142028] left-0 top-0 border-b-[1px] border-opacity-20 border-gray-300">
          <div className="flex justify-between w-full h-full px-4">
            <input
              name="search"
              placeholder="Find tokens, collections, or search a wallet"
              className="w-full bg-transparent focus:outline-none text-white"
              value={searchValue}
              onChange={(e) => handleChange(e)}
            />
            <div className="flex items-center text-sm gap-2">
              <button className="rounded-2xl bg-white bg-gradient-to-r from-yellow-500 to-yellow-200 py-1 px-3">
                Search
              </button>
              <button
                onClick={() => {
                  setShowSearch(!showSearch);
                  setSearchValue("");
                }}
                className="rounded-2xl bg-white bg-gradient-to-r from-red-600 to-red-500 py-1 px-3"
              >
                Cancel
              </button>
            </div>
            {searchResult && (
              <div className="absolute h-[300px] bg-[#142028] focus:outline-none mt-14 p-4 left-0 right-0 border-t-2 border-black shadow-lg overflow-y-scroll scrollable-invisible">
                <div className="text-white break-words text-center">
                  {searchResult}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileHeaderSearch;
