import { useState } from "react";

const Navbar = () => {
  const [selected, setSelected] = useState("Tokens");

  const clicked = (e) => {
    setSelected(e.target.name);
  };

  return (
    <div className="flex justify-end items-center -mt-6">
      <div className="bg-[#142028] rounded-[10px]">
        <button
          type="button"
          name="Tokens"
          onFocus={clicked}
          className={`duration-500 cursor-pointer sm:px-4 px-2 py-1 lg:h-8 text-sm text-[#9f9fa8] hover:text-[#fff] mr-2 ${
            selected === "Tokens"
              ? "rounded-[10px] bg-[#3a4956] text-white"
              : ""
          }`}
        >
          Tokens
        </button>
        <button
          type="button"
          name="NFTs"
          onFocus={clicked}
          className={`duration-500 cursor-pointer sm:px-4 px-2 py-1 text-sm text-[#9f9fa8] hover:text-[#fff] lg:h-8
          ${
            selected === "NFTs" ? "rounded-[10px] bg-[#3a4956] text-white" : ""
          }`}
        >
          NFTs
        </button>
      </div>
    </div>
  )
}

export default Navbar;