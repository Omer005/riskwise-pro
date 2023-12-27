import HomeBodyLarge from "./HomeBodyLarge";
import HomeBodySmall from "./HomeBodySmall";
import  useMedia from "../../common/mediaQuery"
const Homebody = () => {
  const isSmall =useMedia();
  const isActive =isSmall.useIsSmall;
  return (
    <>
      {isActive ?
        (<HomeBodyLarge />) : (<HomeBodySmall />)
      }
    </>
  );
};
export default Homebody;