import TopSection from "../tradeHistory/topSection";
import { useState } from "react";
import Table from "./mintTable";
const MintHistory = () => {
  const [selectCollection, setSelectCollection] = useState("All")

  const filter = (value) => {
    setSelectCollection(value)
  }
  return (
    <>
      <TopSection filter={filter} />
      <Table />
    </>
  );
};

export default MintHistory;