import { useState, useEffect } from "react";

const WalletClass = (props) => {
  const [visible, setVisible] = useState(false);
  const [handleClass, setHandleClass] = useState("hidden");

  const handleShow = () => {
    setVisible(!visible);
  };

  useEffect(() => {
    if (visible === true) {
      setHandleClass("flex justify-center");
    } else setHandleClass("hidden");
  }, [visible]);

  return (
    <div
      className="flex justify-center items-center z-20"
      onMouseEnter={handleShow}
      onMouseLeave={handleShow}
    >
      <div className="relative flex flex-col items-center justify-center space-y-[2px] bg-[#121218] rounded-2xl px-1 py-[2px]">
        <div className="flex justify-center items-center w-9 h-5">{props.source}</div>
        <span className="bg-black text-white text-[11px] rounded-lg px-[6px] py-[2px]">
          {props.value}
          <div className={handleClass}>
            <div className="absolute -top-4 p-[6px] rounded-[10px] bg-[rgba(92,94,105,.3)] backdrop-blur-[10px] text-[#fff] whitespace-nowrap">
              {props.description}
            </div>
          </div>
        </span>
      </div>
    </div>
  );
};

export default WalletClass;
