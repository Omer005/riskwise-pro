const NavbarHeaderLarge = () => {

  return (
    <>
      <div className="2xl:flex hidden">
        <div
          className={` mb-6 mt-2 w-[44px]  h-[44px] cursor-pointer`}>
          <img
            src="/static/images/icons/Icon.png" className="" alt="taptool" />
        </div>
        <div
          className={`duration-300 transition-all flex font-semibold text-base items-center ml-1 pb-3   $`}
        >
          <div>
            <span className="text-white text-sm tracking-wider">RiskWisePro</span>
            <div className="h-[2px] mt-1 bg-gradient-to-r from-yellow-500 to-yellow-200 "></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarHeaderLarge;
