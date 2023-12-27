import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { showWalletConnectModalDesk } from "../../store/slices/wallet";
import WalletConnectModalDesk from "../header/WalletConnectModal/Desk";
const ChartWalletButton = () => {
  const dispatch = useDispatch();
  const { showwalletconnectmodaldesk } = useSelector((state) => state.wallet);
  const handleShowModal = () => {
    dispatch(showWalletConnectModalDesk());
  };
  return (
    <>
      <div
        onClick={handleShowModal}
        className="flex justify-center items-center bg-gradient-to-r from-yellow-200 to-yellow-400 p-3 rounded-3xl mt-4 cursor-pointer"
      >
        <p className="text-xl font-normal text-black">Connect Wallet</p>
      </div>
      <Modal
        isOpen={showwalletconnectmodaldesk}
        onRequestClose={handleShowModal}
        className="custom-modalcontent"
        overlayClassName="custom-modaloverlay"
      >
        <WalletConnectModalDesk />
      </Modal>
    </>
  );
};

export default ChartWalletButton;
