const ChartCompareElement = (props) => {
  const data = props.item;
   
  return (
      <div className="flex justify-between border-b-[1px] p-4 bg-[#0b1217] border-b-[#292929] ">
        <div className="flex  items-center gap-4  ">
          <div className="flex flex-col items-center justify-center">
            <img
              src={data?.imageURL}
              alt="iUSD"
              className="w-9 h-9 cursor-pointer "
            />
            <p className="text-white text-xs mt-1">{data?.name}</p>
          </div>
          <div className="flex flex-col items-start">
            <p className="text-sm font-medium text-[#9f9fa8]">₳Pooled : </p>
            <p className="text-sm font-medium text-[#9f9fa8]">24 Vol : </p>
            <p className="text-sm font-medium text-[#9f9fa8]">Price : </p>
          </div>
        </div>
        <div className="flex flex-col items-start ">
          <p className="text-sm font-normal text-white">{data?.price1} </p>
          <p className="text-sm font-normal text-white">{data?.price2}</p>
          <p className="text-sm font-normal text-white">{data?.price3}</p>
        </div>
      </div>

  )
}
export default ChartCompareElement