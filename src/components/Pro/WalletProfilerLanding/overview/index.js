import Section from "./section";
import SideBar from "./sideBar";

const Overview = () => {
  return (
    <div className="lg:flex lg:flex-row lg:space-x-8 lg:space-y-0 flex flex-col space-y-8">
      <SideBar />
      <Section />
    </div>
  );
};

export default Overview;