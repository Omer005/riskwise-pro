import * as SVG from "../../common/Icons";
import { data } from "../../common/IMG/Images";

const Iusd = () => {

  return (
    <>
      <div
        id="iusd"
        className={`flex items-center justify-between w-full cursor-pointer p-2 transition-all duration-300 transform hover:bg-[#3a4956] hover:bg-opacity-60 rounded-lg hover:rounded-lg`} >
        <div className="flex items-center">
          <p className="text-[#939393]">{data[0].id}</p>
          <img 
          width={40}
          height={40}
          src={data[0].image} className="ml-2" alt="taptool" />
          <div className="ml-2">
            <p className="text-white text-sm font-normal max-2xl:max-w-[80px] truncate">{data[0].name}</p>
            <p className="text-[#939393] text-sm font-normal">{data[0].price1}</p>
          </div>
        </div>
        <div className="">
          <div className="flex items-center justify-end">
            <SVG.GoUp />
            <p className="text-[#20eb7a] text-sm font-normal ml-1">{data[0].percent}</p>
          </div>
          <p className="text-[#939393] text-sm font-normal">{data[0].price2}</p>
        </div>
      </div>
    </>
  )
}
export default Iusd;