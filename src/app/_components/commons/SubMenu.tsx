/* eslint-disable*/
import React, { useEffect, useRef, useState } from "react";
import { FaBars } from "react-icons/fa6";

const SubMenu = () => {
  const [isShowMenu, setIsShowMenu] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: any) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsShowMenu(false);
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
      <div className="lg:mt-[114px] xs:hidden xm:hidden sm:mt-[114px] md:mt-[14px] flex gap-[17px] ml-[30px]">
        <div>
          <p className="text-black text-[15px] cursor-pointer hover:text-[#9F7A5F]">
            Phòng khách
          </p>
        </div>
        <div>
          <p className="text-black text-[15px] cursor-pointer hover:text-[#9F7A5F]">
            Phòng ngủ
          </p>
        </div>
        <div>
          <p className="text-black text-[15px] cursor-pointer hover:text-[#9F7A5F]">
            Phòng bếp
          </p>
        </div>
        <div>
          <p className="text-black text-[15px] cursor-pointer hover:text-[#9F7A5F]">
            Phòng tắm
          </p>
        </div>
        <div>
          <p className="text-black text-[15px] cursor-pointer hover:text-[#9F7A5F]">
            Phòng làm việc
          </p>
        </div>
      </div>
      <div
        ref={menuRef}
        className="xs:block xm:block sm:hidden mt-[114px] ml-[30px] relative"
      >
        <FaBars
          onClick={() => setIsShowMenu(!isShowMenu)}
          className="text-[24px] text-[#9F7A5F]"
        />
        {isShowMenu && (
          <div className="bg-[#F9F9F9] absolute top-[30px] w-[150px] left-0">
            <div className="w-full flex items-center justify-between h-[32px] hover:cursor-pointer group hover:bg-white px-[18px]">
              <p className="text-[#997358] text-[15px] group-hover:text-[#997358]">
                Phòng khách
              </p>
            </div>
            <div className="w-full flex items-center justify-between h-[32px] hover:cursor-pointer group hover:bg-white px-[18px]">
              <p className="text-[#997358] text-[15px] group-hover:text-[#997358]">
                Phòng ngủ
              </p>
            </div>
            <div className="w-full flex items-center justify-between h-[32px] hover:cursor-pointer group hover:bg-white px-[18px]">
              <p className="text-[#997358] text-[15px] group-hover:text-[#997358]">
                Phòng bếp
              </p>
            </div>
            <div className="w-full flex items-center justify-between h-[32px] hover:cursor-pointer group hover:bg-white px-[18px]">
              <p className="text-[#997358] text-[15px] group-hover:text-[#997358]">
                Phòng tắm
              </p>
            </div>
            <div className="w-full flex items-center justify-between h-[32px] hover:cursor-pointer group hover:bg-white px-[18px]">
              <p className="text-[#997358] text-[15px] group-hover:text-[#997358]">
                Phòng làm việc
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SubMenu;
