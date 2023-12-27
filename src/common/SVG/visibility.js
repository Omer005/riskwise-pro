const Visibility = (props) => {
  const {color} =props;
  return (
    <>
      <svg id="togglePassword" className="icon icon--eye" xmlns="http://www.w3.org/2000/svg" width="22" viewBox="0 0 16 10.786"><path fill={`${color?"#9f9fa8":"yellow"}`} id="Icon_ionic-md-eye-2" data-name="Icon ionic-md-eye" d="M10.25,7.383a8.6,8.6,0,0,0-8,5.393,8.63,8.63,0,0,0,16,0A8.6,8.6,0,0,0,10.25,7.383Zm0,8.989a3.6,3.6,0,1,1,3.636-3.6A3.626,3.626,0,0,1,10.25,16.372Zm0-5.754a2.157,2.157,0,1,0,2.182,2.157A2.177,2.177,0,0,0,10.25,10.619Z" transform="translate(-2.25 -7.383)"></path></svg>
    </>
  )
}

export default Visibility;