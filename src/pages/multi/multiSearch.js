import * as SVG from "../../common/Icons";
import { useState } from "react";
const MultiSearch = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState("");

  const handleChange = (event) => {
    setSearchValue(event.target.value);

    // TODO when api integration
    setSearchResult("Awesome! There is no logic here. TODO");
  };

  return (
    <div className="w-[300px]">
      <div className="flex w-full p-2 bg-[#142028] hover:bg-[#3a4956]  text-sm rounded-tr-2xl rounded-2xl">
        <input
          name="search"
          placeholder="Find tokens, collections, or search a wallet"
          className="w-full bg-transparent focus:outline-none text-white "
          value={searchValue}
          onChange={(e) => handleChange(e)}
        />
        <SVG.Search />
      </div>
    </div>
  );
};

export default MultiSearch;
