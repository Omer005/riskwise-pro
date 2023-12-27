import { useState } from "react";
import * as SVG from "../../../common/Icons";

const createArray = (pageNum) => {
  const array = [];
  let idx = 0;
  for (idx = 0; idx < pageNum; idx++) array.push(idx);
  return array;
};

const Pagination = (props) => {
  const pageNum = Math.floor(parseInt(props.number) / 20) + 1;
  const array = createArray(pageNum);
  const [currentPage, setCurrentPage] = useState(array[0]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleItem = (_idx) => {
    array.map((item, idx) => {
      if (_idx === idx) {
        setCurrentPage(item);
        // TODO API
      }
    });
  };

  const handleBack = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
    // TODO API
  };

  const handleNext = () => {
    if (currentPage < pageNum - 1) setCurrentPage(currentPage + 1);
    // TODO API
  };

  return (
    <div className="flex items-center justify-center mt-8 mb-24 gap-3">
      <div className="relative min-w-[50px]" onClick={toggleMenu}>
        <div className="flex items-center justify-between rounded-xl border-2 border-[#555d6a] gap-2 px-2 cursor-pointer">
          <span className="text-white text-sm p-1">{currentPage + 1}</span>
          <span className="p-1">{isOpen ? <SVG.Up /> : <SVG.Down />}</span>
        </div>
        {isOpen && (
          <ul className="absolute h-[90px] shadow-lg bg-black focus:outline-none text-center mt-1 left-0 right-0 overflow-y-scroll z-30 hidePageScrollbar">
            {array.map((item, idx) => (
              <li
                key={idx}
                onClick={() => handleItem(idx)}
                className="border-b-[1px] border-[#555555] border-opacity-30 hover:bg-[#272733] cursor-pointer "
              >
                <span className="text-xs text-[#c1c2c2] text-center hover:text-white duration-300 hover:scale-110">
                  {item + 1}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="flex items-center justify-center">
        <span className="text-white text-sm">of {pageNum} pages</span>
      </div>
      <div className="flex items-center justify-center">
        <span
          className="rounded-tl-xl rounded-bl-xl border-2 border-[#555d6a] p-2"
          onClick={handleBack}
        >
          {currentPage === 0 ? <SVG.Left begin="true" /> : <SVG.Left />}
        </span>
        <span
          className="rounded-tr-xl rounded-br-xl border-2 border-[#555d6a] p-2"
          onClick={handleNext}
        >
          {currentPage === pageNum - 1 ? (
            <SVG.Right end="true" />
          ) : (
            <SVG.Right />
          )}
        </span>
      </div>
      <div className="flex items-center justify-center">
        <span className="text-white text-sm">
          Showing wallets {20 * currentPage + 1} to {20 * (currentPage + 1)} of{" "}
          {props.number}
        </span>
      </div>
    </div>
  );
};

export default Pagination;
