import { useState, useEffect } from "react";

import * as SVG from "../../../../../common/Icons";
import Logo1 from "../../../../../common/Logo/logo1";
const CopyToken = () => {
  const token = "stake1uxdytgqashzgrqnnyhk2q5me27lsfq8vxl56mfe3kpjqp5qg88gw0";

  const [copy, setCopy] = useState(false);
  const [showCopied, setShowCopied] = useState(false);
  const [visible, setVisible] = useState(false);
  const [handleClass, setHandleClass] = useState("hidden");

  const handleShow = () => {
    setVisible(!visible);
  };

  const mouseDown = () => {
    setCopy(!copy);
  };

  const mouseUp = () => {
    /* to copy token */
    setCopy(!copy);
    const copyToken = document.createElement("input");
    copyToken.value = token;
    copyToken.setAttribute("readonly", "");
    copyToken.style.position = "absolute";
    copyToken.style.left = "-99999px";
    document.body.appendChild(copyToken);
    copyToken.select();
    document.execCommand("copy");
    document.body.removeChild(copyToken);

    /* to show description */
    setShowCopied(true);
    setTimeout(() => {
      setShowCopied(false);
    }, 3000);
  };

  useEffect(() => {
    if (visible === true) {
      setHandleClass(
        "absolute -top-8 bg-[rgba(92,94,105,.3)] backdrop-blur-[10px] rounded-md px-[6px] py-1 text-[12px] text-[#fff]"
      );
    } else setHandleClass("hidden");
  }, [visible]);

  return (
    <div className="flex justify-start items-center space-x-2 text-[#939393]">
      <Logo1 />
      <span className="">
        {token.substring(0, 10) +
          "..." +
          token.substring(token.length - 4, token.length)}
      </span>
      <div
        id="copy"
        className={`relative flex justify-center ${copy === true ? "mt-1" : ""
          }`}
        onMouseDown={mouseDown}
        onMouseUp={mouseUp}
        onMouseEnter={handleShow}
        onMouseLeave={handleShow}
      >
        <SVG.Copy />
        <div className={`${handleClass}`}>
          {showCopied === false ? (
            <span className="">Copy</span>
          ) : (
            <span className="">Copied</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default CopyToken;
