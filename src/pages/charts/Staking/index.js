import ChartSmallHeader from "../../../components/Charts/ChartSmallHeader";
import ChartHeader from "../../../components/Charts/ChartHeader";
import useMedia from "../../../common/mediaQuery";
import ProLanding from "../../../components/Pro/ProLanding";
import { useSelector } from "react-redux";
import ChartStaking from "../../../components/Charts/Staking";
import ChartSmallHeaderDirect from "../../../components/Charts/ChartSmallHeaderDirect";
const Staking = () => {
  const usemedia = useMedia();
  const IsLarge = usemedia.useIsLarge;
  const { isWalletConnected } = useSelector((state) => state.auth);
  return (
    <div className="h-full w-full relative pt-10" >
      <div className="bg-[#121218] flex justify-center items-center rounded-lg w-fit  lg:gap-4 gap-1 cursor-pointer">
        {IsLarge ? (<ChartSmallHeaderDirect />) : (<ChartSmallHeader />)}
      </div>
      {isWalletConnected ? (<ChartStaking />) : (<ProLanding />)}
    </div>
  )
}

export default Staking;