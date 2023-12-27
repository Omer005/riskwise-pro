import { useState } from "react";

const DropDownMenu = (props) => {
  const [viewCollection, setViewCollection] = useState(props.menuitems);

  return (
    <div className="">
      <ul className="absolute z-50 rounded-xl shadow-lg bg-[rgba(92,94,105,.3)] backdrop-blur-[10px] focus:outline-none mt-2 left-0 right-0 overflow-x-hidden max-h-52 dropdownScrollbar">
        {viewCollection.map((item, idx) => (
          <li
            key={idx}
            onClick={() => {
              props.chooseItem(item);
            }}
            className="block border-[#555555] border-opacity-30 transition-all duration-300 transform hover:bg-[#3a4956]  hover:opacity-70 px-3 py-3 cursor-pointer "
          >
            <span className="flex items-center space-x-2 text-xs text-[#c1c2c2] hover:text-white duration-300">
              <span className="w-6">
                <img src={item.src} className="rounded-full" />
              </span>
              <span className="">{item.value}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropDownMenu;
