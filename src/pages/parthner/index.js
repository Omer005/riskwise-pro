import { useState } from "react";
import PartnerProfile from "../../components/Partner/PartnerProfile";
import PartnerCutomize from "../../components/Partner/PartnerCutomize";
import PartnerDashBoard from "../../components/Partner/PartnerDashBoard";
const Partner = () => {
  const [isActiveProfile, setIsActiveProfile] = useState(true);
  const [isActiveCustom, setIsActiveCustom] = useState(false);
  const [isActiveDash, setIsActiveDash] = useState(false);
  const handleClick = (value) => {
    if (value === "profile") {
      setIsActiveProfile(true);
      setIsActiveCustom(false);
      setIsActiveDash(false)
    }
    if (value === "customize") {
      setIsActiveProfile(false);
      setIsActiveCustom(true);
      setIsActiveDash(false);
    }
    if (value === "dashboard") {
      setIsActiveProfile(false);
      setIsActiveCustom(false);
      setIsActiveDash(true);
    }
  }
  return (
    <div className="flex flex-col items-center justify-center w-full h-full pt-10 ">
      {/* Header */}
      <div className="flex items-center w-[344px] h-[54px] rounded-[21px] relative bg-[#142028] font-proximaSemiBold text-md ">
        <button
          onClick={() => handleClick("profile")}
          className={`w-[125px] z-[1] relative  text-[#9f9fa8] text-sm font-medium transition-all  transform duration-75 ${isActiveProfile ? "bg-[#3a4956] h-[50px] w-[130px] rounded-[18px] text-white" : ""} `}>PROFILE</button>
        <button
          onClick={() => handleClick("customize")}
          className={`w-[125px] z-[1] relative  text-[#9f9fa8] text-sm font-medium transition-all  transform duration-75 ${isActiveCustom ? "bg-[#3a4956] h-[50px] w-[130px] rounded-[18px] text-white" : ""} `}>CUSTOMIZE</button>
        <button
          onClick={() => handleClick("dashboard")}
          className={`w-[125px] z-[1] relative  text-[#9f9fa8] text-sm font-medium transition-all  transform duration-75 ${isActiveDash ? "bg-[#3a4956] h-[50px] w-[130px] rounded-[18px] text-white" : ""} `}>DASHBOARD</button>
      </div>
      {isActiveProfile && <PartnerProfile />}
      {isActiveCustom && <PartnerCutomize />}
      {isActiveDash && <PartnerDashBoard />}

    </div>
  );
};

export default Partner;
