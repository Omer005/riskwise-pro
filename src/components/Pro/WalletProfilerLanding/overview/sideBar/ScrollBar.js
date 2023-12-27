import React, { useState, useRef } from 'react';
import ScrollBarHeader from './ScrollBarHeader';
import ScrollBarBody from './ScrollBarBody';

const ScrollBar = () => {
  const sliderRef = useRef(null);

  const [pageNum, setPageNum] = useState(0);
  const [select, setSelect] = useState("Asset");

  const handleClickNext = (index) => {
    sliderRef.current.slickGoTo(index)
  }

  const click = (e) => {
    setSelect(e.target.name);
  };

  return (
    <div className="w-full lg:bg-gradient-to-b lg:from-[#3a4956] lg:to-[#0b1217] bg-[#3a4956] rounded-xl p-1 my-4">
      <ScrollBarHeader handlePageChange={handleClickNext} pageNum={pageNum} click={click} select={select} />
      <ScrollBarBody ref={sliderRef} setPageNum={setPageNum} select={select} />
    </div>
  )
}

export default ScrollBar;