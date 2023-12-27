import Countdown from "react-countdown";
import * as SVG from "../../common/Icons";
import { useState } from "react";

const RealTimeData = {
  assets: [
    {
      title: "ADA Price",
      price: "$0.369",
      status: false,
      quantity: "3.06",
    },
    // {
    //   title: "24H DEX Volume",
    //   price: "$2.47M",
    //   status: false,
    //   quantity: "32.36",
    // },
    // {
    //   title: "24H NFT Volume",
    //   price: "$117.52K",
    //   status: false,
    //   quantity: "12.31",
    // },
    // {
    //   title: "24H Active Addresses",
    //   price: "24,450",
    //   status: true,
    //   quantity: "8.57",
    // },
    // { title: "24H Load", price: "31.52%", status: false, quantity: "19.58" },
  ],
  // epoch: "448",
  // counttime: 50000,
};

const HeaderData = () => {
  const [realTimeData, setRealTimeData] = useState(RealTimeData);
  // const [totalSeconds, setTotalSeconds] = useState(realTimeData.counttime);

  // const renderer = ({ days, hours, minutes, seconds }) => {
  //   return (
  //     <span className="text-white text-[9px] absolute">
  //       {days}d {hours}h {minutes}m {seconds}s
  //     </span>
  //   );
  // };

  return (
    <div className="flex justify-start items-center w-full lg:gap-1 gap-4 text-lg whitespace-nowrap overflow-x-scroll scrollable-invisible">
      {realTimeData.assets.map((item, idx) => (
        <div key={idx} className="flex gap-1 ">
          <span className="text-[#9f9fa8]">{item.title}:</span>
          <span className="text-[#70f7ff]">{item.price}</span>
          <span className="">
            <div className="flex place-items-baseline">
              {!!item.status ? <SVG.GoUp /> : <SVG.GoDown />}
              <span
                className={`
                  ${item.status ? "text-[#20eb7a]" : "text-[#ff422b]"}
                `}
              >
                {item.quantity}
              </span>
            </div>
          </span>
        </div>
      ))}

      {/* <div className="flex gap-2">
        <div className="flex">
          <span className="text-[#9f9fa8]">Epoch:</span>
          <span className="text-[#70f7ff]">{realTimeData.epoch}</span>
        </div>

        <div className="lg:flex hidden justify-center items-center w-32 h-5 relative">
          <div
            className="h-full bg-yellow-400 rounded-3xl absolute left-0"
            style={{
              width: `${Math.floor(
                (totalSeconds * 100) / realTimeData.counttime
              )}%`,
            }}
          ></div>
          <Countdown
            date={Date.now() + totalSeconds}
            renderer={renderer}
            onTick={(timeDelta) => setTotalSeconds(timeDelta.total)}
            onComplete={(timeDelta) => setTotalSeconds(timeDelta.total)}
          />
          <div className="w-full h-full bg-[#1E2023] rounded-3xl"></div>
        </div>
      </div> */}
    </div>
  );
};

export default HeaderData;
