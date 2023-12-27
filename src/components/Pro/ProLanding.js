import { risk } from "../../common/IMG/Images";

const ProLanding = (props) => {
  return (
    <div className="flex justify-center items-center w-full h-full p-12">
      <div className="flex flex-col w-full items-center justify-center gap-6">
        <div className="flex font-semibold gap-1">
          <span className="text-white text-2xl">Risk Wise</span>
          <span className="text-yellow-400 text-2xl">{props.text}</span>
        </div>
        <div className="w-[300px] h-[300px] rounded-[54px] overflow-hidden relative">
          <span className="bg-balck absolute" />
          <img alt="" src={risk} />
        </div>
        <div className="text-xl font-semibold text-center">
          <span className="text-[#f2f2f2]"> Buy Warthogs Brigade to access this </span>
          <span className="text-yellow-400">PRO</span>
          <span className="text-[#f2f2f2]"> feature</span>
        </div>
        <button
          className="bg-gradient-to-r from-yellow-200 to-yellow-400 text-sm font-medium rounded-xl px-8 py-2 cursor-pointer"
          onClick={() =>
            window.open(
              "https://www.jpg.store/collection/riskthewarthogsbrigade?tab=items",
              "_blank"
            )
          }
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProLanding;
