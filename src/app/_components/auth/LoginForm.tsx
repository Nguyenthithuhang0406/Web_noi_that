/* eslint-disable*/
"use client";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { BiCheckbox } from "react-icons/bi";
import { BiSolidCheckboxChecked } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoCloseSharp } from "react-icons/io5";
import { loginValidation } from "@/app/utils/validation/loginValidation";
import { AccountLogin } from "@/app/types/auth";
import { RiFacebookFill } from "react-icons/ri";
import { signIn, useSession } from "next-auth/react";

interface stateLoginProps {
  isLogin: boolean;
  setIsLogin: (value: boolean) => void;
  setIsForgot: (value: boolean) => void;
  setIsLoginOther: (value: boolean) => void;
  isLoginOther: boolean;
}

const LoginForm: React.FC<stateLoginProps> = ({
  isLogin,
  setIsLogin,
  setIsForgot,
  setIsLoginOther,
  isLoginOther,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSave, setIsSave] = useState(false);

  // login with fb
  const { data: session } = useSession();
  if (session) {
    console.log(session);
  }
  // ---
  
  const initValues = {
    email: "",
    password: "",
  };

  const handleLogin = (values: AccountLogin) => {
    console.log(values);
  };

  const handleClickForgotPassword = () => {
    setIsLogin(false);
    setIsForgot(true);
  };

  return (
    <div
      className={`z-[10] p-[50px] absolute top-[10px] w-full h-full ${
        isLogin ? "translate-x-full" : "translate-x-0"
      } duration-300 ease-in-out transform transition-transform`}
    >
      <div
        onClick={() => setIsLogin(!isLogin)}
        className="w-[25px] cursor-pointer h-[25px] bg-[#9F7A5F] hover:bg-[#985e35] rounded-[4px] flex justify-center items-center absolute top-[-6px] right-[5px]"
      >
        <IoCloseSharp className="text-white text-[15px]" />
      </div>
      <Formik
        initialValues={initValues}
        validationSchema={loginValidation}
        onSubmit={handleLogin}
      >
        {({ values, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <p className="text-[40px] text-[#9F7A5F] font-semibold text-center mb-[15px]">
              Đăng nhập
            </p>
            {isLoginOther && (
              <div className="mt-[10px]">
                <div
                  onClick={() => signIn("facebook")}
                  className="w-full h-[50px] bg-[#1976D2] hover:bg-[#438dd6e9] hover:shadow-lg flex items-center shadow-gray-300 shadow-md rounded-[10px] text-white text-[15px] mb-[19px] cursor-pointer"
                >
                  <div className="h-[35px] w-[35px] flex justify-center items-center bg-white rounded-[50%] mx-[19px]">
                    <RiFacebookFill className="h-[30px] w-[30px] text-[#1976D2]" />
                  </div>
                  <p>Đăng nhập bằng Facebook</p>
                </div>
                <div className="w-full hover:shadow-lg h-[50px] flex items-center shadow-gray-500 shadow-md rounded-[10px] rounded-[10px]e text-[15px] mb-[19px] cursor-pointer">
                  <FcGoogle className="text-[35px] mx-[19px]" />
                  <p className="text-[#1976D2]">Đăng nhập bằng Google</p>
                </div>
                <p className="text-center mt-[14px] mb-[14px] text-black">
                  Hoặc
                </p>
              </div>
            )}
            <div className="w-full mb-[10px]">
              <label className="text-black text-[15px] mb-[10px]">Email</label>
              <Field
                type="text"
                name="email"
                placeholder="Nhập địa chỉ email"
                className="h-[45px] text-black text-[15px] w-full rounded-[10px] border-[1px] shadow-gray-300 border-gray-300 shadow-md focus:border-none focus:outline-none focus:outline-green-200 focus:shadow-none focus:shrink px-[15px]"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-[12px] text-red-500"
              />
            </div>
            <div className="w-full mb-[10px] relative">
              <label className="text-black text-[15px] mb-[10px]">
                Mật khẩu
              </label>
              <Field
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Nhập password"
                className="h-[45px] w-full text-black text-[15px] rounded-[10px] border-[1px] shadow-gray-300 border-gray-300 shadow-md focus:border-none focus:outline-none focus:outline-green-200 focus:shadow-none focus:shrink px-[15px]"
              />
              <div
                className="absolute top-[38px] right-[15px]"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </div>
              <ErrorMessage
                name="password"
                component="div"
                className="text-[12px] text-red-500"
              />
            </div>
            <div className="flex mb-[10px]">
              {isSave === true ? (
                <BiSolidCheckboxChecked
                  className="text-[25px] text-[#9F7A5F] mr-[5px]"
                  onClick={() => setIsSave(false)}
                />
              ) : (
                <BiCheckbox
                  className="text-[25px] text-[#9F7A5F] mr-[5px]"
                  onClick={() => setIsSave(true)}
                />
              )}
              <p className="text-black text-[15px]">Lưu tài khoản</p>
            </div>
            {!isLoginOther && (
              <div>
                <p className="text-black text-[15px] text-center mb-[10px]">
                  Hoặc
                </p>
                <div className="flex justify-center mb-[10px]">
                  <FaFacebook
                    className="text-[#1976D2] cursor-pointer text-[24px] mr-[11px]"
                    onClick={() => setIsLoginOther(true)}
                  />
                  <FcGoogle
                    className="text-[24px] cursor-pointer"
                    onClick={() => setIsLoginOther(true)}
                  />
                </div>
              </div>
            )}
            <button
              type="submit"
              className={`bg-[#9F7A5F] hover:bg-[#985e35] cursor-pointer w-full h-[50px] flex justify-center items-center rounded-[10px] text-white text-[20px] font-semibold mb-[10px]`}
            >
              Đăng nhập
            </button>
            <p
              className="text-black text-[15px] mb-[10px] hover:underline text-center hover:text-gray-700 hover:cursor-pointer"
              onClick={handleClickForgotPassword}
            >
              Quên mật khẩu ?
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
