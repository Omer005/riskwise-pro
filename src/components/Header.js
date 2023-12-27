import HeaderButton from "./HeaderButton";
import HeaderData from "./HeaderData";
import HeaderSearch from "./HeaderSearch";

const Header = () => {
  return (
    <div className="relative text-white pt-8 pl-[70px] w-full">
      <HeaderData/>
      <HeaderSearch/>
      <HeaderButton/>
    </div>
  );
};

export default Header;
