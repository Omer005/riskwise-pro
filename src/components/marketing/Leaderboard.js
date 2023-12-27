import * as SVG from "../../common/Icons";
import { leaderboard } from "./FakeData";
import LeaderboardTable from "./LeaderboardTable";

const Leaderboard = () => {
  return (
    <div className="w-full bg-[#142028] rounded-2xl">
      <div className="flex justify-between items-center p-2">
        <span className="text-white text-sm">Protocols</span>
        <div className="sm:flex hidden">
          <img
            src="/static/images/icons/Icon.png"
            alt="taptool"
            className="w-8"
          />
        </div>
      </div>
      <div className="overflow-x-auto text-white w-full hideScrollbar">
        <table className="w-full border-separate min-w-[1200px] mt-8 border-spacing-0 rounded-2xl px-2">
          <thead className="sticky bg-[#142028] z-101 box-border text-[#9f9fa8] w-full">
            <tr className="w-full">
              <th className="flex justify-start items-center sticky left-0 z-20 bg-[#142028] pl-2 py-2">
                <span className="">#</span>
                <span className="font-normal text-sm pl-6">Name</span>
              </th>
              <th className="font-normal text-sm xl:w-[9%] w-full text-right pr-6">
                DEX Volume
              </th>
              <th className="font-normal text-sm xl:w-[10%] w-full text-right pr-6">
                Trades
              </th>
              <th className="font-normal text-sm xl:w-[9%] w-full text-right pr-6">
                Users
              </th>
              <th className="flex justify-end items-center text-right pr-6">
                <span className="pr-1 font-normal text-sm">DAU</span>
                <SVG.Notification />
              </th>
              <th className="font-normal text-sm xl:w-[9%] w-full text-right pr-6">
                Fees
              </th>
              <th className="font-normal text-sm xl:w-[10%] w-full text-right pr-6">
                TVL
              </th>
              <th className="font-normal text-sm xl:w-[9%] w-full text-right pr-6">
                Market Cap
              </th>
              <th className="font-normal text-sm xl:w-[10%] w-full text-right pr-6">
                MCap/TVL
              </th>
              <th className="font-normal text-sm xl:w-[9%] w-full text-right pr-6">
                Volume/TVL
              </th>
            </tr>
          </thead>
          <tbody className="w-full">
            {leaderboard.map((item, id) => (
              <LeaderboardTable
                key={id}
                id={id}
                img={item.img}
                name={item.name}
                DEX={item.DEX}
                Trades={item.Trades}
                Users={item.Users}
                DAU={item.DAU}
                Fees={item.Fees}
                TVL={item.TVL}
                Market1={item.Market1}
                Market2={item.Market2}
                MCap={item.MCap}
                Volume={item.Volume}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
