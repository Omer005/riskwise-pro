import { useSelector } from "react-redux";
import TotalVolumeTraded from "./HotWalletsLanding/TotalVolumeTraded";
import TotalADA from "./HotWalletsLanding/TotalADA";
import TokenTransactions from "./HotWalletsLanding/TokenTransactions";
import NFTTransactions from "./HotWalletsLanding/NFTTransactions";

const ProLandingHotWallets = () => {
  const { hotwalletmenuitems } = useSelector((state) => state.wallet);

  return (
    <div className="h-[1400px] hideScrollbar scrollable-invisible">
      {hotwalletmenuitems.map((item, idx) => (
        <div key={idx}>
          {!!item.active && item.value === "Total Volume Traded" && (
            <TotalVolumeTraded />
          )}
          {!!item.active && item.value === "Total ADA" && <TotalADA />}
          {!!item.active && item.value === "Token Transactions" && (
            <TokenTransactions />
          )}
          {!!item.active && item.value === "NFT Transactions" && (
            <NFTTransactions />
          )}
        </div>
      ))}
    </div>
  );
};

export default ProLandingHotWallets;
