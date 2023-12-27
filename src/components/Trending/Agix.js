import * as SVG from "../../common/Icons";
import { data } from "../../common/IMG/Images";

const Agix = () => {
 
  return (
    <>
      <div
        id="agix"
        className={`flex items-center justify-between w-full cursor-pointer p-2 transition-all duration-300 transform hover:bg-[#3a4956] hover:bg-opacity-60 hover:rounded-lg`} >
        <div className="flex items-center">
          <p className="text-[#939393]">{data[5].id}</p>
          <img
          width="10"
          height="10"
          src={data[5].image} className="w-10 h-10 ml-2 rounded-full" alt="taptool" />
          <div className="ml-2">
            <p className="text-white text-sm font-normal max-2xl:max-w-[80px] truncate">{data[5].name}</p>
            <p className="text-[#939393] text-sm font-normal">{data[5].price1}</p>
          </div>
        </div>
        <div className="">
          <div className="flex items-center justify-end">
            <SVG.GoDown />
            <p className="text-[#ff422b] text-sm font-normal ml-1">{data[5].percent}</p>
          </div>
          <p className="text-[#939393] text-sm font-normal">{data[5].price2}</p>
        </div>
      </div>
    </>
  )
}
export default Agix;