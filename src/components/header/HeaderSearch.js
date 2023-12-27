import { useState } from "react";

import HeaderCurrency from "./HeaderCurrency";
import * as SVG from "../../common/Icons";

const SearchMenuItems = [
  { id: 0, value: "All", active: true },
  { id: 1, value: "Tokens", active: false },
  { id: 2, value: "Collections", active: false },
  { id: 3, value: "Wallet", active: false },
];

const HeaderSearch = () => {
  const [menuItems, setMenuItems] = useState(SearchMenuItems);
  const [dispValue, setDispValue] = useState(menuItems[0].value);
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState("");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleItem = (_idx, event) => {
    const newMenuItems = menuItems.map((item, idx) => {
      if (_idx === idx) {
        item.active = true;
        if (event.type === "mousedown") setDispValue(item.value);
      } else {
        item.active = false;
      }
      return item;
    });

    setMenuItems(newMenuItems);
  };

  const handleChange = (event) => {
    setSearchValue(event.target.value);

    // TODO when api integration
    setSearchResult("Awesome! There is no logic here. TODO");
  };

  const iconView = (_idx, isactive) => {
    switch (_idx) {
      case 0:
        return <SVG.Search active={isactive} />;
      case 1:
        return <SVG.Token active={isactive} />;
      case 2:
        return <SVG.Collection active={isactive} />;
      case 3:
        return <SVG.Wallet active={isactive} />;
      default:
        return <></>;
    }
  };

  return (
    <div className="relative flex gap-2">
      <div className="flex items-center w-full min-w-[420px] gap-1">
        <div onClick={toggleMenu}>
          <div className="flex justify-center items-center bg-[#142028] w-28 h-9 cursor-pointer text-[#fff] font-semibold rounded-l-2xl rounded-bl-2xl">
            <button className="text-sm text-[#9f9fa8] focus:outline-none">
              {dispValue}
            </button>
            <div className="flex items-center justify-center w-4 h-5">
              {isOpen ? "▴" : "▾"}
            </div>
          </div>
          {isOpen && (
            <ul className="flex flex-col gap-3 bg-[#142028] focus:outline-none mt-1 p-4 absolute rounded-xl shadow-lg left-0 z-10">
              {menuItems.map((item, idx) => (
                <li
                  key={idx}
                  className="flex cursor-pointer gap-3"
                  onMouseEnter={(e) => handleItem(idx, e)}
                  onMouseDown={(e) => handleItem(idx, e)}
                >
                  {iconView(idx, item.active)}
                  <span
                    className={`text-sm font-semibold ${
                      item.active ? "text-yellow-300" : "text-[#9f9fa8]"
                    } hover:text-yellow-300 duration-300`}
                  >
                    {item.value}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="w-full">
          <div className="flex w-full p-2 bg-[#142028] hover:bg-[#3a4956]  text-sm rounded-tr-2xl rounded-br-2xl">
            <input
              name="search"
              placeholder="Find tokens, collections, or search a wallet"
              className="w-full bg-transparent focus:outline-none text-white "
              value={searchValue}
              onChange={(e) => handleChange(e)}
            />
            <SVG.Search />
          </div>
          {searchResult && (
            <div className="absolute h-[300px] bg-[#142028] focus:outline-none mt-1 p-4 rounded-xl left-0 right-0 shadow-lg overflow-y-scroll scrollable-invisible z-50">
              <div className="text-white break-words text-center">
                {searchResult}
              </div>
            </div>
          )}
        </div>
      </div>
      <HeaderCurrency />
    </div>
  );
};

export default HeaderSearch;
