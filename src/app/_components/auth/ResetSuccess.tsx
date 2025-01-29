import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import { IoCheckmarkCircle } from "react-icons/io5";

interface stateLoginProps {
  setIsLogin: (value: boolean) => void;
  setIsResetSuccess: (value: boolean) => void;
}

const ResetSuccess: React.FC<stateLoginProps> = ({
  setIsLogin,
  setIsResetSuccess,
}) => {
  const handleClickExit = () => {
    setIsLogin(true);
    setIsResetSuccess(false);
  };

  const handleClickLogin = () => {
    setIsLogin(true);
    setIsResetSuccess(false);
  };

  return (
    <div className="xs:w-full sm:w-full xm:w-full md:w-[712px] xs:h-auto sm:h-auto xm:h-auto md:h-[340px] bg-white rounded-[8px] relative">
      <div
        onClick={handleClickExit}
        className="w-[25px] cursor-pointer h-[25px] bg-[#9F7A5F] hover:bg-[#985e35] rounded-[4px] flex justify-center items-center absolute top-[3px] right-[3px]"
      >
        <IoCloseSharp className="text-white text-[15px]" />
      </div>
      <div className="px-[66px] mt-[23px]">
        <div className="mb-[17px] flex justify-center">
          <IoCheckmarkCircle className="text-green-600 text-[70px]" />
        </div>
        <p className="text-[40px] text-center mb-[17px]">
          Bạn đã đặt lại mật khẩu thành công !
        </p>
        <div className="flex justify-center">
          <button
            onClick={handleClickLogin}
            type="submit"
            className={`bg-[#9F7A5F] hover:bg-[#985e35] cursor-pointer w-[250px] h-[50px] flex justify-center items-center rounded-[10px] text-white text-[20px] font-semibold mb-[14px]`}
          >
            Đăng nhập ngay
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetSuccess;
