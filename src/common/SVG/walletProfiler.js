const WalletProfiler = (props) => {
  const { menu } = props;
  const { size } = props;

  return (
    <>
      <svg className={`${menu === "profilerhome" ? "fill-[#000]" : "fill-[#e5e5e5]"}`} viewBox="0 0 24.952 23.122"
        xmlns="http://www.w3.org/2000/svg"
        width={`${size? "28" : "15"}`}>
        <path d="M23.872 10.027H6.83a3.457 3.457 0 00-3.455 3.45v9.673a3.457 3.457 0 003.455 3.459h17.042a3.457 3.457 0 003.455-3.455v-9.677a3.457 3.457 0 00-3.455-3.45z" data-name="Path 23526"></path><path d="M20.354 4.557L6.829 7.2c-1.033.231-2.533 1.273-2.533 2.539a3.628 3.628 0 012.821-1.094h16.525v-1.18a3.306 3.306 0 00-.8-2.165h0a2.723 2.723 0 00-2.488-.743z" data-name="Path 23527"></path>
      </svg>
    </>
  )
}
export default WalletProfiler;