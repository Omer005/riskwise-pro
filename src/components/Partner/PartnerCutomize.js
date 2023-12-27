
import { useState } from "react"
import ChartSwapHeader from "../Charts/ChaerSwapHeader";
import { toastNotification } from "../ToastNTF";
import { CopyToClipboard } from 'react-copy-to-clipboard';

const PartnerCutomize = () => {
  const CopiedCode = () => {
    setCopied(true)
    toastNotification("Code copied to clipboard", "success", 5000)
  };
  const IframeCopied = () => {
    setCopied(true)
    toastNotification("iframe code copied to clipboard  ", "success", 5000);
  }
  function copyTextToClipboardModernAPI(text) {
    // Use the modern Clipboard API
    navigator.clipboard.writeText(text)
      .then(function () {
        console.log("Text successfully copied to clipboard");
      })
      .catch(function (err) {
        console.error("Unable to copy text to clipboard", err);
      });
  }
  const [copied, setCopied] = useState(false)

  return (
    <div className="flex flex-col py-4 px-2 gap-8 bg-[#142028] bg-opacity-80  rounded-2xl mt-6 mb-6" >
      <div className="flex justify-center items-center">
        <p className="text-white text-2xl font-sans font-normal">Customize your swap</p>
      </div>
      <div className="flex justify-around">
        {/* <button
          onClick={CopiedCode}
          className="bg-yellow-300 opacity-70 hover:opacity-100 px-10 py-2 rounded-xl">
          <p className="text-black text-lg font-medium">Copy Code</p>
        </button> */}
        <div className="bg-yellow-300 opacity-70 hover:opacity-100 px-10 py-2 rounded-xl cursor-pointer">
          <CopyToClipboard
            text="Customize your swap"
            onCopy={CopiedCode}>
            <span className="text-black text-lg font-medium">Copy Code</span>
          </CopyToClipboard>
        </div>
        <div className="bg-yellow-300 opacity-70 hover:opacity-100 px-10 py-2 rounded-xl cursor-pointer">
          <CopyToClipboard
            text="Customize your IFRAME"
            onCopy={IframeCopied}>
            <span className="text-black text-lg font-medium">Copy iframe</span>
          </CopyToClipboard>
        </div>
      </div>
      <div className="sm:w-[450px] w-[360px]">
        <ChartSwapHeader />
      </div>
    </div>

  )
}
export default PartnerCutomize