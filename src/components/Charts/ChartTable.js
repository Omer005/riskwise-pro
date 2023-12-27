import ChartTableHeader from "./ChartTableHeader"
import * as IMG from "../../common/IMG/Images";
import ChartTableContent from "./ChartTableContent";
import SimpleBarReact from "simplebar-react";
import 'simplebar-react/dist/simplebar.min.css';

const ChartTable = (props) => {
  const isRisk =props.isRisk;
  const handleButtonClick =props.handleButtonClick
  return (
    <div
      style={{ background: "#0b1217", borderRadius: "10px" }}
      className="bg-[#0b1217] h-full rounded-xl mt-8 p-4">
      
      {/* Table Header */}
      <ChartTableHeader />
        {/* Chart Table Content */}
        <SimpleBarReact className='h-[450px]  '>
          {IMG.ChartData.map((item, index) =>
            <ChartTableContent key={index} props={item} isRisk={isRisk} handleButtonClick={handleButtonClick} />)}
        </SimpleBarReact>
    </div>
  )
}

export default ChartTable
