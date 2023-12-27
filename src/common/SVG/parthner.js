const Parthner = (props) => {
  const { menu } = props;
  return (
    <>
      <svg
      className={`${menu==="partnerhome" ? "stroke-current ":"stroke-white"}`}
      xmlns="http://www.w3.org/2000/svg" width="18" height="23" viewBox="0 0 22 22" fill="none"><path d="M1 12.9999C1 9.22871 1 7.34306 2.17157 6.17148C3.34315 4.99991 5.22876 4.99991 9 4.99991H13C16.7712 4.99991 18.6569 4.99991 19.8284 6.17148C21 7.34306 21 9.22871 21 12.9999C21 16.7711 21 18.6568 19.8284 19.8283C18.6569 20.9999 16.7712 20.9999 13 20.9999H9C5.22876 20.9999 3.34315 20.9999 2.17157 19.8283C1 18.6568 1 16.7711 1 12.9999Z" strokeWidth="2"></path><path d="M15 4.99994C15 3.11432 15 2.17151 14.4142 1.58573C13.8284 0.999939 12.8856 0.999939 11 0.999939C9.1144 0.999939 8.17157 0.999939 7.58579 1.58573C7 2.17151 7 3.11432 7 4.99994" strokeWidth="2"></path><path d="M7 9.21991H15.01"  strokeWidth="2" strokeLinecap="round"></path></svg>
    </>
  )
}
export default Parthner;