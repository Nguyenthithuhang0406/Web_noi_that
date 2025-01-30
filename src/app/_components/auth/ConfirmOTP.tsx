import React, { useRef, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

interface stateLoginProps {
  setIsLogin: (value: boolean) => void;
  setIsConfirmOTP: (value: boolean) => void;
  setIsRegisterSuccess: (value: boolean) => void;
}
const ConfirmOTP: React.FC<stateLoginProps> = ({
  setIsLogin,
  setIsConfirmOTP,
  setIsRegisterSuccess,
}) => {
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  const handleClickExit = () => {
    setIsLogin(true);
    setIsConfirmOTP(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value;
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace") {
      if (otp[index]) {
        const newOtp = [...otp];
        newOtp[index] = "";
        setOtp(newOtp);
      } else if (index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  const handleClickAgree = () => {
    setIsRegisterSuccess(true);
    setIsConfirmOTP(false);
  };

  return (
    <div className="xs:w-full sm:w-full xm:w-full md:w-[712px] h-[340px] bg-white rounded-[8px] relative">
      <div
        onClick={handleClickExit}
        className="w-[25px] cursor-pointer h-[25px] bg-[#9F7A5F] hover:bg-[#985e35] rounded-[4px] flex justify-center items-center absolute top-[4px] right-[4px]"
      >
        <IoCloseSharp className="text-white text-[15px]" />
      </div>
      <div className="xs:px-[50px] sm:px-[50px] xm:px-[50px] md:px-[133px] mt-[36px]">
        <p className="text-[25px] text-center mb-[13px]">
          Nhập mã gồm 6 chữ số mà chúng tôi vừa gửi đến email của bạn.{" "}
        </p>
        <div className="flex justify-center mb-[32px]">
          {Array.from({ length: 6 }).map((_, index) => (
            <input
              className="md:h-[90px] xs:h-[50px] sm:h-[50px] xm:h-[50px] xs:mr-[20px] sm:mr-[20px] xm:mr-[20px] focus:outline-none xs:w-[40px] sm:w-[40px] xm:w-[40px] md:w-[50px] text-center xs:text-[40px] sm:text-[40px] xm:text-[40px] md:text-[60px] font-semibold md:mr-[33px] border-b-[1px] border-[#9F7A5F] text-[#9F7A5F]"
              key={index}
              type="text"
              maxLength={1}
              value={otp[index]}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              ref={(el) => {
                inputRefs.current[index] = el;
              }}
            />
          ))}
        </div>
        <div className="flex justify-center">
          <button
            disabled={otp[5] === ""}
            className={`h-[50px] w-[230px] text-center bg-[#9F7A5F] hover:bg-[#985e35] cursor-pointer text-white text-[20px] font-semibold rounded-[10px] ${
              otp[5] === "" ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={handleClickAgree}
          >
            Đồng ý
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmOTP;
