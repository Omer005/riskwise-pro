import * as SVG from "../common/Icons";

const HeaderData = () => {
  return (
    <>
      <div className="flex justify-start w-full text-sm">
        <div id="ada" className="flex">
          <span className="text-[#9f9fa8]">ADA Price:</span>
          <span className="text-[#70f7ff]">{`$0.369`}</span>
          <span className="">
            <div className="flex place-items-baseline">
              <SVG.GoDown />
              <span className="text-[#ff422b]">{`3.06%`}</span>
            </div>
          </span>
        </div>
        <div id="dex" className="flex">
          <span className="text-[#9f9fa8]">24H DEX Volume:</span>
          <span className="text-[#70f7ff]">{`$2.47M`}</span>
          <span className="">
            <div className="flex place-items-baseline">
              <SVG.GoDown />
              <span className="text-[#ff422b]">{`32.36%`}</span>
            </div>
          </span>
        </div>
        <div id="NFT" className="flex">
          <span className="text-[#9f9fa8]">24H NFT Volume:</span>
          <span className="text-[#70f7ff]">{`$117.52K`}</span>
          <span className="">
            <div className="flex place-items-baseline">
              <SVG.GoDown />
              <span className="text-[#ff422b]">{`12.31%`}</span>
            </div>
          </span>
        </div>
        <div id="address" className="flex">
          <span className="text-[#9f9fa8]">24H Active Addresses:</span>
          <span className="text-[#70f7ff]">{`28,626`}</span>
          <span className="">
            <div className="flex place-items-baseline">
              <SVG.GoDown />
              <span className="text-[#ff422b]">{`17.80%`}</span>
            </div>
          </span>
        </div>
        <div id="load" className="flex">
          <span className="text-[#9f9fa8]">24H Load:</span>
          <span className="text-[#70f7ff]">{`31.52%`}</span>
          <span className="">
            <div className="flex place-items-baseline">
              <SVG.GoDown />
              <span className="text-[#ff422b]">{`19.58%`}</span>
            </div>
          </span>
        </div>
        <div id="Epoch" className="flex">
          <span className="text-[#9f9fa8]">Epoch:</span>
          <span className="text-[#70f7ff]">{`448`}</span>
        </div>
        <div className="relative flex justify-center items-center mr-10">
          <div id="progressBar" className=""></div>
          <span id="timer" className=" text-[#f2f2f2]">{`3d 7h 22m 18s`}</span>
        </div>
      </div>
    </>
  );
};

export default HeaderData;
