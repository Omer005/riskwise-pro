import Navbar from "../../components/marketing/Navbar";
import TopSection from "../../components/marketing/TopSection";
import LeftVolume from "../../components/marketing/LeftVolume";
import RightVolume from "../../components/marketing/RightVolume";
import LeftWallet from "../../components/marketing/LeftWallet";
import RightWallet from "../../components/marketing/RightWallet";
import LeftFee from "../../components/marketing/LeftFee";
import RightFee from "../../components/marketing/RightFee";
import Leaderboard from "../../components/marketing/Leaderboard";

const Markets = () => {
  return (
    <div className="sm:mr-4 mr-0 mt-4">
      <div className="mobileNav"></div>
      <Navbar />
      <TopSection />
      {/* <div className="w-full rounded-3xl my-4 p-3 space-y-4">
        <div className="xl:flex xl:justify-between">
          <LeftVolume />
          <RightVolume />
        </div>
        <div className="xl:flex xl:justify-between">
          <LeftWallet />
          <RightWallet /> 
        </div>
        <div className="xl:flex xl:justify-between">
          <LeftFee />
          <RightFee />
        </div>
        <Leaderboard />
      </div> */}
      <div className="w-full rounded-3xl my-4 p-3 space-y-6">
        <div className="xl:flex xl:justify-between xl:space-x-6 xl:space-y-0 space-x-0 space-y-6">
          <LeftVolume />
          <LeftWallet />
          <LeftFee />
        </div>
        <div className="space-y-6">
          <RightVolume />
          <RightWallet />
          <RightFee />
        </div>
        <Leaderboard />
      </div>
    </div>
  );
};

export default Markets;
