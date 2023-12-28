import { useState } from "react";
import { Link } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { Icon } from "../../common/IMG/Images";
import * as SVG from "../../common/Icons";
import { LOGIN } from "../../routes/routes";
import axios from "axios";
import { toastNotification } from "../../components/ToastNTF";
import { settoken } from "../../store/slices/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setloading] = useState(false);
  const [visibility, setVisibility] = useState(true);
  const [visibility2, setVisibility2] = useState(true);
  const [isAgree, setIsAgree] = useState(false);

  const initialValues = {
    email: "",
    name: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid Email").required("Input is required *"),
    name: Yup.string()
      .test(
        "len",
        "Must contain 5 - 20 characters",
        (val) =>
          val && val.toString().length >= 5 && val.toString().length <= 20
      )
      .required("Input is required *"),
    password: Yup.string()
      .required("Input is required *")
      .min(8, "Pasword must be 8 or more characters")
      .matches(
        /(?=.*[a-z])(?=.*[A-Z])\w+/,
        "Password ahould contain at least one uppercase and lowercase character"
      )
      .matches(/\d/, "Password should contain at least one number")
      .matches(
        /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/,
        "Password should contain at least one special character"
      ),
    password2: Yup.string()
      .required("Input is required *")
      .oneOf([Yup.ref("password"), null], "Password does not match"),
  });

  const handleRegister = (formValue) => {
    setloading(true);
    const { name, email, password } = formValue;
    console.log(name);
    axios
      .post("https://riskwise-pro-backend.vercel.app/api/users/register", {
        username: name,
        email: email,
        password: password,
      })
      .then((response) => {
        setloading(false);

        dispatch(settoken(response?.data?.token));
        localStorage.setItem("token", response?.data?.token);

        toastNotification(response?.data?.message, "success", 5000);
        navigate("/");
      })
      .catch((error) => {
        setloading(false);

        // console.log(error.response.data.error, "ppppp");

        toastNotification(error?.response?.data?.error, "error", 5000);
      });
  };

  const handleViewPassword = () => {
    const password = document.getElementById("password");
    const type =
      password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    setVisibility(!visibility);
  };

  const handleViewPassword2 = () => {
    const password2 = document.getElementById("password2");
    const type =
      password2.getAttribute("type") === "password" ? "text" : "password";
    password2.setAttribute("type", type);
    setVisibility2(!visibility2);
  };

  return (
    <div className="w-full h-[80vh]">
      <div className="flex w-full h-full p-2">
        <div className="flex justify-center items-center lg:w-1/2 w-full h-full rounded-tl-[50px] rounded-bl-[50px]">
          <div className="bg-[#142028] rounded-2xl lg:w-[350px] w-full p-6">
            <div className="text-[#fff] text-3xl mb-6 block">Welcome Back</div>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleRegister}
            >
              <Form className="flex flex-col text-[#9f9fa8] gap-2">
                <div className="">
                  <label htmlFor="email" className="text-xs">
                    Email
                  </label>
                  <Field
                    type="email"
                    name="email"
                    placeholder="email@example.com"
                    className="w-full bg-[#121218] focus:outline-none rounded-lg text-[#fff] px-4 py-1 text-sm"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-xs w-full text-red-500"
                  />
                </div>
                <div className="">
                  <label htmlFor="name" className="text-xs">
                    Username
                  </label>
                  <Field
                    type="text"
                    name="name"
                    placeholder="5 - 20 Characters"
                    className="w-full bg-[#121218] focus:outline-none rounded-lg text-[#fff] px-4 py-1 text-sm"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-xs w-full text-red-500"
                  />
                </div>
                <div className="">
                  <label htmlFor="password" className="text-xs">
                    Password
                  </label>
                  <div className="flex items-center bg-[#121218] rounded-lg">
                    <Field
                      id="password"
                      type="password"
                      name="password"
                      placeholder="8 Characters Minimum"
                      className="w-full bg-[#121218] focus:outline-none rounded-lg py-1 px-3 text-[#fff] text-sm"
                    />
                    <div
                      className="pr-2 cursor-pointer"
                      onClick={handleViewPassword}
                    >
                      {!visibility ? <SVG.VisibilityOff /> : <SVG.Visibility />}
                    </div>
                  </div>
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-xs w-full text-red-500"
                  />
                </div>
                <div className="">
                  <label htmlFor="password2" className="text-xs">
                    Confirm Password
                  </label>
                  <div className="flex items-center bg-[#121218] rounded-lg">
                    <Field
                      id="password2"
                      type="password"
                      name="password2"
                      className="w-full bg-[#121218] focus:outline-none rounded-lg py-1 px-3 text-[#fff] text-sm"
                    />
                    <div
                      className="pr-2 cursor-pointer"
                      onClick={handleViewPassword2}
                    >
                      {!visibility2 ? (
                        <SVG.VisibilityOff />
                      ) : (
                        <SVG.Visibility />
                      )}
                    </div>
                  </div>
                  <ErrorMessage
                    name="password2"
                    component="div"
                    className="text-xs w-full text-red-500"
                  />
                </div>
                <div className="flex w-full h-6 items-center py-[2px] gap-2 my-4">
                  <div
                    className={`flex justify-center items-center h-full rounded-2xl relative cursor-pointer ${
                      isAgree ? "bg-yellow-400" : "bg-white"
                    } `}
                  >
                    <span
                      onClick={() => setIsAgree(false)}
                      className="flex justify-center w-6 cursor-pointer text-yellow-400"
                    >
                      a
                    </span>
                    <span
                      onClick={() => setIsAgree(true)}
                      className="flex justify-center w-6 cursor-pointer text-[#fff]"
                    >
                      b
                    </span>
                    <span
                      className={`w-4 h-4 rounded-full bg-[#1A1A1A] absolute duration-300 ${
                        isAgree ? "translate-x-3" : "-translate-x-3"
                      }`}
                    ></span>
                  </div>
                  <span className="text-xs font-semibold text-white">
                    I agree with the terms and privacy policy
                  </span>
                </div>
                <div className="mt-[15px]">
                  <button
                    type="submit"
                    disabled={!isAgree}
                    className={`w-full h-[34px] rounded-lg bg-yellow-400 text-black text-sm duration-300 ${
                      isAgree ? "bg-opacity-100" : "bg-opacity-60"
                    }`}
                  >
                    {loading ? "Loading..." : "Create Account"}
                  </button>
                </div>

                <div className="flex justify-center text-xs mt-3">
                  <span className="mr-[2px]">Do you have an account?</span>
                  <Link to={LOGIN} type="button" className="text-yellow-400">
                    Sign in
                  </Link>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
        <div className="md:flex hidden justify-center items-center lg:w-1/2 w-full h-full rounded-tr-[50px] rounded-br-[50px] ">
          <img alt="market mark" src={Icon} className="w-[500px]"></img>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
