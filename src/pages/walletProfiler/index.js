import { useSelector } from "react-redux";
import WalletProfilerHeader from "../../components/Pro/WalletProfilerHeader";
import ProLanding from "../../components/Pro/ProLanding";
import ProLandingWalletProfiler from "../../components/Pro/ProLandingWalletProfiler";

const WalletProfiler = () => {
  const { isWalletConnected } = useSelector((state) => state.auth);

  return (
    <div className="lg:px-4 md:px-2">
      <WalletProfilerHeader text="Portfolio" />
      {!!isWalletConnected ? (
        <ProLandingWalletProfiler />
      ) : (
        <ProLanding text="Wallet Profiler" />
      )}
    </div>
  );
};

export default WalletProfiler;
