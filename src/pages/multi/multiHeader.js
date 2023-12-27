import * as SVG from "../../common/Icons";
const MultiHeader = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <p className="text-white text-xl font-normal">Mutli Chart</p>
      <p className="text-white text-sm font-normal">Find and add up to ten pairs in this view to display them at once. </p>
      <div className="flex gap-4 items-center">
        <SVG.Notification />
        <p className="text-[#9f9fa8] text-sm font-normal"> Note that you can drag any element to a different position </p>
      </div>
    </div>
  );
};

export default MultiHeader;
