import ProPageTopTokens from "./ProPageTopTokens";
import ProPageTopNFTProjects from "./ProPageTopNFTProjects";
import ProPageTopMovers from "./ProPageTopMovers";
import ProPageHotContracts from "./ProPageHotContracts";
import ProPagePoliciesMinting from "./ProPagePoliciesMinting";
import ProPageTopLPFlows from "./ProPageTopLPFlows";
import ProPageTopTokenTransfers from "./ProPageTopTokenTransfers";
import ProPageTopTokenTrades from "./ProPageTopTokenTrades";
import ProPageTopNFTTrades from "./ProPageTopNFTTrades";
import useMedia from "../../common/mediaQuery";
const ProPage = (props) => {
  const media = useMedia();
  const IsLarge = media.useIsLarge;
  const { duration } = props;
  return (
    <>
      <div
        className="flex  flex-wrap justify-between items-center gap-4  w-full h-full rounded-2xl p-4 overflow-hidden ">
        {IsLarge ?
          (<>
            <ProPageTopTokens />
            <ProPageTopNFTProjects />
            <ProPageTopMovers />
            <ProPageHotContracts />
            <ProPagePoliciesMinting />
            <ProPageTopLPFlows />
            <ProPageTopTokenTransfers />
            <ProPageTopTokenTrades />
            <ProPageTopNFTTrades />
          </>)
          : (duration === "Top NFT Trades" ? <ProPageTopNFTTrades /> : (duration === "Top NFT Projects" ? <ProPageTopNFTProjects /> : (duration === "Top Tokens" ? <ProPageTopTokens /> : (duration === "Top Movers" ? <ProPageTopMovers /> : (duration === "Top Tokens" ? <ProPageTopTokens /> : (duration === "Hot Contracts" ? <ProPageHotContracts /> : (duration === "Top Tokens" ? <ProPageTopTokens /> : (duration === "Policies Minting" ? <ProPagePoliciesMinting /> : (duration === "Top LP Flows" ? <ProPageTopLPFlows /> : (duration === "Top Token Transfers" ? <ProPageTopTokenTransfers /> : (duration === "Top Token Trades" ? <ProPageTopTokenTrades /> : (""))))))))))))}
      </div>
    </>
  );
};

export default ProPage;
