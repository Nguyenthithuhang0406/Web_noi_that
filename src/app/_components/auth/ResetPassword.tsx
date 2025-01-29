import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

interface stateLoginProps {
  setIsLogin: (value: boolean) => void;
  setIsResetPassword: (value: boolean) => void;
  setIsResetSuccess: (value: boolean) => void;
}
const ResetPassword: React.FC<stateLoginProps> = ({
  setIsLogin,
  setIsResetPassword,
  setIsResetSuccess,
}) => {
  const [infoReset, setInfoReset] = useState({
    otp: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleClickExit = () => {
    setIsLogin(true);
    setIsResetPassword(false);
  };

  const handleChangeField = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInfoReset({
      ...infoReset,
      [e.target.name]: e.target.value,
    });
  };

  const handleClickSave = () => {
    setIsResetSuccess(true);
    setIsResetPassword(false);
  };

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
          Mật khẩu mới
        </p>
        <div className="w-full mb-[14px]">
          <label className="text-black text-[15px] mb-[14px]">
            Mã xác nhận
          </label>
          <input
            type="text"
            name="otp"
            value={infoReset.otp}
            onChange={(e) => handleChangeField(e)}
            placeholder="Nhập mã OTP"
            className="h-[45px] text-black text-[15px] w-full rounded-[10px] border-[1px] shadow-gray-300 border-gray-300 shadow-md focus:border-none focus:outline-none focus:outline-green-200 focus:shadow-none focus:shrink px-[15px]"
          />
        </div>
        <div className="w-full mb-[14px] relative">
          <label className="text-black text-[15px] mb-[10px]">
            Mật khẩu mới
          </label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={infoReset.password}
            onChange={(e) => handleChangeField(e)}
            placeholder="Nhập mật khẩu mới"
            className="h-[45px] w-full text-black text-[15px] rounded-[10px] border-[1px] shadow-gray-300 border-gray-300 shadow-md focus:border-none focus:outline-none focus:outline-green-200 focus:shadow-none focus:shrink px-[15px]"
          />
          <div
            className="absolute top-[38px] right-[15px]"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </div>
          <span></span>
        </div>
        <div className="w-full mb-[14px] relative">
          <label className="text-black text-[15px] mb-[10px]">
            Nhập lại mật khẩu
          </label>
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            placeholder="Nhập lại mật khẩu"
            value={infoReset.confirmPassword}
            onChange={(e) => handleChangeField(e)}
            className="h-[45px] w-full text-black text-[15px] rounded-[10px] border-[1px] shadow-gray-300 border-gray-300 shadow-md focus:border-none focus:outline-none focus:outline-green-200 focus:shadow-none focus:shrink px-[15px]"
          />
          <div
            className="absolute top-[38px] right-[15px]"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
          </div>
          <span></span>
        </div>
        <button
          onClick={handleClickSave}
          type="submit"
          className={`bg-[#9F7A5F] hover:bg-[#985e35] cursor-pointer w-full h-[50px] flex justify-center items-center rounded-[10px] text-white text-[20px] font-semibold mb-[14px]`}
        >
          Lưu thay đổi
        </button>
      </div>
    </div>
  );
};

export default ResetPassword;
