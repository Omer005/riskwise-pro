import ProgressBar from "../ProgressBar";

const LeaderboardTable = (props) => {
  return (
    <tr
      id="tr"
      order={props.id}
      className="border-t-2 border-y-white text-sm cursor-pointer"
    >
      <td className="flex items-center sticky left-0 z-20 bg-[#142028] align-middle px-10 py-3 border-t-2 border-y-[#121218] pl-2">
        <span className="">{props.id + 1}</span>
        <img src={props.img} className="pl-6" />
        <span className="text-sm pl-4">{props.name}</span>
      </td>
      <td className="border-t-2 border-y-[#121218] text-center pr-6">
        <span className="float-right">{props.DEX} ₳</span>
        <br></br>
        <ProgressBar width="60" color="bg-yellow-400" />
      </td>
      <td className="border-t-2 border-y-[#121218] text-center pr-6">
        <span className="float-right">{props.Trades}</span>
        <br></br>
        <ProgressBar width="20" color="bg-yellow-400" />
      </td>
      <td className="border-t-2 border-y-[#121218] text-center pr-6">
        <span className="float-right">{props.Users}</span>
        <br></br>
        <ProgressBar width="20" color="bg-orange-400" />
      </td>
      <td className="border-t-2 border-y-[#121218] text-center pr-6">
        <span className="float-right"> {props.DAU}</span>
        <br></br>
        <ProgressBar width="20" color="bg-orange-400" />
      </td>
      <td className="border-t-2 border-y-[#121218] text-center pr-6">
        <span className="float-right"> {props.Fees} ₳</span>
        <br></br>
        <ProgressBar width="20" color="bg-yellow-400" />
      </td>
      <td className="border-t-2 border-y-[#121218] text-center pr-6">
        <span className="float-right">{props.TVL} ₳</span>
        <br></br>
        <ProgressBar width="20" color="bg-yellow-400" />
      </td>
      <td className="border-t-2 border-y-[#121218] align-middle px-6">
        <div className="flex justify-end">{props.Market1}₳</div>
        <div className="flex justify-end text-xs text-[#9f9fa8]">
          ${props.Market2}
        </div>
      </td>
      <td className="border-t-2 border-y-[#121218] text-center pr-6">
        <span className="float-right">{props.MCap}</span>
        <br></br>
        <ProgressBar width="20" color="bg-yellow-400" />
      </td>
      <td className="border-t-2 border-y-[#121218] text-center pr-6">
        <span className="float-right">{props.Volume}</span>
        <br></br>
        <ProgressBar width="20" color="bg-yellow-400" />
      </td>
    </tr>
  );
};

export default LeaderboardTable;
