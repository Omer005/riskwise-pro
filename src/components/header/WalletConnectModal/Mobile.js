import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as SVG from "../../../common/Icons";
import { walletListsMobile, walletListsDesk } from "./Data";
import { showWalletConnectModalMobile } from "../../../store/slices/wallet";

const WalletConnectModalMobile = () => {
  const [walletLists, setWalletList] = useState([]);

  const dispatch = useDispatch();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize());
    handleWindowResize();

    if (!isMobile) {
      setWalletList(walletListsDesk);
    } else {
      setWalletList(walletListsMobile);
    }
  }, [isMobile]);

  const handleWindowResize = () => {
    setIsMobile(window.innerWidth <= 1023);
  };

  const navigate = useNavigate();

  const goLog = () => {
    navigate("/login");
    dispatch(showWalletConnectModalMobile());
  };

  return (
    <div className="relative flex flex-col items-center gap-2 p-8">
      <div
        onClick={() => dispatch(showWalletConnectModalMobile())}
        className="absolute top-3 right-3 flex items-center justify-center p-3 bg-black rounded-full"
      >
        <SVG.Close />
      </div>
      <div className="w-full mb-4">
        <span className="text-white text-lg font-semibold">
          Connect a wallet
        </span>
      </div>
      <div className="walletconnect">
        {walletLists.map((item, idx) => {
          return (
            <div
              key={idx}
              onClick={() => window.open(item.targeturl, "_blank")}
              className="flex flex-col items-center justify-center cursor-pointer"
            >
              <div className="w-14 h-14 hover:border-2 hover:border-gray-600 rounded-md">
                <img src={item.imgurl} alt="" className="rounded-md w-full" />
              </div>
              <span className="text-sm text-white whitespace-nowrap">
                {item.name}
              </span>
              {isMobile && (
                <span className="text-sm text-[#70ecfd] whitespace-nowrap">
                  Get Wallet
                </span>
              )}
            </div>
          );
        })}
      </div>
      <button
        onClick={goLog}
        className="bg-[#3a4956] rounded-lg mt-2 py-2 px-6 text-white text-sm hover:-translate-y-1 duration-300"
      >
        Add Manually
      </button>
    </div>
  );
};

export default WalletConnectModalMobile;
