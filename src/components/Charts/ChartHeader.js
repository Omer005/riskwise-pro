import { useState, useEffect } from "react";
import Chart from "../../common/Button/Charts";
import Volume from "../../common/Button/Volume";
import Dostribution from "../../common/Button/Dostribution";
import Profit from "../../common/Button/Profit";
import Transfers from "../../common/Button/Transfers";
import Liquidity from "../../common/Button/Liquidity";
import Debt from "../../common/Button/Debt";

const ChartHeader = () => {
  const [menu, setMenu] = useState("");

  useEffect(() => {
    var current = window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1)
    setMenu(current)
  }, [window.location.pathname.substring(window.location.pathname.lastIndexOf('/' + 1))])

  return (
    <>
      <div className="bg-[#142028] flex justify-center items-center rounded-lg w-fit h-fit lg:gap-4 gap-1 cursor-pointer">
        <Chart menu={menu} />
        <Volume menu={menu} />
        <Dostribution menu={menu} />
        <Profit menu={menu} />
        <Transfers menu={menu} />
        <Liquidity menu={menu} />
        <Debt menu={menu} />
      </div>
    </>
  )
}
export default ChartHeader;