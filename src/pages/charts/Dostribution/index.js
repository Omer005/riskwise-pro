import ChartSmallHeader from "../../../components/Charts/ChartSmallHeader";
import useMedia from "../../../common/mediaQuery";
import { useState, useEffect } from "react";
import ProLanding from "../../../components/Pro/ProLanding";
import ChartDistribution from "../../../components/Charts/Distribution/ChartDistribution";
import { useSelector } from "react-redux";
import ChartSmallHeaderDirect from "../../../components/Charts/ChartSmallHeaderDirect";
const Distribution = () => {
  const [x, setX] = useState(0);
  const { isWalletConnected } = useSelector((state) => state.auth);
  useEffect(() => {
    const animate = () => {
      const currentX = x;
      const newX = currentX + 10;
      setX(newX);
      requestAnimationFrame(animate);
    };

    // Call the animate function once to start the animation
    animate();
  }, []);
  const usemedia = useMedia();
  const IsLarge = usemedia.useIsLarge;
  return (

    <div className="h-full w-full relative pt-10" >
      <div className="bg-[#121218] flex justify-center items-center rounded-lg w-fit  lg:gap-4 gap-1 cursor-pointer">
        {IsLarge ? (<ChartSmallHeaderDirect />) : (<ChartSmallHeader />)}
      </div>
      {isWalletConnected ? (<ChartDistribution />) : (<ProLanding />)}

    </div>
  )
}

export default Distribution;