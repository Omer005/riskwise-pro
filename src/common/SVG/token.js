const token = (props) => {
  return (
    <>
      <svg
        width="16"
        className="icon icon--token-search"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 17.22 15.81"
      >
        <path
          fill={`${props.active?"yellow":"#9f9fa8"}`}
          d="M5.54 4.79c-1.35 0-2.69-.28-3.92-.81-.44-.2-.84-.47-1.19-.79a1.001 1.001 0 01-.01-1.63C1.01 1 1.74.61 2.53.43 4.74-.22 7.1-.13 9.25.7c.48.19.92.46 1.31.8.49.32.63.98.3 1.47-.08.12-.18.22-.3.3-.75.64-1.66 1.06-2.64 1.21-.79.16-1.6.21-2.4.31M6.89 6.25c-.29.52-.55 1-.83 1.47-.07.1-.19.17-.32.18-1.64.07-3.27-.3-4.71-1.07-.74-.3-1.16-1.1-.97-1.87 2.08 1.13 4.47 1.59 6.83 1.3M6.79 14.12c-1.89.27-3.82-.03-5.54-.86-1.02-.52-1.31-1.03-1.19-2.01 1.17.69 2.48 1.12 3.83 1.26.58.07 1.17.05 1.75.1.17.01.34.1.45.23.25.39.45.8.7 1.28M.05 8.08c1.68.95 3.57 1.43 5.5 1.4v1.57c-.58-.05-1.19-.07-1.78-.16A6.795 6.795 0 01.85 9.85c-.64-.34-.97-1.07-.8-1.77M15.29 12.5c1.36-2.05.81-4.82-1.24-6.18 0 0-.01 0-.02-.01v-.02c-.39-.26-.82-.45-1.28-.56-.09-.03-.18-.05-.27-.07a3.6 3.6 0 00-1.18-.08c-.65.03-1.28.21-1.84.53-.4.21-.77.48-1.09.8-.6.61-1.01 1.38-1.17 2.22-.27 1.28.04 2.62.85 3.65.28.37.62.68 1.01.92.46.35.99.59 1.55.7.02 0 .05.02.07.02.46.1.93.12 1.4.05.7-.08 1.37-.32 1.96-.7l1.86 2.05 1.33-1.21-1.93-2.1zm-.61-1.55a3.09 3.09 0 01-1.98 2.13c-.07.04-.15.06-.22.08-.29.08-.59.12-.89.12-.1 0-.19 0-.29-.02-.02 0-.04 0-.05-.02-1.26-.13-2.31-1-2.69-2.2-.15-.41-.21-.86-.15-1.3.04-.36.13-.71.27-1.04.25-.53.64-.99 1.13-1.31.44-.31.96-.5 1.5-.55.08 0 .19-.02.29-.02.06 0 .12 0 .17.02.24 0 .48.04.72.12.25.07.48.16.7.29 1.29.73 1.91 2.26 1.5 3.68"
        ></path>
      </svg>
    </>
  );
};
export default token;