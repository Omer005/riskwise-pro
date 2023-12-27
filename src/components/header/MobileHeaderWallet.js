import * as SVG from "../../common/Icons";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";
import { showWalletConnectModalMobile } from "../../store/slices/wallet";
import WalletConnectModalMobile from "./WalletConnectModal/Mobile";

const MobileHeaderWallet = () => {
  const dispatch = useDispatch();
  const { showwalletconnectmodalmobile } = useSelector((state) => state.wallet);

  const handleShowModal = () => {
    dispatch(showWalletConnectModalMobile());
  };

  return (
    <>
      <div
        onClick={handleShowModal}
        className="flex items-center p-2 bg-[#142028] rounded-full"
      >
        <div className="w-5 h-5">
          <SVG.WalletProfiler2 />
        </div>
      </div>
      <Modal
        isOpen={showwalletconnectmodalmobile}
        onRequestClose={handleShowModal}
        className="custom-modalcontent"
        overlayClassName="custom-modaloverlay"
      >
        <WalletConnectModalMobile />
      </Modal>
    </>
  );
};

export default MobileHeaderWallet;
