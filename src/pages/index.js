import { useState, useEffect } from "react";
import * as IMG from "../common/IMG/Images";
import ContentHeader from "../components/ContentHeader";
import Homebody from "../components/Home/HomeBody";
import HomeTab from "../components/Home/HomeTab";
import HomeMarketButton from "../components/Home/HomeMarketButton";
import HomeWalletButton from "../components/Home/HomeWalletButton";
import HomeViewAll from "../components/Home/HomeViewAll";
import HomeTableHeader from "../components/Home/HomeTableHeader";
import HomeTableContent from "../components/Home/HomeTableContent";
import useMedia from "../common/mediaQuery"
import HomeHeaderSlick from "../components/Home/HomeHeaderSlick";
const IndexOne = () => {
  const [menu, setMenu] = useState("");
  const isSmall = useMedia();
  const isActive = isSmall.useIsSmall;
  useEffect(() => {
    var current = window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1)
    setMenu(current)
  }, [window.location.pathname.substring(window.location.pathname.lastIndexOf('/' + 1))])

  return (
    <div className="w-full px-4 pb-4">
      <ContentHeader menu={menu} />
      <HomeHeaderSlick />
      <div className="w-full">
        <div className="space-y-4">
          {isActive ? (<HomeTab />) : ("")
          }
          <Homebody />
        </div>
        <div className=" xl:flex justify-between w-full sm:mt-2 mt-7 mb-4">
          <div className="flex ">
            <HomeMarketButton />
            <HomeWalletButton />
          </div>
          <div className="">
            <HomeViewAll />
          </div>
        </div>
        <div className="bg-[#142028] rounded-2xl px-1 py-2">
          <HomeTableHeader />
          {IMG.HomeData.map((item, index) =>
            <HomeTableContent key={index} props={item} />)
          }
        </div>
      </div>
    </div>
  )
}

export default IndexOne;