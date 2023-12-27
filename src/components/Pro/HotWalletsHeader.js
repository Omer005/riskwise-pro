import { useDispatch, useSelector } from "react-redux";
import DropDownMenu from "./DropDownMenu";
import { setIsDollar, sethotwalletmenuitems } from "../../store/slices/wallet";

const HotWalletsHeader = (props) => {
  const { isDollar, hotwalletmenuitems } = useSelector((state) => state.wallet);
  const dispatch = useDispatch();

  const handleItem = (_idx) => {
    dispatch(sethotwalletmenuitems(_idx));
  };
  return (
    <div className="flex w-full h-14 lg:gap-6 gap-2 md:mb-10 mb-1 px-1 py-3">

      <span className="flex items-center h-full bg-gradient-to-r from-yellow-200 to-yellow-400 sm:text-sm text-xs font-semibold rounded-xl px-1 py-2 truncate">
        {props.text}
      </span>
      <DropDownMenu menuitems={hotwalletmenuitems} type="hotwallets" />
      <div className="lg:flex justify-center items-center bg-[#142028] rounded-xl xl:gap-10 lg:gap-8 gap-3 xl:text-sm text-xs hidden">
        {hotwalletmenuitems.map((item, idx) => (
          <span
            key={idx}
            onClick={() => handleItem(idx)}
            className={`flex items-center cursor-pointer px-4 hover:bg-[#3a4956] hover:rounded-lg h-full hover:text-[#fff] sm:text-sm text-xs text-[#939393] 
              truncate ${
              item.active ? "text-[#fff] rounded-lg bg-[#3a4956]" : ""
            } `}
          >
            {item.value}
          </span>
        ))}
      </div>
      <div className="flex grow justify-end items-center py-[2px]">
        <div
          className={`flex justify-center items-center h-full rounded-2xl relative ${
            isDollar ? "bg-[#0B5E34]" : "bg-[#1D4D8F]"
          } `}
        >
          <span
            onClick={() => dispatch(setIsDollar())}
            className="flex justify-center w-7 cursor-pointer text-[#fff]"
          >
            $
          </span>
          <span
            onClick={() => dispatch(setIsDollar())}
            className="flex justify-center w-7 cursor-pointer text-[#fff]"
          >
            ₳
          </span>
          <span
            className={`w-[22px] h-[22px] rounded-full bg-[#1A1A1A] absolute shadow-2xl shadow-slate-100 duration-300 ${
              isDollar ? "translate-x-3" : "-translate-x-3"
            }`}
            style={{ boxShadow: "rgb(26, 26, 26) 0px 0px 10px" }}
          ></span>
        </div>
      </div>
    </div>
  );
};

export default HotWalletsHeader;
