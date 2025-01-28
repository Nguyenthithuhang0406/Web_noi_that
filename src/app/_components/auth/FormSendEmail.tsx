/* eslint-disable */
import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import ReCAPTCHA from "react-google-recaptcha";

interface stateLoginProps {
  setIsLogin: (value: boolean) => void;
  setIsForgot: (value: boolean) => void;
}
const FormSendEmail: React.FC<stateLoginProps> = ({
  setIsLogin,
  setIsForgot,
}) => {
  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);

  const handleClickExit = () => {
    setIsLogin(true);
    setIsForgot(false);
  };

  const handlseClickRegister = () => {
    setIsLogin(false);
    setIsForgot(false);
  };

  const handleRecaptchaChange = (value: string | null) => {
    setRecaptchaValue(value);
  };

  const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  return (
    <div className="z-[10] p-[50px] absolute top-[10px] w-full h-full">
      <div
        onClick={handleClickExit}
        className="w-[25px] cursor-pointer h-[25px] bg-[#9F7A5F] hover:bg-[#985e35] rounded-[4px] flex justify-center items-center absolute top-[-6px] right-[5px]"
      >
        <IoCloseSharp className="text-white text-[15px]" />
      </div>
      <div>
        <p className="text-[40px] text-[#9F7A5F] font-semibold text-center mb-[15px]">
          Quên mật khẩu
        </p>
        <div className="w-full mb-[14px]">
          <label className="text-black text-[15px] mb-[14px]">
            Địa chỉ Email
          </label>
          <input
            type="text"
            name="email"
            placeholder="Nhập địa chỉ email"
            className="h-[45px] text-black text-[15px] w-full rounded-[10px] border-[1px] shadow-gray-300 border-gray-300 shadow-md focus:border-none focus:outline-none focus:outline-green-200 focus:shadow-none focus:shrink px-[15px]"
          />
        </div>
        {/* them recaptcha vao day */}
        <div className="mb-[14px]">
          <ReCAPTCHA
            sitekey={`${RECAPTCHA_SITE_KEY}`}
            onChange={handleRecaptchaChange}
          />
        </div>
        <button
          type="submit"
          className={`bg-[#9F7A5F] hover:bg-[#985e35] cursor-pointer w-full h-[50px] flex justify-center items-center rounded-[10px] text-white text-[20px] font-semibold mb-[14px]`}
        >
          Gửi thông tin
        </button>
        <p className="text-black text-[15px] mb-[14px]">
          Nếu bạn không nhớ email đã đăng ký, hãy đăng ký{" "}
          <span
            className="text-gray-700 underline hover:cursor-pointer"
            onClick={handlseClickRegister}
          >
            tại đây
          </span>
        </p>
        <p className="text-black text-center text-[15px] mb-[14px]">Hoặc</p>
        <div className="flex justify-center mb-[10px]">
          <FaFacebook className="text-[#1976D2] cursor-pointer text-[24px] mr-[11px]" />
          <FcGoogle className="text-[24px] cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default FormSendEmail;
