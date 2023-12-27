import { useState } from "react";

import DropDownMenu from "./DropDownMenu";
import * as SVG from "../../common/Icons";

const Navbar = () => {
  const [duration, setDuration] = useState("30d");
  const [spread, setSpread] = useState(false);
  const [selected, setSelected] = useState("Token");

  const clicked = (e) => {
    setSelected(e.target.name);
  };

  const beSpread = () => {
    setSpread(!spread);
  };

  const chooseItem = (item) => {
    setDuration(item.value);
  };

  const durationList = [
    { id: 0, value: "30d" },
    { id: 1, value: "7d" },
    { id: 2, value: "90d" },
    { id: 3, value: "180d" },
    { id: 4, value: "1y" },
    { id: 5, value: "all" }
  ];

  return (
    <div className="flex items-center">
      <div className="bg-gradient-to-r from-yellow-200 to-yellow-400 px-4 py-[5px] rounded-lg mr-4">
        <span className="truncate">Market Overview</span>
      </div>
      <div className="flex justify-center items-center bg-[#142028] rounded-[10px] sm:mr-4 mr-2">
        <button
          type="button"
          name="Token"
          onFocus={clicked}
          className={`duration-500 cursor-pointer sm:px-4 px-2 py-1 lg:h-8 text-sm text-[#9f9fa8] hover:text-[#fff] mr-2 ${
            selected === "Token"
              ? "rounded-[10px] bg-[#3a4956] text-white"
              : ""
          }`}
        >
          Token
        </button>
        <button
          type="button"
          name="NFT"
          onFocus={clicked}
          className={`duration-500 cursor-pointer sm:px-4 px-2 py-1 text-sm text-[#9f9fa8] hover:text-[#fff] flex justify-center lg:h-8
          ${
            selected === "NFT" ? "rounded-[10px] bg-[#3a4956] text-white" : ""
          }`}
        >
          NFT
        </button>
      </div>
      <div
        className="relative flex items-center bg-[#142028] px-3 h-7 rounded-[10px] cursor-pointer"
        id="spread"
        onClick={beSpread}
      >
        <span onClick={beSpread} className="pr-2 text-[#9f9fa8] text-sm">
          {duration}
        </span>
        <div className="bg-black w-5 h-5 rounded-sm flex justify-center items-center">
          {spread === true ? <SVG.Up /> : <SVG.Down />}
        </div>
        <div
          className={`absolute bottom-0 left-0 z-50 ${
            spread === false ? "hidden" : "w-full"
          }`}
        >
          <DropDownMenu
            menuitems={durationList}
            chooseItem={chooseItem}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
