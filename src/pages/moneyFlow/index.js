import { useSelector } from "react-redux";

import ProLanding from "../../components/Pro/ProLanding";
import LiquidityPool from "../../components/Pro/moneyFlow/LiquidityPool";
import NFTCollection from "../../components/Pro/moneyFlow/NFTCollection";
import NFTMarket from "../../components/Pro/moneyFlow/NFTMarket";
import TokenFlow from "../../components/Pro/moneyFlow/TokenFlow";
import TokenMarket from "../../components/Pro/moneyFlow/TokenMarket";
import TokenStaking from "../../components/Pro/moneyFlow/TokenStaking";
import TokenVolume from "../../components/Pro/moneyFlow/TokenVolume";
import TotalMarket from "../../components/Pro/moneyFlow/TotalMarket";

const MoneyFlow = () => {
  const { isWalletConnected } = useSelector((state) => state.auth);

  return (
    <div className="">
      {!isWalletConnected ? (
        <ProLanding />
      ) : (

        <div className="">
          <div className="flex">
            <div className="bg-gradient-to-r from-yellow-200 to-yellow-400 px-4 py-[5px] rounded-lg mr-4">
              <span className="truncate">Liquidity</span>
            </div>
          </div>

          <div className="overflow-hidden">
            <TotalMarket />
            <TokenVolume />
            <div className="w-full rounded-3xl bg-[#0b1217] my-4 p-5 space-y-4">
              <div className="xl:flex xl:justify-between xl:space-x-8 xl:space-y-0 space-y-4">
                <TokenMarket />
                <NFTMarket />
              </div>
              <div className="xl:flex xl:justify-between xl:space-x-8 xl:space-y-0 space-y-4">
                <TokenFlow />
                <NFTCollection />
              </div>
              <div className="xl:flex xl:justify-between xl:space-x-8 xl:space-y-0 space-y-4">
                <TokenStaking />
                <LiquidityPool />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MoneyFlow;
