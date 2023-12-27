const data = [6.26, 11.03];

const StateBar = () => {
  const token = data[0];
  const NFTs = data[1];

  const lengthToken = (data[0] / (data[0] + data[1])) * 100;

  return (
    <div className="space-y-2 md:w-[28%] w-full">
      <div className="flex justify-between items-baseline text-white text-md">
        Buy/Sell
      </div>
      <div className="flex w-full">
        <div
          className="h-1 bg-gradient-to-r from-yellow-500 via-yellow-500 to-[#14141a] rounded-full"
          style={{ width: `${lengthToken}%` }}
        ></div>
        <div
          className="w-full h-1 bg-gradient-to-l from-red-500 via-red-500 to-[#14141a] rounded-full"
          style={{ width: `${100 - lengthToken}%` }}
        ></div>
      </div>
      <div className="flex justify-between items-baseline">
        <div className="text-[12px] text-green-500 whitespace-nowrap">
          {token + "M ₳"}
        </div>
        <div className="text-[12px] text-red-500 whitespace-nowrap">
          {NFTs + "M ₳"}
        </div>
      </div>
    </div>
  );
};

export default StateBar;
