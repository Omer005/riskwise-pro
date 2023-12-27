import Iusd from "../Trending/Iusd";
import Wmt from "../Trending/Wmt";
import Lenfi from "../Trending/Lenfi";
import Snek from "../Trending/Snek";
import Lag from "../Trending/Lag";
import Agix from "../Trending/Agix";
import Hungry from "../Trending/Hungry";
import ToolHeads from "../Trending/ToolHeads";
import ApeSociety from "../Trending/ApeSociety";
import Tappy from "../Trending/Tappy";
import Goofy from "../Trending/Goofy";
import Book from "../Trending/Book";


const HomeBodyLarge = () => {
  return (
    <>
      <div className="flex justify-between w-full gap-6 bg-[#142028] rounded-2xl">
        <div className="p-3 grid lg:grid-cols-2 flex-col h-full w-full ">
          <div className="flex flex-col ">
            <Iusd />
            <Wmt />
            <Lenfi />
          </div>
          <div className="sm:flex sm:flex-col hidden">
            <Snek />
            <Lag />
            <Agix />
          </div>
          <div className=""></div>
        </div>
        <div className="flex items-center justify-center">
          <div className="flex items-center lg:w-[2px] w-0 h-[150px] bg-[#3a4956]"></div>
        </div>
        <div className="p-3  grid lg:grid-cols-2 flex-col h-full  w-full " >
          <div className="flex flex-col ">
            <Hungry />
            <ToolHeads />
            <ApeSociety />
          </div>
          <div className="sm:flex sm:flex-col hidden ">
            <Tappy />
            <Goofy />
            <Book />
          </div>
          <div className=""></div>
        </div>

      </div>

    </>
  )
}
export default HomeBodyLarge;