
import { useState } from "react"
const PartnerProfile = () => {
  const [value, setValue] = useState("test")
  const [name, setName] = useState("");
  const [percent, setPercent] = useState("");
  const [token, setToken] = useState("")
  const [isChecked, setIsChecked] = useState(true)
  return (
    <div className="bg-[#142028] bg-opacity-80 p-6 rounded-2xl mt-6">
      <div className="flex mx-auto ">
        <p className="text-white text-xl font-medium tracking-wider">My Dapps</p>
      </div>
      {/*   Created Buttons */}
      <div className="flex justify-center mt-4">
        <button className="bg-[rgb(32,47,57)] hover:bg-[#3a4956] hover:bg-opacity-70 rounded-lg px-6 py-1 tracking-[1px] text-lg text-white font-medium">{value}</button>
      </div>
      {/* Description */}
      <div className="flex flex-col items-center mt-4">
        <p className="text-white text-xl font-medium tracking-wider">Earn with DexHunter</p>
        <p className="text-[#9f9fa8] text-[10px] font-medium tracking-wider">Get a % fee of total swap amount, min 1 ADA.</p>
        <p className="text-[#9f9fa8] text-[10px] font-medium tracking-wider">For custom % or other customizations, please contact us</p>
      </div>
      {/* Project Name and Percent */}
      <div className="flex gap-4 mt-4">
        <input
          style={{ overflowY: "hidden" }}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-[#142028] border-[1px] border-[#606063] focus:outline-none w-[250px] h-[50px] rounded-[30px] px-8 text-white placeholder:font-medium font-normal tracking-[1px] focus:border-yellow-400 focus:ring-1"
          placeholder="Project Name " />
        <div className="relative">
          <input
            type="text"
            maxLength={2}
            value={percent}
            onChange={(e) => setPercent(e.target.value)}
            className="relative bg-[#142028] border-[1px] border-[#606063] focus:outline-none w-[80px] h-[50px] rounded-[30px] pr-6 pl-4 text-white placeholder:font-medium font-normal tracking-[1px] focus:border-yellow-400 focus:ring-1 "
            placeholder="0.5 " />
          <p className="absolute right-3 top-[14px]  text-[#9f9fa8] font-medium">{"%"}</p>
          <p className="text-[#9f9fa8] text-[10px] font-medium tracking-wider mt-2">min 0.1% max 1%</p>
        </div>
      </div>
      {/* Fee Address */}
      <div className="flex flex-col gap-2 mt-4">
        <input
          style={{ overflowY: "hidden" }}
          type="text"
          value={token}
          onChange={(e) => setToken(e.target.value)}
          className="bg-[#142028] border-[1px] border-[#606063] focus:outline-none w-[360px] h-[50px] rounded-[30px] px-8 text-white placeholder:font-medium font-medium  focus:border-yellow-400 focus:ring-1"
          placeholder="Fee Address " />
        <div className="flex justify-end  pr-4">
          <p className="text-[#9f9fa8] text-[10px]">Fee Address</p>
        </div>
      </div>
      {/* CheckBox */}
      <div className="flex items-center gap-3">
        <input
          onClick={() => setIsChecked(!isChecked)}
          checked={isChecked}
          type="checkbox" className="myinput large" />
        <div className="flex">
          <p className="text-white text-xs">I accept the</p>
          <span className="text-yellow-400 cursor-pointer text-xs ml-1">Privacy Policy</span>
          <p className="text-white text-xs ml-1">and</p>
          <span className="text-yellow-400 text-xs cursor-pointer ml-1">Licensing Agreement</span>
        </div>
      </div>
      <div className="flex justify-center mt-6">
        <button className={`bg-yellow-300 ${isChecked?"":"opacity-70"}  px-5 py-2 rounded-2xl`}>
          <p className="text-base text-black font-medium">Create Partner</p>
        </button>
      </div>
    </div>

  )
}
export default PartnerProfile