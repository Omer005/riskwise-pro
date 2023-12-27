import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  sethotwalletmenuitems,
  setwalletprofilermenuitems,
} from "../../store/slices/wallet";
import * as SVG from "../../common/Icons";
const DropDownMenu = (props) => {
  const [dispValue, setDispValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    props.menuitems.map((item, idx) => {
      if (item.active) setDispValue(item.value);
      return item;
    });
  }, [props.menuitems, dispValue]);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const dispatch = useDispatch();

  const handleItem = (_idx) => {
    if (props.type === "hotwallets") {
      dispatch(sethotwalletmenuitems(_idx));
    } else if (props.type === "walletprofiler") {
      dispatch(setwalletprofilermenuitems(_idx));
    }
    props.menuitems.map((item, idx) => {
      if (_idx === idx) setDispValue(item.value);
      return item;
    });
  };
  return (
    <div className="relative inline-block lg:hidden z-50" onClick={toggleMenu}>
      <div className="flex items-center justify-center h-full bg-[#142028] rounded-lg pl-4 pr-2 gap-2">
        <button className="sm:text-sm text-xs font-medium text-[#9f9fa8] focus:outline-none inline-block text-ellipsis overflow-hidden whitespace-nowrap">
          {dispValue}
        </button>
        <div className="flex items-center justify-center w-4 h-5 bg-[#142028]">
          {isOpen ? <SVG.Up /> : <SVG.Down />}
        </div>
      </div>
      {isOpen && (
        <ul className="absolute rounded-xl shadow-lg bg-[#142028] focus:outline-none mt-1 left-0 right-0 overflow-x-hidden overflow-y-hidden">
          {props.menuitems.map((item, idx) => (
            <li
              key={idx}
              onClick={() => handleItem(idx)}
              className="block border-b-[1px] border-[#555555] border-opacity-30 hover:bg-[#3a4956] px-3 py-1 cursor-pointer "
            >
              <span className="text-xs text-[#c1c2c2] hover:text-white duration-300 hover:scale-110">
                {item.value}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropDownMenu;
