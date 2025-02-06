/* eslint-disable*/
"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Logo from "../../../../public/images/Logo.png";
import { IoIosSearch } from "react-icons/io";
import { BsFillPersonFill } from "react-icons/bs";
import { FaBagShopping } from "react-icons/fa6";
import { IoHeart } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { AiFillHome } from "react-icons/ai";
import { FaBook } from "react-icons/fa";
import { LuMessageCircleQuestion } from "react-icons/lu";
import { MdContactPhone } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { FaCaretUp } from "react-icons/fa";
import { GrFormNextLink } from "react-icons/gr";
import { IoIosLogOut } from "react-icons/io";
import SubMenu from "@/app/_components/commons/SubMenu";

const Header = () => {
  const [isShowMenutop, setIsShowMenutop] = useState<boolean>(false);
  const [isShowMenuBottom, setIsShowMenuBottom] = useState<boolean>(false);
  const router = useRouter();

  const menuTopRef = useRef<HTMLDivElement>(null);
  const menuBottomRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: any) => {
    if (menuTopRef.current && !menuTopRef.current.contains(event.target)) {
      setIsShowMenutop(false);
    }

    if (
      menuBottomRef.current &&
      !menuBottomRef.current.contains(event.target)
    ) {
      setIsShowMenuBottom(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <header>
        <div className="xs:hidden z-[10] bg-white top-0 fixed xm:hidden sm:hidden md:flex justify-between items-center w-full h-[100px] px-[30px] py-[15px]">
          <div
            className="w-[100px] h-[72px] cursor-pointer"
            onClick={() => router.push("/")}
          >
            <Image src={Logo} alt="logo" className="w-full h-full" />
          </div>
          <div className="flex items-center">
            <p
              onClick={() => router.push("/")}
              className="mx-[24px] lg:mx-[10px] h-[23px] text-center border-b-[2px] border-transparent hover:border-[#9F7A5F] cursor-pointer text-black text-[15px]"
            >
              Trang chủ
            </p>
            <p className="mx-[24px] lg:mx-[10px] h-[23px] text-center border-b-[2px] border-transparent hover:border-[#9F7A5F] cursor-pointer text-black text-[15px]">
              Giới thiệu
            </p>
            <p className="mx-[24px] lg:mx-[10px] h-[23px] text-center border-b-[2px] border-transparent hover:border-[#9F7A5F] cursor-pointer text-black text-[15px]">
              Sản phẩm
            </p>
            <p className="mx-[24px] lg:mx-[10px] h-[23px] text-center border-b-[2px] border-transparent hover:border-[#9F7A5F] cursor-pointer text-black text-[15px]">
              Tư vấn
            </p>
            <p className="mx-[24px] lg:mx-[10px] h-[23px] text-center border-b-[2px] border-transparent hover:border-[#9F7A5F] cursor-pointer text-black text-[15px]">
              Liên hệ
            </p>
          </div>
          <div className="flex xs:hidden xm:hidden sm:hidden lg:block ml-[24px] mr-[48px] lg:w-[30%] xl:w-[40%] h-[33px] items-center relative">
            <IoIosSearch className="absolute top-[5px] left-[10px] text-[24px] text-[#9F7A5F]" />
            <input
              placeholder="Tìm sản phẩm ..."
              className="w-full h-full bg-[#C4C4C4] bg-opacity-[13%] border-none outline-none focus:bg-transparent focus:outline-green-200 text-[12px] text-[#9F7A5F] pl-[40px] rounded-[10px] absolute top-0 left-0"
            />
          </div>
          {/* <div className="flex items-center">
          <div className="flex items-center">
            <BsFillPersonFill className="text-[24px] text-[#9F7A5F] cursor-pointer" />
            <span className="text-[24px] text-[#9F7A5F]">!</span>
          </div>
          <div className="mx-[30px]">
            <FaBagShopping className="text-[24px] text-[#9F7A5F] cursor-pointer" />
          </div>
          <div>
            <IoHeart className="text-[24px] text-[#9F7A5F] cursor-pointer" />
          </div>
        </div> */}
          <div
            ref={menuTopRef}
            onClick={() => setIsShowMenutop(!isShowMenutop)}
            className="relative flex items-center border-[1px] border-black bg-[#9F7A5F] hover:bg-[#a5724d] rounded-[10px] px-[10px] py-[5px] cursor-pointer"
          >
            <BsFillPersonFill className="text-[24px] text-white cursor-pointer z-[10]" />
            <p className="text-white text-[20px] font-semibold mx-[10px]">
              Hang
            </p>
            {isShowMenutop ? (
              <FaCaretUp className="text-white text-[24px]" />
            ) : (
              <FaCaretDown className="text-white text-[24px]" />
            )}
            {isShowMenutop && (
              <div className="flex flex-col w-[138px] h-[160px] bg-[#997358] border-[1px] border-[#997358] absolute top-[50px] left-0">
                <div className="w-full flex items-center justify-between h-[32px] group hover:bg-white px-[18px]">
                  <p className="text-white text-[15px] group-hover:text-[#997358]">
                    Tài khoản
                  </p>
                  <div className="w-[20px] h-[20px] border-[1px] border-[#997358] rounded-[50%] flex items-center justify-center">
                    <GrFormNextLink className="text-[20px] text-[#997358]" />
                  </div>
                </div>
                <div className="w-full flex items-center justify-between h-[32px] group hover:bg-white px-[18px]">
                  <p className="text-white text-[15px] group-hover:text-[#997358]">
                    Giỏ hàng
                  </p>
                  <div className="w-[20px] h-[20px] border-[1px] border-[#997358] rounded-[50%] flex items-center justify-center">
                    <GrFormNextLink className="text-[20px] text-[#997358]" />
                  </div>
                </div>
                <div className="w-full flex items-center justify-between h-[32px] group hover:bg-white px-[18px]">
                  <p className="text-white text-[15px] group-hover:text-[#997358]">
                    Yêu thích
                  </p>
                  <div className="w-[20px] h-[20px] border-[1px] border-[#997358] rounded-[50%] flex items-center justify-center">
                    <GrFormNextLink className="text-[20px] text-[#997358]" />
                  </div>
                </div>
                <div className="w-full flex items-center justify-between h-[32px] group hover:bg-white px-[18px]">
                  <p className="text-white text-[15px] group-hover:text-[#997358]">
                    Hồ sơ
                  </p>
                  <div className="w-[20px] h-[20px] border-[1px] border-[#997358] rounded-[50%] flex items-center justify-center">
                    <GrFormNextLink className="text-[20px] text-[#997358]" />
                  </div>
                </div>
                <div className="w-full flex items-center justify-between h-[32px] group hover:bg-white px-[18px]">
                  <p className="text-white text-[15px] group-hover:text-[#997358]">
                    Đăng xuất
                  </p>
                  <div className="w-[20px] h-[20px] flex items-center justify-center">
                    <IoIosLogOut className="text-[20px] text-[#997358]" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="md:flex z-[10] justify-center bg-white xs:hidden xm:hidden sm:hidden lg:hidden w-[60%] h-[33px] mt-[100px] items-center relative">
          <IoIosSearch className="absolute top-[5px] left-[35%] text-[24px] text-[#9F7A5F]" />
          <input
            placeholder="Tìm sản phẩm ..."
            className="w-full h-full bg-[#C4C4C4] bg-opacity-[13%] border-none outline-none focus:bg-transparent focus:outline-green-200 text-[12px] text-[#9F7A5F] pl-[15%] rounded-[10px] absolute top-0 left-[30%]"
          />
        </div>

        <div className="flex z-[10] fixed bg-white md:hidden top-0 w-full h-[100px] px-[50px] items-center justify-between">
          <div
            className="w-[100px] h-[72px] cursor-pointer mr-[50px]"
            onClick={() => router.push("/")}
          >
            <Image src={Logo} alt="logo" className="w-full h-full" />
          </div>
          <div className="md:hidden flex justify-center w-[70%] h-[33px] items-center relative">
            <IoIosSearch className="absolute top-[5px] left-[3%] text-[24px] text-[#9F7A5F]" />
            <input
              placeholder="Tìm sản phẩm ..."
              className="w-full h-full bg-[#C4C4C4] bg-opacity-[13%] border-none outline-none focus:bg-transparent focus:outline-green-200 text-[12px] text-[#9F7A5F] pl-[10%] rounded-[10px] absolute top-0 left-0"
            />
          </div>
        </div>

        <div className="flex fixed md:hidden shadow-lg rounded-t-lg z-[10] bottom-0 w-full h-[50px] px-[50px] bg-[#F9F9F9] items-center justify-between">
          <div className="group relative">
            <AiFillHome
              onClick={() => router.push("/")}
              className="text-[24px] text-[#9F7A5F] cursor-pointer"
            />
            <span className="w-[60px] hidden group-hover:block absolute top-[-20px] left-0 text-[12px] text-[#9F7A5F]">
              Trang chủ
            </span>
          </div>
          <div className="group relative">
            <FaBook className="text-[24px] text-[#9F7A5F] cursor-pointer" />
            <span className="w-[60px] hidden group-hover:block absolute top-[-20px] left-0 text-[12px] text-[#9F7A5F]">
              Giới thiệu
            </span>
          </div>
          <div className="group relative">
            <FaBagShopping className="text-[24px] text-[#9F7A5F] cursor-pointer" />
            <span className="w-[60px] hidden group-hover:block absolute top-[-20px] left-0 text-[12px] text-[#9F7A5F]">
              Sản phẩm
            </span>
          </div>
          <div className="group relative">
            <LuMessageCircleQuestion className="text-[24px] text-[#9F7A5F] cursor-pointer" />
            <span className="w-[60px] hidden group-hover:block absolute top-[-20px] left-0 text-[12px] text-[#9F7A5F]">
              Tư vấn
            </span>
          </div>
          <div className="group relative">
            <MdContactPhone className="text-[24px] text-[#9F7A5F] cursor-pointer" />
            <span className="w-[60px] hidden group-hover:block absolute top-[-20px] left-0 text-[12px] text-[#9F7A5F]">
              Liên hệ
            </span>
          </div>
          <div className="relative" ref={menuBottomRef}>
            <FaBars
              onClick={() => setIsShowMenuBottom(!isShowMenuBottom)}
              className="text-[24px] text-[#9F7A5F] cursor-pointer"
            />
            {isShowMenuBottom && (
              <div className="flex flex-col w-[138px] h-[160px] bg-[#F9F9F9] border-[1px] border-[##F9F9F9] absolute top-[-200px] right-0">
                <div className="w-full flex items-center justify-between h-[32px] group hover:bg-white px-[18px]">
                  <p className="text-[#997358] text-[15px] group-hover:text-[#997358]">
                    Tài khoản
                  </p>
                  <div className="w-[20px] h-[20px] border-[1px] border-[#F9F9F9] group-hover:border-[#997358] rounded-[50%] flex items-center justify-center">
                    <GrFormNextLink className="text-[20px] text-[#F9F9F9] group-hover:text-[#997358]" />
                  </div>
                </div>
                <div className="w-full flex items-center justify-between h-[32px] group hover:bg-white px-[18px]">
                  <p className="text-[#997358] text-[15px] group-hover:text-[#997358]">
                    Giỏ hàng
                  </p>
                  <div className="w-[20px] h-[20px] border-[1px] border-[#F9F9F9] group-hover:border-[#997358] rounded-[50%] flex items-center justify-center">
                    <GrFormNextLink className="text-[20px] text-[#F9F9F9] group-hover:text-[#997358]" />
                  </div>
                </div>
                <div className="w-full flex items-center justify-between h-[32px] group hover:bg-white px-[18px]">
                  <p className="text-[#997358] text-[15px] group-hover:text-[#997358]">
                    Yêu thích
                  </p>
                  <div className="w-[20px] h-[20px] border-[1px] border-[#F9F9F9] group-hover:border-[#997358] rounded-[50%] flex items-center justify-center">
                    <GrFormNextLink className="text-[20px] text-[#F9F9F9] group-hover:text-[#997358]" />
                  </div>
                </div>
                <div className="w-full flex items-center justify-between h-[32px] group hover:bg-white px-[18px]">
                  <p className="text-[#997358] text-[15px] group-hover:text-[#997358]">
                    Hồ sơ
                  </p>
                  <div className="w-[20px] h-[20px] border-[1px] border-[#F9F9F9] group-hover:border-[#997358] rounded-[50%] flex items-center justify-center">
                    <GrFormNextLink className="text-[20px] text-[#F9F9F9] group-hover:text-[#997358]" />
                  </div>
                </div>
                <div className="w-full flex items-center justify-between h-[32px] group hover:bg-white px-[18px]">
                  <p className="text-[#997358] text-[15px] group-hover:text-[#997358]">
                    Đăng xuất
                  </p>
                  <div className="w-[20px] h-[20px] flex items-center justify-center">
                    <IoIosLogOut className="text-[20px] text-[#F9F9F9] group-hover:text-[#997358]" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <SubMenu />
      </header>
    </>
  );
};

export default Header;
