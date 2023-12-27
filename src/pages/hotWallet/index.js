import { useSelector } from "react-redux";
import HotWalletsHeader from "../../components/Pro/HotWalletsHeader";
import ProLanding from "../../components/Pro/ProLanding";
import ProLandingHotWallets from "../../components/Pro/ProLandingHotWallets";

const HotWallet = () => {
  const { isWalletConnected } = useSelector((state) => state.auth);

  return (
    <div className="lg:px-4 md:px-2">
      <div className="max-w-[1400px] border-x border-white border-opacity-20 m-auto md:px-6">
        <HotWalletsHeader text="WalletWatch" />
        {!!isWalletConnected ? (
          <ProLandingHotWallets />
        ) : (
          <ProLanding text="Hot Wallets" />
        )}
      </div>
    </div>
  );
};

export default HotWallet;
