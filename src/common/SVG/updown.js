const UpDown = (props) => {
  const { id, rotate, active } = props;
  return (
    <>
      <svg
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="16px"
        className={`${!!rotate ? "rotate-180" : ""} duration-200`}
        id={id}
      >
        <path
          fill={`${active ? "#ffffff" : "#9b9b9b"}`}
          d="M695.04 609.706667L512 793.173333l-183.04-183.466666a42.666667 42.666667 0 0 0-60.586667 60.586666l213.333334 213.333334a42.666667 42.666667 0 0 0 60.586666 0l213.333334-213.333334a42.666667 42.666667 0 0 0-60.586667-60.586666zM328.96 414.293333L512 230.826667l183.04 183.466666a42.666667 42.666667 0 0 0 60.586667 0 42.666667 42.666667 0 0 0 0-60.586666l-213.333334-213.333334a42.666667 42.666667 0 0 0-60.586666 0l-213.333334 213.333334a42.666667 42.666667 0 0 0 60.586667 60.586666z"
        ></path>
      </svg>
    </>
  );
};

export default UpDown;