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
import { registerValidation } from "@/app/utils/validation/registerValidation";
import { AccountRegister } from "@/app/types/auth";

interface stateLoginProps {
  isLogin: boolean;
  setIsLogin: (value: boolean) => void;
}

const RegisterForm: React.FC<stateLoginProps> = ({ isLogin, setIsLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const initValues = {
    fullName: "",
    email: "",
    password: "",
    gender: "male",
    isAgree: false,
  };

  const handleResigter = (values: AccountRegister) => {
    console.log(values);
  };
  return (
    <div
      className={`z-[10] p-[50px] absolute top-[10px] w-full h-full  ${
        isLogin ? "-translate-x-full" : "translate-x-0"
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
        validationSchema={registerValidation}
        onSubmit={handleResigter}
      >
        {({ values, handleSubmit, setFieldValue }) => (
          <Form onSubmit={handleSubmit}>
            <p className="text-[40px] text-[#9F7A5F] font-semibold text-center mb-[15px]">
              Đăng ký
            </p>
            <div className="w-full mb-[10px]">
              <label className="text-black text-[15px] mb-[10px]">Họ tên</label>
              <Field
                type="text"
                name="fullName"
                placeholder="Nhập họ và tên đầy đủ"
                className="text-black text-[15px] h-[45px] w-full rounded-[10px] border-[1px] shadow-gray-300 border-gray-300 shadow-md focus:border-none focus:outline-none focus:outline-green-200 focus:shadow-none focus:shrink px-[15px]"
              />
              <ErrorMessage
                name="fullName"
                component="div"
                className="text-[12px] text-red-500"
              />
            </div>
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

            <div className=" flex justify-between mb-[10px]">
              <div className="flex">
                {values.gender === "male" ? (
                  <BiSolidCheckboxChecked className="text-[22.5px] text-[#9F7A5F] mr-[5px]" />
                ) : (
                  <BiCheckbox
                    className="text-[22.5px] text-[#9F7A5F] mr-[5px]"
                    onClick={() => setFieldValue("gender", "male")}
                  />
                )}
                <p className="text-black text-[15px]">Nam</p>
              </div>
              <div className="flex">
                {values.gender === "female" ? (
                  <BiSolidCheckboxChecked className="text-[22.5px] text-[#9F7A5F] mr-[5px]" />
                ) : (
                  <BiCheckbox
                    className="text-[22.5px] text-[#9F7A5F] mr-[5px]"
                    onClick={() => setFieldValue("gender", "female")}
                  />
                )}
                <p className="text-black text-[15px]">Nữ</p>
              </div>
              <div className="flex">
                {values.gender === "other" ? (
                  <BiSolidCheckboxChecked className="text-[22.5px] text-[#9F7A5F] mr-[5px]" />
                ) : (
                  <BiCheckbox
                    className="text-[22.5px] text-[#9F7A5F] mr-[5px]"
                    onClick={() => setFieldValue("gender", "other")}
                  />
                )}
                <p className="text-black text-[15px]">Khác</p>
              </div>
            </div>
            <div className="flex mb-[10px]">
              {values.isAgree === true ? (
                <BiSolidCheckboxChecked
                  className="text-[25px] text-[#9F7A5F] mr-[5px]"
                  onClick={() => setFieldValue("isAgree", false)}
                />
              ) : (
                <BiCheckbox
                  className="text-[25px] text-[#9F7A5F] mr-[5px]"
                  onClick={() => setFieldValue("isAgree", true)}
                />
              )}
              <p className="text-black text-[15px]">
                Tôi đồng ý với các điều khoản và chính sách của House.com
              </p>
            </div>
            <p className="text-black text-[15px] text-center mb-[10px]">Hoặc</p>
            <div className="flex justify-center mb-[10px]">
              <FaFacebook className="text-[#1976D2] cursor-pointer text-[24px] mr-[11px]" />
              <FcGoogle className="text-[24px] cursor-pointer" />
            </div>
            <button
              type="submit"
              disabled={!values.isAgree}
              className={`bg-[#9F7A5F] hover:bg-[#985e35] cursor-pointer w-full h-[50px] flex justify-center items-center rounded-[10px] text-white text-[20px] font-semibold ${
                !values.isAgree ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              Đăng ký
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterForm;
