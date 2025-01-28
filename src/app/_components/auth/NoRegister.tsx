"use client";
import React from "react";

interface NoRegisterProps {
  isLogin: boolean;
  setIsLogin: (value: boolean) => void;
}

const NoRegister: React.FC<NoRegisterProps> = ({ isLogin, setIsLogin }) => {
  return (
    <div
      className={`z-[10] p-[50px] absolute top-[10px] w-full h-full ${
        isLogin ? "translate-x-full" : "translate-x-0"
      } duration-300 ease-in-out transform transition-transform`}
    >
      <p className="text-[40px] text-[#9F7A5F] font-semibold text-center mb-[15px]">
        Đăng nhập
      </p>
      <p className="text-[20px] font-semibold text-[#9F7A5F] text-center mb-[50px]">
        Chào mừng bạn đến với House.com. Nếu bạn đã có tài khoản, có thể đăng
        nhập tại đây.
      </p>
      <div className="w-full flex justify-center">
        <button
          className="bg-[#9F7A5F] hover:bg-[#985e35] rounded-[10px] font-semibold text-[#FFFFFF] text-[20px] px-[14px] py-[6px]"
          onClick={() => setIsLogin(!isLogin)}
        >
          Tôi đã có tài khoản
        </button>
      </div>
    </div>
  );
};

export default NoRegister;
