import * as IMG from "../IMG/Images"
export const Whale = () => {
  return (
    <>
      <div className="flex w-8 h-8 items-center">
        <img
          src={IMG.logo1}
          height={30}
          width={30}
          className=""
          alt="logo" />
      </div>
    </>
  );
};

export const SwordFish = () => {
  return (
    <>
     <div className="flex w-8 h-8 items-center">
        <img
          src={IMG.logo2}
          height={30}
          width={30}
          className=""
          alt="logo" />
      </div>
    </>
  );
};
