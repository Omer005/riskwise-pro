import ChartInforList from "./ChartInforList";
import ChartInforButtons from "./ChartInforButtons";
import ChartCompare from "./ChartCompare";
const ChartInformation = () => {
  return (
      <div className="flex h-full w-full  justify-between rounded-2xl px-3 bg-[#142028] mt-8">
        {/* chart */}
        <div
          className="w-full h-full p-2 rounded-xl">
          <ChartInforList />
          <ChartInforButtons />
          <ChartCompare />
        </div>
      </div>
  )
}

export default ChartInformation