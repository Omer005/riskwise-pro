import Content from "./Content";
import SummaryTrade from "./SummaryTrade";

const Table = (props) => {
  return (
    <div className="">
      <SummaryTrade />
      <Content selectCollection={props.selectCollection} />
    </div>
  );
};
export default Table;
