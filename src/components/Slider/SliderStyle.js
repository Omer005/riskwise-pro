import { Slider } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomSlider = styled(Slider)(({ barcolor, height, ctrcolor, ctrwidth, ctrheight }) => ({
  color: barcolor || "#43E319",
  height: height || 8,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: ctrheight || 24,
    width: ctrwidth || 24,
    backgroundColor: ctrcolor || "#fff",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&:before": {
      display: "none",
    },
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    color:"black",
    width: 30,
    height: 30,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: barcolor || "#43E319",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&:before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
    },
    '& .MuiSlider-valueLabel': {
      color: 'black', // Specify your desired color here
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
}));

export default CustomSlider;