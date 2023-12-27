import { useState, useEffect } from "react";
import ContentHeader from "../../components/ContentHeader";
import ProLanding from "../../components/Pro/ProLanding";
import ProPage from "../../components/Pro/ProPage";
import HomeHeaderSlick from "../../components/Home/HomeHeaderSlick";
import LeftVolume from "../../components/marketing/LeftVolume";
import RightVolume from "../../components/marketing/RightVolume";
import ProPageFooter from "../../components/Pro/ProPageFooter";
import * as SVG from "../../common/Icons";
import DropDownMenu from "../../components/marketing/DropDownMenu";
const HomePro = () => {
  const durationList = [
    { id: 0, value: "Top NFT Trades" },
    { id: 1, value: "Top NFT Projects" },
    { id: 2, value: "Top Movers" },
    { id: 3, value: "Hot Contracts" },
    { id: 4, value: "Policies Minting" },
    { id: 5, value: "Top Token Transfers" },
    { id: 6, value: "Top Token Trades" },
    { id: 7, value: "Top Tokens" },
    { id: 8, value: "Top LP Flows" },

  ];
  const [menu, setMenu] = useState("");
  useEffect(() => {
    var current = window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1)
    setMenu(current)
  }, [window.location.pathname.substring(window.location.pathname.lastIndexOf('/' + 1))])
  const [duration, setDuration] = useState("Top NFT Trades");
  const [spread, setSpread] = useState(false);

  const beSpread = () => {
    setSpread(!spread);
  };
  const chooseItem = (item) => {
    setDuration(item.value);
  };
  return (
    <>
      {/* Home header */}
      <div className="max-lg:flex max-lg:justify-between  px-4">
        <ContentHeader menu={menu} />
        <div className="flex items-end pb-4">
          <div
            className="max-lg:relative max-lg:flex max-lg:items-center hidden bg-[#142028] px-3 h-7 rounded-[10px] cursor-pointer w-fit"
            id="spread"
            onClick={beSpread}
          >
            <span onClick={beSpread} className="pr-2 text-[#9f9fa8] text-sm inline-block overflow-hidden  whitespace-nowrap">
              {duration}
            </span>
            <div className=" w-5 h-5 rounded-sm flex justify-center items-center">
              {spread === true ? <SVG.Up /> : <SVG.Down />}
            </div>
            <div
              className={`absolute bottom-0 left-0 z-50 ${spread === false ? "hidden" : "w-full"
                }`}
            >
              <DropDownMenu
                menuitems={durationList}
                chooseItem={chooseItem}
              />
            </div>
          </div>
        </div>
      </div>
      <HomeHeaderSlick />
      {/* Chart Part */}
      <div className="xl:flex xl:justify-between overflow-hidden px-4 ">
        <RightVolume />
      </div>
      {/* <ProLanding /> */}
      <ProPage duration={duration} />

      {/* Footer */}
      <ProPageFooter />

    </>
  )
}

export default HomePro;