import { ownerHistoryData1 } from "./ownerHistoryData1";
import SimpleBar from "simplebar-react";
import { useState } from "react";

const Card1 = () => {
  const [data1] = useState(ownerHistoryData1.itemValue)
  return (
    <div className="lg:w-[30%] w-full space-y-6 h-[560px] bg-[#142028] rounded-2xl p-4">
      <p className="text-white text-base font-normal">Holdings</p>
      <SimpleBar className="h-[500px] pb-4">
        <div className="flex flex-col px-4 gap-4">
          {data1.map((item, idx) => {
            return (
              <div
                key={idx}
                className="flex gap-4">
                <div className="flex items-center w-8 h-8">
                  <img
                    src={item.collection.image}
                    height={30}
                    width={30}
                    className=""
                    alt="img" />
                </div>
                <div className="flex flex-col gap-1 items-center w-full">
                  <div className="flex justify-between w-full">
                    <p className="text-white text-base font-normal">{item.collection.value}</p>
                    <p className="text-white text-base font-normal">
                      {item.price}₳</p>
                  </div>
                  <div className="flex w-full bg-[#3a4956] ">
                    <div
                      className="h-1 bg-yellow-400 rounded-full"
                      style={{ width: `${item.percent}%` }}
                    ></div>
                  </div>
                  <div className=""></div>
                </div>
              </div>
            )
          })}

        </div>
      </SimpleBar>
    </div>
  );
};

export default Card1;
