import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";
import { showWalletConnectModalDesk } from "../../store/slices/wallet";
import WalletConnectModalDesk from "./WalletConnectModal/Desk";

const HeaderButton = () => {
  const dispatch = useDispatch();
  const { showwalletconnectmodaldesk } = useSelector((state) => state.wallet);

  const handleShowModal = () => {
    dispatch(showWalletConnectModalDesk());
  };

  return (
    <div className="flex items-center hover:-mt-1 duration-300">
      <button
        className="bg-gradient-to-r from-yellow-200 to-yellow-400 text-black py-2 px-6 rounded-xl text-sm font-bold"
        onClick={handleShowModal}
      >
        Connect Wallet
      </button>
      <Modal
        isOpen={showwalletconnectmodaldesk}
        onRequestClose={handleShowModal}
        className="custom-modalcontent"
        overlayClassName="custom-modaloverlay"
      >
        <WalletConnectModalDesk />
      </Modal>
    </div>
  );
};

export default HeaderButton;
