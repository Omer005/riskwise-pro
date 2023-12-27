const MainContentContainer = (props) => {
  const { children } = props;
  return <div className=" px-4  w-screen overflow-x-hidden">{children}</div>;
};

export default MainContentContainer;
