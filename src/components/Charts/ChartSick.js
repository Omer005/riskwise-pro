import * as IMG from "../../common/IMG/Images";
import * as SVG from "../../common/Icons";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useMedia from "../../common/mediaQuery";

const ChartSlick = () => {
  const [price, setPrice] = useState("0.236€");
  const [percentFirst, setPercentFirst] = useState("+8.71%");
  const [wid, setWid] = useState(12);
  const slick = document.getElementById("slick");
  const [isActive, setIsActive] = useState(true);
  const [isVerticalActive, setIsVerticalActive] = useState(true);
  const useMediaQuery = useMedia();
  const IsLarge = useMediaQuery.useIsLarge;
  const [pro, setPro] = useState(10);

  useEffect(() => {
    {
      IsLarge ? setPro(16) : setPro(3);
    }
  }, [IsLarge]);
  useEffect(() => {
    {
      IsLarge ? setIsVerticalActive(true) : setIsVerticalActive(false);
    }
  }, [IsLarge]);
  if (slick) {
    slick.addEventListener("mouseenter", () => {
      setIsActive(true);
    });
    slick.addEventListener("mouseleave", () => {
      setIsActive(false);
    });
  }
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: pro,
    vertical: isVerticalActive,
    slidesToScroll: 1,
    autoplay: { isActive },
    speed: 800,
    autoplaySpeed: 800,
    cssEase: "linear",
    pauseOnHover: true,
    arrows: false
  };
  return (
    <>
      <div className=" rounded-sm pt-4 2xl:w-[130px] lg:w-[70px]">
        {/* Icon */}
        <div className="2xl:flex  2xl:items-center 2xl:flex-row lg:flex lg:flex-col lg:justify-center flex  items-center gap-4 ">
          <div className="flex items-center ">
            <img
              width={12}
              height={12}
              src={IMG.AGIX}
              className="2xl:w-0 w-10 2xl:h-0 h-10 lg:ml-2 rounded-full"
              alt="taptool"
            />
          </div>
          <div className="flex flex-col ">
            <div className="flex">
              <p className="text-white  text-sm font-medium">AGIX</p>
              <p className="text-[#7b7b7b] text-sm font-medium">/EUR</p>
              <div className="flex items-center ml-1">
                <SVG.WatchList wid={wid} />
              </div>
            </div>
            <div className="2xl:flex lg:hidden flex">
              <p className="text-white text-sm font-medium">{price}</p>
              <div className="flex items-center ml-2">
                <p className="text-[#000] bg-gradient-to-br rounded-xl px-2 py-1 from-yellow-400 via-yellow-300 to-yellow-50 text-xs font-medium">
                  {percentFirst}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Slick */}
        <div id="slick" className="cursor-pointer">
          <Slider {...settings}>
            {IMG.HomeData.map((item, index) => {
              return (
                <div key={index} className="flex py-4">
                  <div className="flex justify-between text-white">
                    <div className="flex items-top justify-end w-full">
                      <p className="text-[#7b7b7b] text-sm ">#{item?.id}</p>
                    </div>
                    <div className="flex items-center justify-center w-full">
                      <img
                        src={item?.image}
                        className="w-8 h-8 ml-1 rounded-full"
                        alt="taptool"
                      />
                    </div>
                    <div className="2xl:flex items-center justify-center hidden w-full">
                      <div className="flex flex-col justify-center items-start text-[10px] ml-2">
                        <p className="text-[12px]"> {item?.name}</p>
                        <div className="flex items-center">
                          <SVG.GoDown />
                          <p className="text-[#ff422b] text-[12px] ">
                            {item?.percent1}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
};
export default ChartSlick;
