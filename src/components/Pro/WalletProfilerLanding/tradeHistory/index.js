import { useState } from "react";

import Navbar from "./Navbar";
import TopSection from "./topSection";
import Table from "./table";

const TradeHistory = () => {
const [selectCollection, setSelectCollection] = useState("All")

const filter = (value) => {
  setSelectCollection(value)
}

  return (
    <div className="">
      <div className="md:block hidden">
        <Navbar />
      </div>
      <TopSection filter={filter} />
      <Table selectCollection={selectCollection} />
    </div>
  );
};

export default TradeHistory;
