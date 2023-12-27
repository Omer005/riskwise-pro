import * as SVG from "../../common/Icons";

const HomeTab = () =>{
    return (
        <>
        <div className="grid grid-cols-2 px-3 gap-10">
          <div className="w-full flex justify-between">
            <div className="flex">
              <SVG.HotWallets />
              <p
                className="text-white sm:text-base text-sm font-medium ml-3"
              >Trending Tokens</p>
            </div>
            <p className="text-[#9f9fa8] sm:text-base text-sm">Last 24H</p>
          </div>
          <div className="w-full flex justify-between">
            <div className="flex">
              <SVG.HotWallets />
              <p
                className="text-white sm:text-base text-sm font-medium ml-3"
              >Trending NFTs</p>
            </div>
            <p className="text-[#9f9fa8] sm:text-base text-sm">Last 24H</p>
          </div>
        </div>
        </>
    )
}
export default HomeTab;