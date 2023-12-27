import * as SVG from "../../common/Icons";
import * as WatchList from "../../common/WatchList/WathcList";
import SimpleBarReact from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

const ChartTop25 = () => {
  return (
    <SimpleBarReact className="h-56">
      {WatchList.Top25.map((item, idx) => {
        return (
          <div
            key={idx}
            className="flex justify-between items-center py-5 px-2">
            <div className="flex gap-3 items-center cursor-pointer w-1/3">
              <div className="w-8 h-8">
                <img
                  src={item.image}
                  className="w-8 h-8 rounded-full"
                  alt="" />
              </div>
              <p className="text-white text-sm ">{item.name}</p>
            </div>
            <div className="flex justify-start">
              <p className="text-white text-sm">{item.price}</p>
            </div>
            <div className="flex justify-start">
              <p className="text-yellow-400 text-sm">{item.percent}</p>
            </div>
            <div className="flex cursor-pointer justify-end">
              <SVG.SwapChart />
            </div>
          </div>
        )
      })}
    </SimpleBarReact>

  )
}

export default ChartTop25