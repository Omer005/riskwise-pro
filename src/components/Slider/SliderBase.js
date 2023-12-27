import React, { useState } from "react";
import CustomSlider from "./SliderStyle";


const SliderBase = ({
  betValue,
  setBetValue,
  barColor,
  ctrColor,
  height,
  ctrWidth,
  ctrHeight,
  defaultValue,
  min,
  max,
}) => {
  const handleValue = (e) => {
    setBetValue(e.target.value);
  };
  return (
    <CustomSlider
      value={betValue}
      onChange={handleValue}
      barcolor={barColor}
      ctrcolor={ctrColor}
      height={height}
      ctrwidth={ctrWidth}
      ctrheight={ctrHeight}
      valueLabelDisplay="auto"
      aria-label="base slider"
      defaultValue={defaultValue || 10}
      min={min || 1}
      max={max || 100}

    />
  );
};

export default SliderBase;