const Portfolio = (props) => {
  const { menu } = props;
  const {size}=props;
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 106.992 108.005" width={`${size? "26" : "15"}`}><path id="Path_23429" data-name="Path 23429" d="M13401.285,9898.354c.027,3.552,0,51.807,0,51.807s-46.321,10.23-45.917,11.484,13.76,32.646,45.917,30.938,45-33.361,45.132-42.423C13446.747,9899.272,13401.258,9894.8,13401.285,9898.354Z" transform="translate(-13342.427 -9887.65)" fill="none" stroke={`${menu === "portfoliohome" ? "#000" : "#fff"}`} strokeWidth="6"></path><path id="Path_23430" data-name="Path 23430" d="M13390.873,9891.859c.259,3.979,1.623,48.737,0,50.618s-41.375,9.326-43.412,9.627-5.095-27.98,5.527-43.163S13390.614,9887.881,13390.873,9891.859Z" transform="translate(-13342.427 -9887.65)" fill="none" stroke={`${menu === "portfoliohome" ? "#000" : "#e5e5e5"}`} strokeWidth="6"></path></svg>
    </>
  )
}
export default Portfolio;