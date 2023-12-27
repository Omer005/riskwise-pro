import { useState, useEffect } from "react";

import * as SVG from "../common/Icons";

const HeaderSearch = () => {
  const [searchTarget, setSearchTarget] = useState("All");
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    document
      .getElementById("searchTarget")
      .addEventListener("click", selectTarget);
  }, [clicked]);

  const selectTarget = () => {
    setClicked(!clicked);
  };

  return (
    <div id="search" className="absolute right-48 top-6">
      <div className="relative flex space-x-1 items-center">
        <div className="flex justify-center items-center">
          <div
            id="searchTarget"
            className="flex justify-center items-center bg-[#121218] w-24 h-9 cursor-pointer"
            style={{
              borderTopLeftRadius: "15px",
              borderBottomLeftRadius: "15px"
            }}
          >
            All{clicked ? "▴" : "▾"}
          </div>
        </div>
        <input
          type="search"
          placeholder="Find tokens, collections, or search a wallet"
          className="focus:outline-none bg-[#121218] py-2 pl-2 pr-4  text-sm w-[450px]"
          style={{
            borderTopRightRadius: "15px",
            borderBottomRightRadius: "15px"
          }}
        ></input>
        <div className="absolute right-2 mx-2 bg-[#121218]">
          <SVG.Search />
        </div>
      </div>
    </div>
  );
};

export default HeaderSearch;

// ▾ ▴
