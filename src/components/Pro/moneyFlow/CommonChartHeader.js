import { useState, useEffect } from "react";
import DropDownMenu from "../../marketing/DropDownMenu";
import * as SVG from "../../../common/Icons";

const ChartHeader = (props) => {
  const [duration, setDuration] = useState(props.durationList[0].value);
  const [spread, setSpread] = useState(false);

  const [visible, setVisible] = useState(false);
  const [handleClass, setHandleClass] = useState("hidden");

  const beSpread = () => {
    setSpread(!spread);
  };

  const chooseItem = (item) => {
    setDuration(item.value);
  };

  const { durationList } = props;

  const handleShow = () => {
    setVisible(!visible);
  };

  useEffect(() => {
    if (visible === true) {
      setHandleClass("flex justify-center");
    } else setHandleClass("hidden");
  }, [visible]);

  return (
    <div className="">
      <div className="flex justify-between items-center p-2 pb-8">
        <div className="flex justify-center items-center sm:space-x-5 space-x-1 z-10">
          <div className="flex items-center text-white text-sm space-x-2">
            <span className="whitespace-nowrap">{props.title}</span>
            <div className="lg:block hidden">
              <span className="text-[#9f9fa8]">{props.descrip}</span>
            </div>
            <div
              className="relative max-lg:hidden"
              onMouseEnter={handleShow}
              onMouseLeave={handleShow}
            >
              <div className="absolute -bottom-2">
                <SVG.Notification />
              </div>
              <div className={handleClass}>
                <div className="absolute bottom-2 p-[6px] rounded-[10px] bg-[rgba(92,94,105,.3)] backdrop-blur-[10px] text-[12px] text-[#fff] whitespace-pre text-center z-[100]">
                  {props.notification}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          {props.children}
          <div
            className="relative flex items-center bg-[#121218] px-3 mr-3 h-7 rounded-[10px] cursor-pointer z-[9999]"
            id="spread"
            onClick={beSpread}
          >
            <span onClick={beSpread} className="pr-2 text-[#9f9fa8] text-sm">
              {duration}
            </span>
            <div className="bg-black w-5 h-5 rounded-sm flex justify-center items-center">
              {spread === true ? <SVG.Up /> : <SVG.Down />}
            </div>
            <div
              className={`absolute bottom-0 left-0 z-50 ${
                spread === false ? "hidden" : "w-full"
              }`}
            >
              <DropDownMenu menuitems={durationList} chooseItem={chooseItem} />
            </div>
          </div>
          <div className="md:flex hidden">
            <img
              src="/static/images/icons/Icon.png"
              alt="taptool"
              className="w-8"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartHeader;
