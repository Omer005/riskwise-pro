const ScrollBar = ({ pageNum, select, handlePageChange, click }) => {

  return (
    <div className="w-full rounded-xl">
      <div className="flex justify-between items-center">
        <div className="flex justify-start items-center duration-300">
          <button
            type="button"
            name="Holdings"
            onClick={() => handlePageChange(0)}
            className={`duration-500 cursor-pointer px-2 py-1 text-sm text-[#9f9fa8] hover:text-[#fff] ${
              pageNum === 0 ? "text-white" : ""
            }`}
          >
            Holdings
          </button>
          <button
            type="button"
            name="Volume"
            onClick={() => handlePageChange(1)}
            className={`duration-500 cursor-pointer px-2 py-1 text-sm text-[#9f9fa8] hover:text-[#fff]
          ${pageNum === 1 ? "text-white" : ""}`}
          >
            Volume
          </button>
        </div>
        <div
          className={`${
            pageNum === 1 ? "flex" : "hidden"
          } justify-start items-center duration-300`}
        >
          <button
            type="button"
            name="Asset"
            onFocus={click}
            className={`duration-500 cursor-pointer px-2 py-1 text-[10px] text-[#9f9fa8] hover:text-[#fff] ${
              select === "Asset" ? "text-white rounded-2xl bg-[#0b1217]" : ""
            }`}
          >
            Asset
          </button>
          <button
            type="button"
            name="Market"
            onFocus={click}
            className={`duration-500 cursor-pointer px-2 py-1 text-[10px] text-[#9f9fa8] hover:text-[#fff]
          ${select === "Market" ? "text-white rounded-2xl bg-[#0b1217]" : ""}`}
          >
            Market
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScrollBar;
