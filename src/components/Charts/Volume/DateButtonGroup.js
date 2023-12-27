import { useState } from "react"

const DateButtonGroup = (props) => {
  const { dateData } = props
  const [datas, setDatas] = useState(dateData)
  const handleClick = (_idx) => {
    const newData = dateData.map((item, idx) => {
      if (idx === _idx) { item.active = true }
      else item.active = false;
      return item
    })
    setDatas(newData)
  }
  return (
    <div
      className={`flex items-center justify-between space-x-2 w-[150px] h-[25px] rounded-lg ${props.bg ? props.bg : "bg-[#142028]"}`}>
      {datas.map((item, idx) => {
        return (
          <span
            onClick={() => handleClick(idx)}
            key={idx}
            className={`flex justify-center items-center w-10 h-[25px] text-xs cursor-pointer hover:text-white hover:bg-[#3a4956] hover:rounded-lg duration-500 ${item.active ? "bg-[#3a4956] rounded-lg text-white" : "text-[#9f9fa8]"}`}>{item.date}</span>
        )
      })}
    </div>
  )
}
export default DateButtonGroup