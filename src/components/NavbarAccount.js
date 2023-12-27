import * as SVG from "../common/Icons";
import { Link } from "react-router-dom";
const NavbarAccount = (props) => {
  const { menu } = props;
  const { isScale } = props;
  return (
    <>
      <div className={`h-9 rounded-lg transition-all duration-300  flex flex-col mb-8 justify-center items-center mt-auto
            ${menu === "account" ? "bg-gradient-to-r from-yellow-200 to-yellow-400" : ""}
             ${isScale ? "w-36 justify-start px-3" : "w-9  justify-center"}`}>
        <Link
          to="/account"
          className="flex cursor-pointer">
          <SVG.Account menu={menu} />
          <div className={`transition-all duration-300
                 ${menu === "account" ? "text-black" : "text-white"}
                ${isScale ? "opacity-100" : "hidden"}`} >
            <span className={`font-normal ml-3`}>Account</span>
          </div>
        </Link>
      </div>
    </>
  )

}
export default NavbarAccount;