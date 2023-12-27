import AllTime from "./AllTime";
import Daily from "./Daily";
import Hourly from "./Hourly";

const Section = () => {
  return (
    <div className="lg:bg-gradient-to-b lg:from-[#142028] lg:to-[#0b1217] bg-[#0b1217] 2xl:w-[80%] xl:w-[70%] lg:w-[60%] h-full rounded-2xl p-4 space-y-4">
      <div className="">
        <AllTime />
      </div>
      <div className="2xl:flex 2xl:flex-row 2xl:space-x-4 2xl:space-y-0 flex flex-col space-x-0 space-y-4">
        <div className="w-full">
          <Daily />
        </div>
        <div className="w-full">
          <Hourly />
        </div>
      </div>
    </div>
  );
};

export default Section;
