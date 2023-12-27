const ChartWatchListButton = (props) => {
  const idx= props.item.id;
  const name = props.item;
  return (
    <div
      onClick={()=>props.handleClick(idx)}
      className={`flex items-center py-2 px-4  border-b-[1px] border-b-[#c1c2c2]
     hover:bg-[#363645]`}>
      <p className="text-[#9f9fa8] text-base">{name.name}</p>
    </div>
  )
}

export default ChartWatchListButton 