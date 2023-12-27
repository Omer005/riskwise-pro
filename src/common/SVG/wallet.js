const wallet = (props) => {
  return (
    <>
      <svg
        width="16"
        className="icon icon--wallet-search"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14.45 12.8"
      >
        <path
          fill={`${props.active?"yellow":"#9f9fa8"}`}
          d="M12.95 2.66H3.92c-.11 0-.22-.04-.3-.12a.423.423 0 01.3-.72h8.7v-.04A2.176 2.176 0 0010.1.02L1.79 1.5C.8 1.68.07 2.5 0 3.5v7.13c0 1.2.97 2.17 2.17 2.16h10.12c.28 0 .56-.06.82-.16l-1.6-1.76c-.67.45-1.46.69-2.27.69-2.26 0-4.09-1.84-4.09-4.1s1.84-4.09 4.1-4.09a4.097 4.097 0 013.43 6.33l1.61 1.76c.11-.26.16-.55.16-.83v-5.9c0-.94-.61-1.78-1.51-2.07"
        ></path>
        <circle fill={`${props.active?"yellow":"#9f9fa8"}`} cx="9.45" cy="7.41" r="3"></circle>
      </svg>
    </>
  );
};
export default wallet;
