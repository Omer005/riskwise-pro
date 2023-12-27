const Right = (props) => {
  const { end } = props;
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 298 511.93"
        width="18"
        className="w-2"
        fill={`${end ? "#9f9fa8" : "#ffffff"}`}
      >
        <path d="M70.77 499.85c-16.24 16.17-42.53 16.09-58.69-.15-16.17-16.25-16.09-42.54.15-58.7l185.5-185.03L12.23 70.93c-16.24-16.16-16.32-42.45-.15-58.7 16.16-16.24 42.45-16.32 58.69-.15l215.15 214.61c16.17 16.25 16.09 42.54-.15 58.7l-215 214.46z"></path>
      </svg>
    </>
  );
};

export default Right;
