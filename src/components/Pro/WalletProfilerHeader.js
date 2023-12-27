import { useDispatch, useSelector } from "react-redux";
import DropDownMenu from "./DropDownMenu";
import { setwalletprofilermenuitems } from "../../store/slices/wallet";

const WalletProfilerHeader = (props) => {
  const { walletprofilermenuitems } = useSelector((state) => state.wallet);
  const dispatch = useDispatch();

  const handleItem = (_idx) => {
    dispatch(setwalletprofilermenuitems(_idx));
  };

  return (
    <div className="flex w-full h-14 lg:gap-6 gap-4 md:mb-10 mb-1 px-1 py-3">
      <span className="flex items-center h-full bg-gradient-to-r from-yellow-200 to-yellow-400 text-sm font-semibold rounded-xl px-4 py-2">
        {props.text}
      </span>
      <DropDownMenu menuitems={walletprofilermenuitems} type="walletprofiler" />
      <div className="lg:flex justify-center items-center bg-[#142028] rounded-xl xl:gap-10 lg:gap-5 gap-3 hidden">
        {walletprofilermenuitems.map((item, idx) => (
          <span
            key={idx}
            onClick={() => handleItem(idx)}
            className={`duration-300 cursor-pointer px-4 hover:text-[#fff] text-[#939393] text-sm ${
              item.active
                ? "flex items-center h-full rounded-xl bg-[#3a4956] text-[#fff]"
                : ""
            } `}
          >
            {item.value}
          </span>
        ))}
      </div>
    </div>
  );
};

export default WalletProfilerHeader;
