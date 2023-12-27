import { useEffect, useState } from "react";
import MultiHeader from "./multiHeader";
import MultiSearch from "./multiSearch";
import * as SVG from "../../common/Icons";
import TradingViewWidget from "react-tradingview-widget";
import { Cornucopias } from "../../common/IMG/Images";
const AddedData = [
]

const Multi = () => {
  const [number, setNumber] = useState(0)
  const [remainNumber, setRemainNumber] = useState(10);
  const [data, setData] = useState([]);

  const handleClick = () => {
    setNumber(number + 1);
    const _data = [...data];
    if (number < 10) {
      _data.push({
        id: number,
        active: false,
      });
      setData(_data);
    }
    console.log(data);
    if (number >= 10)
      setNumber(10);
  }
  const handleDelete = (_idx) => {
    const filterData = data.filter((item) => {
      console.log("id", item.id);
      console.log("_idx", _idx);
      setNumber(number - 1);
      return item.id !== _idx;
    })
    setData(filterData);
    console.log("data", filterData)
  }

  useEffect(() => {
    setRemainNumber(10 - number)
  }, [number])
  return (
    <div className="flex flex-col overflow-y-hidden gap-6 items-center justify-center w-full h-full pb-10 lg:px-0 px-6">
      <MultiHeader />
      <MultiSearch />
      <div className="flex flex-wrap gap-10 w-full justify-center">
        {data.map((item, idx) => {
          return (
            <div
              key={idx}
              style={{ background: "#142028", borderRadius: "10px" }}
              className="bg-[#142028] h-[650px] lg:w-[30%] w-full rounded-xl p-3">
              <div className="flex justify-between">
                <p className="flex justify-center text-white text-sm font-medium">{item.id} </p>
                <div
                  onClick={() => handleDelete(item.id)}
                  className="flex items-center justify-center">
                  <SVG.Close />
                </div>
              </div>
              <TradingViewWidget
                theme="Dark"
                symbol="BITSTAMP:ETHUSD"
                width="80%"
                backgroundColor="#000"
              />
            </div>
          )
        })}
        <div className="flex justify-center items-center lg:w-[30%] w-full bg-[#142028] rounded-xl h-[650px]">
          <div className="flex flex-col justify-center items-center">
            <div
              onClick={handleClick}
              className="flex justify-center items-center w-10 h-10 bg-white rounded-full cursor-pointer">
              <div className="flex justify-center items-center w-6 h-6">
                <SVG.Plus />
              </div>
            </div>
            <p className="text-white text-lg font-normal"> Add new chart</p>
            <p className="text-[#9f9fa8] text-sm font-normal">{remainNumber} of 10 slots remaining</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Multi;
