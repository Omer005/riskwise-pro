
import Slider from "react-slick";
import useMedia from "../../common/mediaQuery";
import { DEXTFORCE, DEXTFORCE2, DEXTFORCE3, DEXTFORCE4, DEXTFORCE5, DEXTFORCE6, DEXTFORCE7, DEXTFORCE8, data } from "../../common/IMG/Images";
import { useEffect, useState } from "react";
const datas = [
  {
    id: 0,
    img: DEXTFORCE,
    txt1: "DEXT Force Fest | DAY 1",
    tx2: "Your Missed It? Conferences Here!"
  },
  {
    id: 1,
    img: DEXTFORCE2,
    txt1: "DEXT Force Fest | DAY 2",
    tx2: "Talks And Panels Day 2"
  },
  {
    id: 2,
    img: DEXTFORCE3,
    txt1: "DEXTools X TradinvView",
    tx2: "Read More Here"
  },
  {
    id: 3,
    img: DEXTFORCE4,
    txt1: "DEXTools Academy",
    tx2: "DEXTools And Tradingview Pratnership"
  },
  {
    id: 4,
    img: DEXTFORCE5,
    txt1: "Jnlock Your Trading Skills!",
    tx2: "DEXTools Trading Simulator"
  },
  {
    id: 5,
    img: DEXTFORCE6,
    txt1: "DEXTools Latest Release",
    tx2: "Latest Changes In Version 2.66.0"
  },
  {
    id: 6,
    img: DEXTFORCE7,
    txt1: "Win The World's BIGGEST Crypto Prizel",
    tx2: "Clcik Here For FREE Entry"
  },
  {
    id: 7,
    img: DEXTFORCE8,
    txt1: "Register Now To Get In Early On Launches!",
    tx2: "AITECH Pad Is Live"
  }
]
const HomeHeaderSlick = () => {
  const media = useMedia();
  const isLarge = media.useIsLarge;
  const isXLarge = media.useXlLarge;
  const isSmall = media.useIsSmall;
  const [showNumber, setShowNumber] = useState(5)
  useEffect(() => {
    { isXLarge ? setShowNumber(4) : isLarge ? setShowNumber(4) : isSmall ? setShowNumber(2) : setShowNumber(1) }
  }, [isXLarge, isLarge, isSmall])
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: showNumber,
    slidesToScroll: 1
  };
  return (
    <>
      <div className="w-full overflow-auto mb-4">
        <Slider
          arrows={false}
          {...settings}>
          {datas.map((item, idx) => {
            return (
              <div
                key={idx}
                className=" cursor-pointer ">
                <div className="xl:w-52 min-[1440px]:w-80 lg:w-48 w-full sm:px-4 px-10 xl:h-30 ">
                  <img
                    style={{ "boxShadow": '10px 10px 5px 0px black ' }}
                    src={item.img}
                    width={200}
                    height={200}
                    className="xl:w-52 min-[1440px]:w-80 lg:w-48 w-full xl:h-30 rounded-xl"
                    alt="pic" />
                </div>
                <div className="flex flex-col items-start pt-2 sm:px-4 px-10">
                  <p className="sm:text-sm text-xs text-[#818ea3]">
                    {item.txt1}
                  </p>
                  <p className="sm:text-sm text-xs text-white whitespace-nowrap text-ellipsis overflow-hidden inline-block">
                    {item.tx2}
                  </p>
                </div>
              </div>
            )
          })}



        </Slider>
      </div>
    </>
  )
}
export default HomeHeaderSlick;