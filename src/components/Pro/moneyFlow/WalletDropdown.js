import { useState } from "react";

const WalletDropdown = (props) => {
  const [viewItem, setViewItem] = useState(props.menuitems);

  return (
    <div className="">
      <ul className="absolute z-50 rounded-xl shadow-lg bg-[#121218] focus:outline-none mt-1 left-0 right-0 overflow-x-hidden max-h-60 dropdownScrollbar">
        {viewItem.map((item, idx) => (
          <li
            key={idx}
            onClick={() => {
              props.chooseItem(item);
            }}
            className="block border-b-[1px] border-[#555555] border-opacity-30 hover:bg-black px-3 py-1 cursor-pointer "
          >
            <span className="text-xs text-[#c1c2c2] hover:text-white duration-300 hover:scale-110">
              {item.value}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WalletDropdown;
