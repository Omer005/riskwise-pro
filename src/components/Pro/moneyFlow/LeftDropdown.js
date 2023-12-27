import { useState } from "react";

import * as SVG from "../../../common/Icons";

const LeftDropdown = (props) => {
  const [viewIcons, setViewIcons] = useState(props.menuitems);

  return (
    <div className="">
      <ul className="absolute z-50 rounded-xl shadow-lg bg-[#121218] focus:outline-none mt-1 left-0 overflow-x-hidden">
        {viewIcons.map((item, idx) => (
          <li
            key={idx}
            onClick={() => {
              props.chooseItem(item);
            }}
            className="block border-b-[1px] border-[#555555] border-opacity-30 transition-all duration-300 transform hover:bg-[#3a4956]  hover:opacity-70 px-3 py-1 cursor-pointer"
          >
            <div className="flex items-cneter space-x-2 hover:scale-110">
              <span className="flex justify-center w-6">{item.icon}</span>
              <span className="flex justify-start items-center text-xs whitespace-nowrap text-[#c1c2c2] hover:text-white duration-300">
                {item.value}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftDropdown;
