import { useState } from "react";
import { ownerHistoryData1 } from "./ownerHistoryData1";
import { ownerHistoryData2 } from "./ownerHistoryData2";
import { ownerHistoryData3 } from "./ownerHistoryData3";
import SimpleBar from "simplebar-react";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";

const OwnershipHistory = () => {
  const [data1] = useState(ownerHistoryData1.itemValue)
  return (
    <div className="space-y-4 sm:px-6 px-0 overflow-y-hidden mb-8">
      <div className="flex justify-start gap-4">
        <p className="text-white sm:text-xl text-sm font-normal">Click a Token</p>
        <p className="text-[#9f9fa8] sm:text-lg text-xs font-normal">to View its Full Wallet History</p>
      </div>
      <div className="flex flex-wrap gap-4 justify-between mb-4">
        <Card1 />
        <Card2 />
        <Card3 />
      </div>
    </div>
  );
};

export default OwnershipHistory;
