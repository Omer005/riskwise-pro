import { useState, useEffect, forwardRef } from "react";
import Slider from "react-slick";

import { sideBarData1 as data1 } from "./fakeData";
import { sideBarData2 as data2 } from "./fakeData";
import { sideBarData3 as data3 } from "./fakeData";

const ScrollBarBody = forwardRef((props, ref) => {
  const [total1, setTotal1] = useState(0);
  const [total2, setTotal2] = useState(0);
  const [total3, setTotal3] = useState(0);

  useEffect(() => {
    var total1 = 0;
    var total2 = 0;
    var total3 = 0;
    for (var i = 0; i <= data1.length - 1; i++) {
      total1 += data1[i].holdings;
      setTotal1(total1);
    }
    for (var j = 0; j <= data2.length - 1; j++) {
      total2 += data1[j].holdings;
      setTotal2(total2);
    }
    for (var k = 0; k <= data3.length - 1; k++) {
      total3 += data3[k].holdings;
      setTotal3(total3);
    }
  }, [data1, data2, data3]);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) => {
      switch (newIndex) {
        case 0:
          props.setPageNum(0);
          break;
        case 1:
          props.setPageNum(1);
          break;
      }
    },
    appendDots: (dots) => (
      <ul
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          bottom: "0px",
          left: "0px"
        }}
      >
        {dots}
      </ul>
    ),
    customPaging: () => (
      <div className="hover:bg-yellow-400 bg-[#9f9fa8] rounded-full w-3 h-3 duration-500"></div>
    )
  };

  const changeContent = () => {
    if (props.select === "Asset")
      return data2.map((item, id) => (
        <div key={id} className="flex items-center w-full space-x-2 px-1">
          <div className="rounded-full w-8">
            <img src={item.img} alt="img" className="w-full rounded-full" />
          </div>
          <div className="flex flex-col justify-center items-center w-full">
            <div className="flex justify-between w-full">
              <span className="whitespace-nowrap text-white text-sm">
                {item.name}
              </span>
              <span className="whitespace-nowrap text-white text-sm">
                {item.holdings} ₳
              </span>
            </div>
            <div className="w-full">
              <div className="w-full h-1 rounded-full bg-[#3a4956]">
                <div
                  className="h-1 rounded-full bg-green-500"
                  style={{ width: `${(item.holdings * 100) / total2}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      ));
    else
      return data3.map((item, id) => (
        <div key={id} className="flex items-center w-full space-x-2 px-1">
          <div className="rounded-full w-8">
            <img src={item.img} alt="img" className="w-full rounded-full" />
          </div>
          <div className="flex flex-col justify-center items-center w-full">
            <div className="flex justify-between w-full">
              <span className="whitespace-nowrap text-white text-sm">
                {item.name}
              </span>
              <span className="whitespace-nowrap text-white text-sm">
                {item.holdings} ₳
              </span>
            </div>
            <div className="w-full">
              <div className="w-full h-1 rounded-full bg-[#3a4956]">
                <div
                  className="h-1 rounded-full bg-green-500"
                  style={{ width: `${(item.holdings * 100) / total3}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      ));
  };

  return (
    <div className="w-full h-[250px] rounded-xl p-2 lg:bg-gradient-to-b lg:from-[#142028] lg:to-[#0b1217] bg-[#142028]">
      <Slider ref={ref} className="static" arrows={false} {...settings}>
        <div className="space-y-2 h-[250px] overflow-y-scroll dropdownScrollbar">
          {data1.map((item, id) => (
            <div key={id} className="flex items-center w-full space-x-2 px-1">
              <div className="rounded-full w-8">
                <img src={item.img} alt="img" className="w-full rounded-full" />
              </div>
              <div className="flex flex-col justify-center items-center w-full">
                <div className="flex justify-between w-full">
                  <span className="whitespace-nowrap text-white text-sm">
                    {item.name}
                  </span>
                  <span className="whitespace-nowrap text-white text-sm">
                    {item.holdings} ₳
                  </span>
                </div>
                <div className="w-full">
                  <div className="w-full h-1 rounded-full bg-[#3a4956]">
                    <div
                      className="h-1 rounded-full bg-yellow-500"
                      style={{ width: `${(item.holdings * 100) / total1}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="space-y-2 h-[250px] overflow-y-scroll dropdownScrollbar">{changeContent()}</div>
      </Slider>
    </div>
  );
});

export default ScrollBarBody;
