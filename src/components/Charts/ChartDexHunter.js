import { Dex } from "../../common/IMG/Images";
const ChartDexHunter = () => {
  const handleDexClick = () => {
    window.open("https://app.dexhunter.io/", "_blank")
  }
  return (
    <>
      <div
        onClick={handleDexClick}
        className="flex justify-center items-center gap-1  p-3 rounded-3xl mt-1 cursor-pointer">
        <p className="text-xl font-normal text-white">Powered by</p>
        <img src={Dex} className=" w-[30px] h-[30px]" alt="icon"/>
        <p className="text-xl font-normal text-white">Dex</p>
        <p className="text-xl font-normal text-white">Hunter</p>
      </div>
    </>
  )
}

export default ChartDexHunter