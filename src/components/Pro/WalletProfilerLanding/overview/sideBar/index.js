import CopyToken from "./CopyToken";
import Liquid from "./Liquid";
import ScrollBar from "./ScrollBar";
import StateBar from "./StateBar";
import TokenNFTs from "./Token_NFTs";

const SideBar = () => {
  return (
    <div className="relative lg:bg-gradient-to-b lg:from-[#142028] lg:via-[#142028] lg:to-[#0b1217] bg-[#142028] lg:w-96 w-full h-full rounded-2xl p-4">
      <CopyToken />
      <div className="lg:block flex justify-between bg-[#3a4956] m-2 p-2 rounded-2xl lg:bg-[#142028]">
        <Liquid />
        <div className="flex justify-center items-center w-1 lg:hidden">
          <div className="w-full h-3/5 bg-[#142028] rounded-full"></div>
        </div>
        <TokenNFTs />
      </div>
      <StateBar />
      <ScrollBar />
    </div>
  );
};

export default SideBar;
