import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { Icon } from "../../common/IMG/Images";
import * as SVG from "../../common/Icons";
import { REGISTER } from "../../routes/routes";

const Login = () => {
  const [visibility, setVisibility] = useState(true);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid Email").required("email is required"),
    password: Yup.string().required("password is required"),
  });

  const handleLogin = (formValue) => {
    // const { email, password } = formValue;
  };

  const handleViewPassword = () => {
    const password = document.getElementById("password");
    const type =
      password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    setVisibility(!visibility);
  };

  return (
    <div className="w-full h-[80vh]">
      <div className="flex w-full h-full p-2">
        <div className="flex justify-center items-center lg:w-1/2 w-full h-full rounded-tl-[50px] rounded-bl-[50px]">
          <div className="bg-[#142028] rounded-2xl lg:w-[350px] w-full p-6">
            <div className="text-[#fff] text-3xl">Welcome Back</div>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleLogin}
            >
              <Form className="flex flex-col text-[#9f9fa8] gap-2">
                <div className="">
                  <div className="space-y-[2px]">
                    <label htmlFor="email" className="text-xs">
                      Email
                    </label>
                    <Field
                      autoComplete="off"
                      type="email"
                      name="email"
                      className="w-full bg-[#121218] focus:outline-none rounded-lg  text-[#fff] px-4 py-1 text-sm"
                    />
                    <ErrorMessage
                      name="email"
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
                        className="w-full bg-[#121218] focus:outline-none rounded-lg py-1 px-3 text-[#fff] text-sm"
                      />
                      <div
                        className="pr-2 cursor-pointer"
                        onClick={handleViewPassword}
                      >
                        {!visibility ? (
                          <SVG.VisibilityOff />
                        ) : (
                          <SVG.Visibility />
                        )}
                      </div>
                    </div>
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-xs w-full text-red-500"
                    />
                  </div>
                </div>
                <div className="mt-[30px]">
                  <div className="flex justify-between">
                    <span></span>
                    <button type="button" className="text-xs text-yellow-400">
                      Forgot password?
                    </button>
                  </div>
                  <div className="mt-[15px]">
                    <button
                      type="submit"
                      className="w-full h-[34px] rounded-lg bg-gradient-to-r from-yellow-200 to-yellow-400 text-black text-sm"
                    >
                      Sign in
                    </button>
                  </div>

                  {/* we have to here add part to connect walle by using useLocation hook */}

                  {useLocation().pathname === "/login?backref=portfolio" ? (
                    <div>
                      <div className="flex justify-center items-center mt-[15px] text-[#fff] text-sm">
                        Or
                      </div>
                      <div className="mt-[15px]">
                        <button
                          type="submit"
                          className="w-full h-[34px] rounded-lg bg-gradient-to-r from-yellow-200 to-yellow-400 text-black text-sm"
                        >
                          Connect Wallet
                        </button>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  <div className="flex justify-center text-xs mt-3">
                    <span className="mr-[2px]">Don't have an account?</span>
                    <Link
                      to={REGISTER}
                      type="button"
                      className="text-yellow-400"
                    >
                      Sign up
                    </Link>
                  </div>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
        <div className="md:flex hidden justify-center items-center lg:w-1/2 w-full h-full rounded-tr-[50px] rounded-br-[50px]">
          <img alt="market mark" src={Icon} className="w-[500px]"></img>
        </div>
      </div>
    </div>
  );
};

export default Login;
