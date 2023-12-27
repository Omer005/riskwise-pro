import { useState } from "react";

import * as SVG from "../../../../../common/Icons";
import DropDownMenu from "./DropDownMenu";

const SelectCollection = (props) => {
  const collectionList = [
    {
      src: "https://www.taptools.io/_next/image?url=https%3A%2F%2Ftaptools-public.s3.amazonaws.com%2Ftoken-logos%2Fada.png&w=32&q=75",
      value: "ADA"
    },
    {
      src: "https://www.taptools.io/_next/image?url=https%3A%2F%2Ftaptools-public.s3.amazonaws.com%2Ftoken-logos%2F8fef2d34078659493ce161a6c7fba4b56afefa8535296a5743f6958741414441.png&w=32&q=75",
      value: "LENFI"
    },
    {
      src: "https://www.taptools.io/_next/image?url=https%3A%2F%2Fd28yzo4ezrm37i.cloudfront.net%2Fimage%2FQmaPe6g9NPTTkJ87CF2MjN9fS8Mbfwv8Ue6DwZyyUyXUQF&w=32&q=75",
      value: "SNEK"
    },
    {
      src: "https://www.taptools.io/_next/image?url=https%3A%2F%2Ftaptools-public.s3.amazonaws.com%2Ftoken-logos%2F533bb94a8850ee3ccbe483106489399112b74c905342cb1792a797a0494e4459.png&w=32&q=75",
      value: "INDY"
    },
    {
      src: "https://www.taptools.io/_next/image?url=https%3A%2F%2Ftaptools-public.s3.amazonaws.com%2Ftoken-logos%2F5dac8536653edc12f6f5e1045d8164b9f59998d3bdc300fc928434894e4d4b52.png&w=32&q=75",
      value: "NMKR"
    }
  ];

  const [spread, setSpread] = useState(false);
  const [collection, setCollection] = useState("Select Assets");
  const [image, setImage] = useState("");

  const beSpread = () => {
    setSpread(!spread);
  };

  const chooseItem = (item) => {
    setCollection(item.value);
    props.filter(item.value)
    setImage(item.src);
  };

  return (
    <div className="flex flex-col space-y-2 md:w-[22%] w-full">
      <div className="md:w-full space-y-2 h-full">
        <div className="lg:block hidden pl-2 text-white sm:whitespace-nowrap">
          Select Collection
        </div>
        <div className="h-9 w-full bg-[#142028] rounded-full pt-[5px] text-white">
          <div
            className="relative flex items-center justify-between px-3 h-7 rounded-full cursor-pointer"
            id="spread"
            onClick={beSpread}
          >
            <span
              onClick={beSpread}
              className="flex items-center space-x-2 pr-2 text-[#9f9fa8] text-sm"
            >
              <span className={`${image ? "" : "hidden"}`}>
                <img src={image} className="w-6 rounded-full" />
              </span>
              <span className="text-white truncate sm:w-full w-12">
                {collection}
              </span>
            </span>
            <div className="w-5 h-5 rounded-sm flex justify-center items-center">
              {spread === true ? <SVG.Up /> : <SVG.Down />}
            </div>
            <div
              className={`absolute bottom-0 left-0 z-50 ${
                spread === false ? "hidden" : "w-full"
              }`}
            >
              <DropDownMenu
                menuitems={collectionList}
                chooseItem={chooseItem}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectCollection;
