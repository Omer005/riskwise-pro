import { useState } from "react";

const Account = () => {
  const [Email, setEmail] = useState("Default@gmail.com")
  const [userName, setUserName] = useState("Default");
  const [password, setPassword] = useState("*********");
  const [expireDay, setExpireDay] = useState(100);
  return (
    <div className="flex flex-col gap-6 items-center justify-center w-full h-full mt-10">
      <div className="flex flex-col gap-4 p-4 bg-[#142028] rounded-2xl sm:w-[550px] w-full">
        <div className="space-y-1">
          <p className="text-[#9f9fa8] text-sm font-normal">Email</p>
          <p className="text-white text-sm font-normal">{Email}</p>
        </div>
        <div className="flex justify-between items-center">
          <div className="space-y-1">
            <p className="text-[#9f9fa8] text-sm font-normal">UserName</p>
            <p className="text-white text-sm font-normal">{userName}</p>
          </div>
          <button className="bg-[#0b1217] px-3 py-1 text-[#9f9fa8] hover:text-white rounded-lg text-xs">Edit</button>

        </div>
        <div className="flex justify-between items-center">
          <div className="space-y-1">
            <p className="text-[#9f9fa8] text-sm font-normal">Password</p>
            <p
              type="password"
              className="text-white text-sm font-normal">{password}</p>
          </div>
          <button className="bg-[#0b1217] px-3 py-1 text-[#9f9fa8] hover:text-white rounded-lg text-xs">Change</button>

        </div>
        <div className="flex justify-between items-center">
          <div className="space-y-1">
            <p className="text-[#9f9fa8] text-sm font-normal">Account Type</p>
            <p
              type="password"
              className="text-white text-sm font-normal">RiskWisePro</p>
          </div>
          <div className=" px-3 py-1 text-white hover:text-white rounded-lg text-xs">{expireDay}days remaining</div>

        </div>

      </div>
      <div className="bg-[#142028] px-5 py-1 text-[#9f9fa8] hover:text-white cursor-pointer rounded-lg">
        SignOut
      </div>
    </div>
  );
};

export default Account;
