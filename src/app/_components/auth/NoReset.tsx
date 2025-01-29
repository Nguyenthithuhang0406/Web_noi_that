import React from "react";

const NoReset = () => {
  return (
    <div className={`z-[10] p-[50px] absolute top-[10px] w-full h-full`}>
      <p className="text-[40px] text-[#9F7A5F] font-semibold text-center mb-[15px]">
        Lưu ý
      </p>
      <p className="text-[20px] text-[#9F7A5F] font-semibold text-center mb-[50px]">
        Mật khẩu phải chứa ít nhất 1 ký tự số, 1 ký tự đặc biệt và 2 ký tự chữ
        cái.
      </p>
    </div>
  );
};

export default NoReset;
