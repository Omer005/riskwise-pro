import { useSelector } from "react-redux";
import Overview from "./WalletProfilerLanding/overview";
import Portfolio from "../../pages/portfolio";
import AssociatedWallets from "./WalletProfilerLanding/associatedWallet";
import TradeHistory from "./WalletProfilerLanding/tradeHistory";
import MintHistory from "./WalletProfilerLanding/mintHistory"
import OwnershipHistory from "./WalletProfilerLanding/OwnershipHistory";
const ProLandingWalletProfiler = () => {
  const { walletprofilermenuitems } = useSelector((state) => state.wallet);

  return (
    <div className="h-full hideScrollbar scrollable-invisible">
      {walletprofilermenuitems.map((item, idx) => (
        <div key={idx}>
          {!!item.active && item.value === "Overview" && <Overview />}
          {!!item.active && item.value === "Investments" && <Portfolio />}
          {!!item.active && item.value === "Associated Wallets" && (
            <AssociatedWallets />
          )}
          {!!item.active && item.value === "Trade History" && <TradeHistory />}
          {!!item.active && item.value === "Mint History" && <MintHistory />}
          {!!item.active && item.value === "Ownership History" && (
            <OwnershipHistory />
          )}
        </div>
      ))}
    </div>
  );
};

export default ProLandingWalletProfiler;  
