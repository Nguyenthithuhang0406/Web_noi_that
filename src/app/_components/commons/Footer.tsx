import Image from "next/image";
import React from "react";
import Logo from "../../../../public/images/Logo.png";
import { LuPhone } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { TbBuildingCommunity } from "react-icons/tb";
import { RiFacebookCircleLine } from "react-icons/ri";
import { TfiTwitter } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="lg:px-[97px] xs:px-[20px] xm:px-[20px] sm:px-[50px] w-full pt-[78px] pb-[31px] bg-[#2C2C54] relative">
        <div className="flex lg:flex-row xs:flex-col xm:flex-col sm:flex-col w-full justify-between items-center mb-[25px]">
          <div className="flex lg:flex-col xs:flex-row xs:w-full xm:flex-row xm:w-full sm:flex-row sm:w-full lg:w-1/3 lg:pr-[97px]">
            <div className="xs:w-[70px] xs:mr-[10px] xs:h-[50px] xm:w-[70px] xm:mr-[10px] xm:h-[50px] sm:w-[80px] sm:mr-[10px] sm:h-[70px] md:w-[95px] md:h-[88px] mb-[48px]">
              <Image src={Logo} alt="logo" className="w-full h-full" />
            </div>
            <div>
              <div className="flex mb-[28px]">
                <LuPhone className="text-[25px] text-white mr-[10px]" />
                <p className="text-white text-[15px]">0389 353 783</p>
              </div>
              <div className="flex mb-[28px]">
                <MdOutlineMail className="text-[25px] text-white mr-[10px]" />
                <p className="text-white text-[15px]">House@gmail.com</p>
              </div>
              <div className="flex mb-[28px]">
                <TbBuildingCommunity className="text-[25px] text-white mr-[10px]" />
                <p className="text-white text-[15px]">
                  Số 39, ngõ 134, Cầu Diễn, Minh Khai, Bắc Từ Liêm, Hà Nội
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-between xs:w-full xm:w-full sm:w-full lg:w-2/3">
            <div>
              <p className="mb-[16px] text-[20px] text-white font-semibold">
                Chi nhánh
              </p>
              <p className="mb-[16px] text-[15px] text-white">Hà nội</p>
              <p className="mb-[16px] text-[15px] text-white">Hồ Chí Minh</p>
            </div>
            <div>
              <p className="mb-[16px] text-[20px] text-white font-semibold">
                Chính sách
              </p>
              <p className="mb-[16px] text-[15px] text-white">Đổi trả</p>
              <p className="mb-[16px] text-[15px] text-white">Thanh toán</p>
              <p className="mb-[16px] text-[15px] text-white">Khiếu nại</p>
              <p className="mb-[16px] text-[15px] text-white">Trả góp</p>
            </div>
            <div>
              <p className="mb-[16px] text-[20px] text-white font-semibold">
                Hỏi đáp
              </p>
              <p className="mb-[16px] text-[15px] text-white">Sản phẩm</p>
              <p className="mb-[16px] text-[15px] text-white">Đơn hàng</p>
              <p className="mb-[16px] text-[15px] text-white">Chất lượng</p>
              <p className="mb-[16px] text-[15px] text-white">Chính sách</p>
            </div>
          </div>
        </div>

        <div className="mb-[25px]">
          <p className="text-white text-[15px] mb-[10px]">Follow me !</p>
          <div className="flex">
            <RiFacebookCircleLine className="text-white text-[30px]" />
            <TfiTwitter className="text-white text-[30px] mx-[11px]" />
            <FaInstagram className="text-white text-[30px]" />
          </div>
        </div>

        <div className="flex xs:flex lg:flex-row xs:flex-col xs:mb-[18px] xm:flex xm:flex-col xm:mb-[18px] sm:flex sm:flex-col sm:mb-[18px] items-center justify-between">
          <p className="text-white opacity-[50%] text-[15px]">
            Copyright & Design by Nguyễn Thị Thu Hằng
          </p>
          <div className="flex">
            <p className="text-white opacity-[50%] text-[15px]">Khiếu nại</p>
            <p className="mx-[18px] text-white opacity-[50%] text-[15px]">
              Đăng nhập
            </p>
            <p className="text-white opacity-[50%] text-[15px]">Tư vấn</p>
          </div>
        </div>

        <div className="w-[50px] h-[50px] bg-white rounded-[50%] flex items-center justify-center absolute bottom-[77px] right-[41px] z-[5] cursor-pointer hover:bg-[#cfcece]">
          <FaChevronUp className="text-[24px] text-[#9F7A5F]" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
