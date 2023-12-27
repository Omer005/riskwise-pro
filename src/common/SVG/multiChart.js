const multiChart = (props) => {
  const { menu } = props
  return (
    <>
      <svg
      className={`${menu === "multihome" ? "fill-[#000]":"fill-white"}`}
      _ngcontent-ng-c2991227223=""  xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true" viewBox="0 0 20 20" width="13" transform=""><path fillRule="evenodd" clipRule="evenodd" d="M2.5 0C1.11929 0 0 1.11929 0 2.5V6.38889C0 7.7696 1.11929 8.88889 2.5 8.88889H6.38889C7.7696 8.88889 8.88889 7.7696 8.88889 6.38889V2.5C8.88889 1.11929 7.7696 0 6.38889 0H2.5ZM2.5 11.1111C1.11929 11.1111 0 12.2304 0 13.6111V17.5C0 18.8807 1.11929 20 2.5 20H6.38889C7.7696 20 8.88889 18.8807 8.88889 17.5V13.6111C8.88889 12.2304 7.7696 11.1111 6.38889 11.1111H2.5ZM11.1111 2.5C11.1111 1.11929 12.2304 0 13.6111 0H17.5C18.8807 0 20 1.11929 20 2.5V6.38889C20 7.7696 18.8807 8.88889 17.5 8.88889H13.6111C12.2304 8.88889 11.1111 7.7696 11.1111 6.38889V2.5ZM14.8611 11.4722C15.2753 11.4722 15.6111 11.808 15.6111 12.2222V14.1111H17.5C17.9142 14.1111 18.25 14.4469 18.25 14.8611C18.25 15.2753 17.9142 15.6111 17.5 15.6111H15.6111V17.5C15.6111 17.9142 15.2753 18.25 14.8611 18.25C14.4469 18.25 14.1111 17.9142 14.1111 17.5V15.6111H12.2222C11.808 15.6111 11.4722 15.2753 11.4722 14.8611C11.4722 14.4469 11.808 14.1111 12.2222 14.1111H14.1111V12.2222C14.1111 11.808 14.4469 11.4722 14.8611 11.4722Z" ></path></svg>
    </>
  )
}
export default multiChart;