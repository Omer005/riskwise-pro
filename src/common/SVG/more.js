const More = (props) => {
  const menu =props.menu;
  return (
    <>
      <svg
      className={`${menu?"fill-yellow-400": "fill-white"} `}
      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512" width="16" height="16" ><path d="M64 360a56 56 0 100 112 56 56 0 100-112zm0-160a56 56 0 100 112 56 56 0 100-112zm56-104A56 56 0 108 96a56 56 0 10112 0z"></path></svg>
    </>
  )
}
export default More;