const Progress = (props) => {
  const { menu } = props;
  const {percent} = props;
  return (
    <>
      <div className="flex justify-end rounded-[50px] w-[120%] mt-1 bg-[rgb(18,18,24)]">
        <div className={`h-1 rounded-[50px] w-[30%] bg-yellow-400 `}></div>
      </div>
    </>
  )
}
export default Progress;