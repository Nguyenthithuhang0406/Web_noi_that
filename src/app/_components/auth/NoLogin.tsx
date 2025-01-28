"use client";
import React from "react";

interface NoLoginProps {
  isLogin: boolean;
  setIsLogin: (value: boolean) => void;
}

const NoLogin: React.FC<NoLoginProps> = ({ isLogin, setIsLogin }) => {
  return (
    <div
      className={`z-[10] p-[50px] absolute top-[10px] w-full h-full ${
        isLogin ? "-translate-x-full" : "translate-x-0"
      } duration-300 ease-in-out transform transition-transform z-[10]`}
    >
      <p className="text-[40px] text-[#9F7A5F] font-semibold text-center mb-[15px]">
        Đăng ký
      </p>
      <p className="text-[20px] text-[#9F7A5F] font-semibold text-center mb-[50px]">
        Chào mừng bạn đến với House.com. Nếu bạn chưa có tài khoản, có thể đăng
        ký tại đây.
      </p>
      <div className="w-full flex justify-center">
        <button
          className="bg-[#9F7A5F] rounded-[10px] hover:bg-[#985e35] text-[#FFFFFF] font-semibold text-[20px] px-[14px] py-[6px]"
          onClick={() => setIsLogin(!isLogin)}
        >
          Tạo tài khoản
        </button>
      </div>
    </div>
  );
};

export default NoLogin;
