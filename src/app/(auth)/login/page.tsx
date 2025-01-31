"use client";
import Image from "next/image";
import React, { useState } from "react";
import line1 from "../../../../public/images/line1.png";
import line2 from "../../../../public/images/line2.png";
import LoginForm from "@/app/_components/auth/LoginForm";
import RegisterForm from "@/app/_components/auth/RegisterForm";
import NoRegister from "@/app/_components/auth/NoRegister";
import NoLogin from "@/app/_components/auth/NoLogin";
import NoForgot from "@/app/_components/auth/NoForgot";
import FormSendEmail from "@/app/_components/auth/FormSendEmail";
import ResetPassword from "@/app/_components/auth/ResetPassword";
import NoReset from "@/app/_components/auth/NoReset";
import ResetSuccess from "@/app/_components/auth/ResetSuccess";
import ConfirmOTP from "@/app/_components/auth/ConfirmOTP";
import RegisterSuccess from "@/app/_components/auth/RegisterSuccess";

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isForgot, setIsForgot] = useState(false);
  const [isResetPassword, setIsResetPassword] = useState(false);
  const [isResetSuccess, setIsResetSuccess] = useState(false);
  const [isConfirmOTP, setIsConfirmOTP] = useState(false);
  const [isRegisterSuccess, setIsRegisterSuccess] = useState(false);
  const [isLoginOther, setIsLoginOther] = useState(false);

  return (
    <div className="flex items-center justify-center xs:px-[50px] xm:px-[50px] sm:px-[50px] md:px-0 w-full h-screen bg-[#9F7A5F]">
      <div
        className={`flex w-[835px] h-[633px] ${
          isResetSuccess || isConfirmOTP || isRegisterSuccess ? "hidden" : ""
        }`}
      >
        <div
          className={`w-1/2 xs:hidden xm:hidden sm:hidden md:block h-full bg-[url("/images/bg1.png")] bg-cover bg-center relative`}
        >
          <div className={`w-full h-full relative`}>
            <Image
              src={line1}
              alt="line1"
              className="absolute top-[40px] left-[25px]"
            />
            <Image
              src={line2}
              alt="line2"
              className="absolute top-[23px] left-[40px]"
            />
            <Image
              src={line1}
              alt="line1"
              className="absolute bottom-[40px] left-[25px]"
            />
            <Image
              src={line2}
              alt="line2"
              className="absolute top-[23px] right-[40px]"
            />
          </div>
          {isLogin && !isForgot && !isResetPassword && (
            <LoginForm
              isLogin={isLogin}
              setIsLogin={setIsLogin}
              setIsForgot={setIsForgot}
              setIsLoginOther={setIsLoginOther}
              isLoginOther={isLoginOther}
            />
          )}
          {!isLogin && !isForgot && !isResetPassword && (
            <NoRegister isLogin={isLogin} setIsLogin={setIsLogin} />
          )}
          {isForgot && !isLogin && !isResetPassword && <NoForgot />}
          {isResetPassword && !isLogin && !isForgot && <NoReset />}
        </div>
        <div
          className={`md:w-1/2 xs:w-full xm:w-full sm:w-full h-full relative bg-white`}
        >
          {isLogin && !isForgot && !isResetPassword && (
            <NoLogin isLogin={isLogin} setIsLogin={setIsLogin} />
          )}
          {!isLogin && !isForgot && !isResetPassword && (
            <RegisterForm
              isLogin={isLogin}
              setIsLogin={setIsLogin}
              setIsConfirmOTP={setIsConfirmOTP}
              setIsLoginOther={setIsLoginOther}
            />
          )}
          {isForgot && !isLogin && !isResetPassword && (
            <FormSendEmail
              setIsLogin={setIsLogin}
              setIsForgot={setIsForgot}
              setIsResetPassword={setIsResetPassword}
            />
          )}
          {isResetPassword && !isLogin && !isForgot && (
            <ResetPassword
              setIsLogin={setIsLogin}
              setIsResetPassword={setIsResetPassword}
              setIsResetSuccess={setIsResetSuccess}
            />
          )}
        </div>
      </div>
      {isResetSuccess && (
        <ResetSuccess
          setIsLogin={setIsLogin}
          setIsResetSuccess={setIsResetSuccess}
        />
      )}
      {isConfirmOTP && (
        <ConfirmOTP
          setIsLogin={setIsLogin}
          setIsConfirmOTP={setIsConfirmOTP}
          setIsRegisterSuccess={setIsRegisterSuccess}
        />
      )}
      {isRegisterSuccess && (
        <RegisterSuccess
          setIsRegisterSuccess={setIsRegisterSuccess}
          setIsLogin={setIsLogin}
        />
      )}
    </div>
  );
};

export default Login;
