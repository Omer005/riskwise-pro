const Markets = (props) => {
    const{menu} =props;
    return (
        <>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="icon icon--market-outline" xmlns="http://www.w3.org/2000/svg"><g id="Group_16565" data-name="Group 16565" transform="translate(-4 -4)"><path id="Path_23714" data-name="Path 23714" d="M17.757,7.193A7.5,7.5,0,0,0,4.649,13.5M19.3,10.274A7.5,7.5,0,0,1,6.114,16.649" fill="none" stroke={`${menu === "market-overviewhome" ? "#000":"#e5e5e5"}`} strokeWidth="1"></path><path id="Path_23715" data-name="Path 23715" d="M18.125,5.5v2h-2" fill="none" stroke={`${menu === "market-overviewhome" ? "#000":"#e5e5e5"}`} strokeWidth="1"></path><path id="Path_23716" data-name="Path 23716" d="M7.875,16.5h-2v2" fill="none" stroke={`${menu === "market-overviewhome" ? "#000":"#e5e5e5"}`} strokeWidth="1"></path><path id="Path_23717" data-name="Path 23717" d="M12,8v8" fill="none" stroke={`${menu === "market-overview" ? "#000":"#e5e5e5"}`} strokeWidth="1"></path><path id="Path_23718" data-name="Path 23718" d="M13.81,10.152a1.778,1.778,0,0,0-1.8-1.12,1.621,1.621,0,0,0-1.77,1.471c0,1.864,3.71.906,3.71,3.069,0,.782-.94,1.445-1.941,1.445a1.932,1.932,0,0,1-1.9-1.274" fill="none" stroke={`${menu === "market-overviewhome" ? "#000":"#e5e5e5"}`} strokeWidth="1"></path></g></svg>
            </>
    )
}
export default Markets