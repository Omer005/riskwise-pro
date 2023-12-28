import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

import NavbarHeaderLarge from "./NavbarHeaderLarge";
import NavarHomeLarge from "./NavbarHomeLarge";
import NavbarChartsLarge from "./NavbarChartsLarge";
import NavbarPortfolioLarge from "./NavbarPortfolioLarge";
import NavbarMarketsLarge from "./NavbarMarketsLarge";
// import NavbarWatchListLarge from "./NavbarWatchListLarge";
import NavbarNewsLarge from "./NavbarNewsLarge";
import NavbarProfilerLarge from "./NavbarProfilerLarge";
import NavbarHotProfilerLarge from "./NavbarHotProfilerLarge";
import NavbarMoneyFlowLarge from "./NavbarMoneyFlowLarge";
import NavbarAccountLarge from "./NavbarAccountLarge";
import NavbarChartLarge from "./NavbarChartLarge";
import NavbarPartnerLarge from "./NavbarPartnerLarge";
import MobileHeaderSearch from "../header/MobileHeaderSearch";
import { showWalletConnectModalDesk } from "../../store/slices/wallet";
import WalletConnectModalDesk from "../../components/header/WalletConnectModal/Desk";

const TopNavbar = () => {
  const navbar = document.getElementById("Navbar");
  const location = useLocation();
  const [menu, setMenu] = useState("");
  const { token } = useSelector((state) => state.auth);



  useEffect(() => {
    var current = window.location.pathname.substring(
      window.location.pathname.lastIndexOf("/") + 1
    );
    setMenu(current + "home");
  }, [
    window.location.pathname.substring(
      window.location.pathname.lastIndexOf("/") + 1
    )
  ]);
  const dispatch = useDispatch();
  const { showwalletconnectmodaldesk ,signedMessage} = useSelector((state) => state.wallet);
  const handleShowModal = () => {
    dispatch(showWalletConnectModalDesk());
  };
  return (
    <div
      className={`fixed top-0  z-[99999] pt-3 opacity-80 bg-[#142028]    overflow-hidden flex   w-full h-[70px]`}
      id="Navbar"
    >
      {/* Navbar header */}
      <NavbarHeaderLarge />
      {/* Navbar Body */}
      <div className="flex justify-between items-ceter w-full px-4 relative">
        <div className="flex xl:gap-4 gap-1">
        {token &&
        <>
          <NavarHomeLarge menu={menu} />
          <NavbarChartsLarge menu={menu} />
          <NavbarPortfolioLarge menu={menu} />
          <NavbarMarketsLarge menu={menu} />
          <NavbarNewsLarge menu={menu} />
          <NavbarChartLarge menu={menu} />
          <NavbarPartnerLarge menu={menu} />
          <NavbarProfilerLarge menu={menu} />
          <NavbarHotProfilerLarge menu={menu} />
          <NavbarMoneyFlowLarge menu={menu} />
          </>
        }
        </div>
        <div className="flex items-center justify-end gap-6">
          <MobileHeaderSearch />
          <div
            className="flex flex-col justify-end items-center cursor-pointer text-white hover:text-yellow-300"
            onClick={handleShowModal}
          >
            <MonetizationOnIcon />
            <p className="text-xs">{signedMessage?"Connected":"connect"} </p>
          </div>
          <NavbarAccountLarge menu={menu} />
        </div>
        <Modal
          isOpen={showwalletconnectmodaldesk}
          onRequestClose={handleShowModal}
          className="custom-modalcontent"
          overlayClassName="custom-modaloverlay"
        >
          <WalletConnectModalDesk />
        </Modal>
      </div>
    </div>
  );
};

export default TopNavbar;
