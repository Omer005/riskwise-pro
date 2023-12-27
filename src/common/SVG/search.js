const search = (props) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon--search"
        width="20"
        viewBox="0 0 17.43 17.63"
      >
        <g>
          <path
            fill={`${props.active === true ? "yellow" : "#9f9fa8"}`}
            d="M14.13 11.94a7.705 7.705 0 00-2.19-10.67A7.705 7.705 0 001.27 3.46a7.705 7.705 0 002.19 10.67 7.702 7.702 0 008.5-.02l3.19 3.52 2.28-2.09-3.3-3.61zm-6.4 1.37c-3.06 0-5.55-2.49-5.54-5.55 0-3.06 2.49-5.55 5.55-5.54a5.54 5.54 0 015.54 5.54c0 3.06-2.48 5.55-5.54 5.55"
          ></path>
        </g>
      </svg>
    </>
  );
};
export default search;
