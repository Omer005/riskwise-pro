import { useDispatch } from "react-redux";
import { setwalletprofilermenuitems } from "../../../../../store/slices/wallet";

const data = [9.26, 11.03];

const StateBar = () => {
  const dispatch = useDispatch();

  const token = data[0];
  const NFTs = data[1];

  const lengthToken = (data[0] / (data[0] + data[1])) * 100;

  const viewMore = () => {
    dispatch(setwalletprofilermenuitems(3));
  };

  return (
    <div className="space-y-[2px]">
      <div className="flex justify-between items-baseline">
        <span className="text-md text-white">Trade Summary</span>
        <span
          className="text-[12px] text-[#9f9fa8] cursor-pointer"
          onClick={viewMore}
        >
          View More
        </span>
      </div>
      <div className="flex w-full">
        <div
          className="h-1 bg-gradient-to-r from-yellow-500 via-yellow-500 to-[#142028] rounded-full"
          style={{ width: `${lengthToken}%` }}
        ></div>
        <div
          className="h-1 bg-gradient-to-l from-red-500 via-red-500 to-[#142028] rounded-full"
          style={{ width: `${100 - lengthToken}%` }}
        ></div>
      </div>
      <div className="flex justify-between items-baseline">
        <div className="text-[12px] text-green-500 whitespace-nowrap">
          {token + "M ₳"}
        </div>
        <div className="text-[12px] text-red-500 whitespace-nowrap">
          {NFTs + "M ₳"}
        </div>
      </div>
    </div>
  );
};

export default StateBar;
