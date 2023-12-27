import TokensSummary from "./TokensSummary";

const Content = (props) => {
  return (
    <div className="">
      <TokensSummary selectCollection={props.selectCollection} />
    </div>
  )
}

export default Content;