const ChartProgress = (props) => {
  const { progress } = props;
  return (
    <>
      <div className="flex justify-start rounded-[50px] w-full mt-1 bg-[#4d5359]">
        <div className={` h-1 rounded-[50px] w-[30%] bg-yellow-400`}></div>
      </div>
    </>
  )
}
export default ChartProgress;