import CopyToken from "../../overview/sideBar/CopyToken";
import Liquid from "../../overview/sideBar/Liquid";
import StateBar from "./StateBar";
import FirstFounded from "./FirstFounded";

const TopSection = () => {
  return (
    <div className="">
      <div className="md:flex md:justify-between md:items-center hidden">
        <div className="space-y-2">
          <CopyToken />
          <Liquid />
        </div>
        <StateBar />
        <FirstFounded />
      </div>
      <div className="md:hidden w-full h-full space-y-2 p-2 bg-[#142028] rounded-2xl">
        <CopyToken />
        <div className="flex justify-between rounded-2xl py-2 px-4 bg-[#0b1217]">
          <Liquid />
          <div className="flex justify-center items-center w-1 lg:hidden">
            <div className="w-full h-3/5 bg-[#142028] rounded-full"></div>
          </div>
          <div className="flex justify-start items-center w-[30%]">
            <FirstFounded />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
