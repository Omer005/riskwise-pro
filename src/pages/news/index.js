import { useState } from "react";
import moment from "moment";
import { CryptoNews } from "./CryptoNews";

const News = () => {
  const [cryptonews, setCryptoNews] = useState(CryptoNews);
  const maxViewsCount = useState(50);

  const handleItem = (_idx) => {
    const newCryptoNews = cryptonews.map((item, idx) => {
      if (_idx === idx) {
        item.views++;
      }
      window.open(item.url, "_blank");
      return item;
    });

    setCryptoNews(newCryptoNews);
  };

  return (
    <div className="flex flex-col justify-center w-full h-full p-2 mb-4 overflow-x-auto hideScrollbar">
      <span className="text-xl font-semibold text-white">
        Latest Crypto Chat
      </span>
      <div className="min-w-[1024px] mt-4 bg-[#142028] p-4 rounded-2xl">
        <ul className="flex justify-between text-sm font-semibold text-[#9f9fa8] border-b-[1px] border-[#232323] px-2 pb-2">
          <li className="w-[65%] truncate">Headline</li>
          <li className="w-[10%]">Source</li>
          <li className="w-[10%]">Time</li>
          <li className="w-[15%] text-end pr-6">Views</li>
        </ul>
        <div className="">
          {cryptonews.map((item, idx) => (
            <ul
              key={idx}
              onClick={() => handleItem(idx)}
              className="flex justify-between text-sm text-white border-b-[1px] border-[#232323] hover:bg-[#3a4956] cursor-pointer py-1 whitespace-nowrap text-ellipsis "
            >
              <li className="w-[65%] truncate">
                {item.headline}
              </li>
              <li className="w-[10%]">{item.source}</li>
              <li className="w-[10%]">{moment(item.time).fromNow()}</li>
              <li className="w-[15%]">
                <div className="flex items-center gap-3">
                  <span className="w-[10%] flex justify-end">{item.views}</span>
                  <div className="w-full relative">
                    {item.views > 0 && (
                      <div
                        className={`h-1 bg-yellow-400 rounded-3xl absolute z-10 w-[30%]`}
                        style={{
                          width: `${Math.floor(
                            (item.views * 100) / maxViewsCount
                          )}%`,
                        }}
                      ></div>
                    )}
                    <div className="w-full h-1 bg-[#4d5359] rounded-3xl"></div>
                  </div>
                </div>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
