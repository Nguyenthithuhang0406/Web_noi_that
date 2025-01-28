import React from 'react'

const NoForgot = () => {
  return (
    <div
      className={`z-[10] p-[50px] absolute top-[10px] w-full h-full`}
    >
      <p className="text-[40px] text-[#9F7A5F] font-semibold text-center mb-[15px]">
        Lấy mã
      </p>
      <p className="text-[20px] text-[#9F7A5F] font-semibold text-center mb-[50px]">
        Chúng tôi vừa gửi một mã xác nhận vào email của bạn, hãy kiểm tra email và điền vào phiếu bên phải.
      </p>
      <div className="w-full flex justify-center">
        <button
          className="bg-[#9F7A5F] rounded-[10px] hover:bg-[#985e35] text-[#FFFFFF] font-semibold text-[20px] px-[14px] py-[6px]"
        >
          Đến email
        </button>
      </div>
    </div>
  );
}

export default NoForgot
