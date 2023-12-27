const Token_NFTs = () => {
  return (
    <div className="flex justify-between space-x-6 lg:px-8 lg:py-4">
      <div className="flex flex-col justify-center items-center space-y-2">
        <span className="text-white text-center">Token Held</span>
        <div className="flex justify-center items-center lg:w-14 lg:h-14 w-10 h-10 rounded-full lg:bg-[#3a4956] bg-[#142028]">
          <span className="text-white">33</span>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center space-y-2">
        <span className="text-white text-center">NFTs Held</span>
        <div className="flex justify-center items-center lg:w-14 lg:h-14 w-10 h-10 rounded-full lg:bg-[#3a4956] bg-[#142028]">
          <span className="text-white">0</span>
        </div>
      </div>
    </div>
  );
};

export default Token_NFTs;
