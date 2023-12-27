import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const MarkClass = (props) => {
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
      className="flex justify-center items-center z-20 cursor-pointer"
      onMouseEnter={handleShow}
      onMouseLeave={handleShow}
    >
      <Link to="/charts/token" target="_blank">
        <div className="relative flex flex-col items-center justify-center bg-[#121218] rounded-3xl px-1 py-[2px]">
          <div className="w-5 h-5">
            <img src={props.source} className={`w-5 ${props.round}`} />
          </div>
          <div className={handleClass}>
            <div className="absolute -top-7 py-[2px] px-2 rounded-[10px] bg-[rgba(92,94,105,.3)] backdrop-blur-[10px] text-sm text-[#fff] truncate">
              {props.description}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MarkClass;
