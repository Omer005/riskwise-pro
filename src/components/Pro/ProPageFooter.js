import { risk1, risk2, risk3, risk4, risk5, risk6, Icon } from "../../common/IMG/Images";
import Slider from "react-slick";
const footerDatas = [
  {
    id: 0,
    image: risk1,
    title: "TeddySwap Launches on Cardano Mainnet",
    content: "TeddySwap, an open-source Automated Market Market  Descentralized Exchange on the Cardano blockchain, stands as a testament to innovation and transparency. Crafted with open-source smart contracts from Spectrum Finance, TeddySwap paves the way for a dynamic and inclusive decentralized finance experience. As a platform committed to evolving with th needs of its community.",
    time: "1d ago"
  },
  {
    id: 1,
    image: risk2,
    title: "TeddySwap Launches on Cardano Mainnet",
    content: "TeddySwap, an open-source Automated Market Market  Descentralized Exchange on the Cardano blockchain, stands as a testament to innovation and transparency. Crafted with open-source smart contracts from Spectrum Finance, TeddySwap paves the way for a dynamic and inclusive decentralized finance experience. As a platform committed to evolving with th needs of its community.",
    time: "2d ago"
  },
  {
    id: 2,
    image: risk3,
    title: "TeddySwap Launches on Cardano Mainnet",
    content: "TeddySwap, an open-source Automated Market Market  Descentralized Exchange on the Cardano blockchain, stands as a testament to innovation and transparency. Crafted with open-source smart contracts from Spectrum Finance, TeddySwap paves the way for a dynamic and inclusive decentralized finance experience. As a platform committed to evolving with th needs of its community.",
    time: "3d ago"
  },
  {
    id: 3,
    image: risk4,
    title: "TeddySwap Launches on Cardano Mainnet",
    content: "TeddySwap, an open-source Automated Market Market  Descentralized Exchange on the Cardano blockchain, stands as a testament to innovation and transparency. Crafted with open-source smart contracts from Spectrum Finance, TeddySwap paves the way for a dynamic and inclusive decentralized finance experience. As a platform committed to evolving with th needs of its community.",
    time: "4d ago"
  },
  {
    id: 4,
    image: risk5,
    title: "TeddySwap Launches on Cardano Mainnet",
    content: "TeddySwap, an open-source Automated Market Market  Descentralized Exchange on the Cardano blockchain, stands as a testament to innovation and transparency. Crafted with open-source smart contracts from Spectrum Finance, TeddySwap paves the way for a dynamic and inclusive decentralized finance experience. As a platform committed to evolving with th needs of its community.",
    time: "5d ago"
  },
  {
    id: 5,
    image: risk6,
    title: "TeddySwap Launches on Cardano Mainnet",
    content: "TeddySwap, an open-source Automated Market Market  Descentralized Exchange on the Cardano blockchain, stands as a testament to innovation and transparency. Crafted with open-source smart contracts from Spectrum Finance, TeddySwap paves the way for a dynamic and inclusive decentralized finance experience. As a platform committed to evolving with th needs of its community.",
    time: "6d ago"
  }
]
const ProPageFooter = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <>
      <Slider
        arrows={false}
        {...settings}>
        {footerDatas.map((item, idx) => {
          return (
            <div
              key={idx}
              className="px-4 my-4">
              <div className="lg:flex lg:flex-row lg:justify-between  flex-col w-full bg-[#142028] rounded-2xl p-8">
                <div className="lg:w-1/2 w-full flex flex-col justify-center items-start cursor-pointer">
                  <div className="max-lg:flex hidden gap-1 items-center">
                    <img
                      srcSet={Icon}
                      width={3000}
                      height={3000}
                      className=" h-9 w-9 rounded-2xl"
                      alt="pic"
                    />
                    <p className="text-[#9f9fa8] lg:text-sm text-xs font-normal">Risk Wise</p>
                    <p className="text-[#9f9fa8] lg:text-sm text-xs font-normal">{item.time}</p>
                  </div>
                  <div className="px-3 max-lg:flex max-lg:justify-center hidden mb-3 ">
                    <p className="text-white lg:text-xl sm:text-lg text-base font-medium  ">{item.title}</p>
                  </div>
                  <img
                    srcSet={item.image}
                    width={3000}
                    height={1000}
                    className="w-full sm:h-[350px] h-[180px] rounded-2xl"
                    alt="pic"
                  />
                </div>
                <div className="lg:w-1/2 w-full flex flex-col  px-2 justify-between cursor-pointer">
                  <div className="flex flex-col">
                    <div className="lg:flex hidden gap-1 items-center">
                      <img
                        srcSet={Icon}
                        width={3000}
                        height={3000}
                        className=" h-10 w-10 rounded-2xl"
                        alt="pic"
                      />
                      <p className="text-[#9f9fa8] lg:text-sm text-xs font-normal">Risk Wise</p>
                      <p className="text-[#9f9fa8] lg:text-sm text-xs font-normal">{item.time}</p>
                    </div>
                    <div className="px-3 lg:flex hidden">
                      <p className="text-white lg:text-xl text-lg font-medium">{item.title}</p>
                    </div>
                    <div className="lg:px-3 px-0 mt-4">
                      <p className="text-[#9f9fa8] lg:text-base text-sm font-normal">{item.content}</p>
                    </div>
                  </div>
                  <div className="flex justify-between lg:px-4">
                    <p className="text-sm text-[#9f9fa8]">{item.time}</p>

                    <p className="text-sm text-yellow-400">Read</p>
                  </div>
                </div>
              </div>
            </div>)
        })}
      </Slider>
    </>
  );
};

export default ProPageFooter;
