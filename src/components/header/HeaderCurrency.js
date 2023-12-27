import * as SVG from "../../common/Icons";

import { ADA } from "../../common/IMG/Images";
import { EUR } from "../../common/IMG/Images";
import { USD } from "../../common/IMG/Images";
import { BTC } from "../../common/IMG/Images";
import { ETH } from "../../common/IMG/Images";

import { useState } from "react";

const data = [
  { id: 0, value: "ADA", imgurl: ADA, active: true },
  { id: 1, value: "EUR", imgurl: EUR, active: false },
  { id: 2, value: "USD", imgurl: USD, active: false },
  { id: 3, value: "BTC", imgurl: BTC, active: false },
  { id: 4, value: "ETH", imgurl: ETH, active: false },
];

const HeaderCurrency = () => {
  const [menuItems, setMenuItems] = useState(data);
  const [dispValue, setDispValue] = useState(data[0]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleItem = (_idx) => {
    const newMenuItems = menuItems.map((item, idx) => {
      if (_idx === idx) {
        item.active = true;
        setDispValue(item);
      } else {
        item.active = false;
      }
      return item;
    });

    setMenuItems(newMenuItems);
  };

  return (
    <div onClick={toggleMenu} className="relative cursor-pointer">
      <div className="flex justify-center items-center w-24 max-w-[110px] h-9 bg-[#142028] rounded-xl gap-1">
        <img alt="currency" src={dispValue.imgurl} className="w-5 h-5"></img>
        <button className="text-sm text-white font-semibold focus:outline-none">
          {dispValue.value}
        </button>
        <div className="flex items-center justify-center w-4 h-4">
          {isOpen ? <SVG.Up /> : <SVG.Down />}
        </div>
      </div>
      {isOpen && (
        <ul className="bg-[#142028] focus:outline-none mt-1 absolute rounded-xl shadow-lg left-0 right-0 overflow-x-hidden overflow-y-hidden z-50">
          {menuItems.map((item, idx) => (
            <li
              key={idx}
              onClick={() => handleItem(idx)}
              style={{ boxShadow: "0 1px 0 #030303, 0 2px 0 #262626" }}
              className="flex items-center hover:bg-[#3a4956] p-2 cursor-pointer gap-1"
            >
              <img alt="currency" src={item.imgurl} className="w-5 h-5"></img>
              <span className="text-sm font-semibold text-white duration-300">
                {item.value}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default HeaderCurrency;
