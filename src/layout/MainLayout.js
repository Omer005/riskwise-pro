import React from "react";
import MainContentContainer from "../common/MainContentContainer";
import TopNavbar from "../components/navbar/TopNavbar";
import Header from "../components/header/Header";
import useMedia from "../common/mediaQuery";
function MainLayout(props) {
  const { children } = props;
  const IsLarge = useMedia();
  const isActive = IsLarge.useIsLarge;

  return (
    <div className="relative min-w-screen min-h-screen bg-[#232629] bg-opacity-10">
      <div className="absolute my-component"></div>
      {/* <div className="test"> */}
        {isActive ? <TopNavbar /> : ""}
        <Header />
        <MainContentContainer>{children}</MainContentContainer>
      {/* </div> */}
    </div>
  );
}

export default MainLayout;
