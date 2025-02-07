import Image from "next/image";
import React from "react";
import sofaShape from "../../../../public/images/sofaShape.png";
import { FaRegHeart } from "react-icons/fa";

const ProductItem = () => {
  return (
    <article
      itemScope
      className="w-full p-[20px] cursor-pointer group shadow-gray-300 shadow-md hover:ring-2 hover:ring-[#d9bba6] hover:shadow-lg transition-shadow  rounded-[8px]"
    >
      <div className="w-full h-[260px] relative">
        <Image
          src={sofaShape}
          alt="anh minh hoa"
          className="w-full h-full rounded-[8px] group-hover:scale-105 transition-transform"
          layout="fill"
          objectFit="cover"
          loading="lazy"
        />
        <div className="absolute w-full top-[10px] left-0 px-[10px] flex items-center justify-between">
          <p className="text-black text-[10px] flex items-center h-[17px] px-[6px] bg-white z-[7] rounded-[4px]">
            New
          </p>
          <button aria-label="Thêm vào danh sách yêu thích">
            <FaRegHeart className="text-black text-[17px]" />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between mt-[10px] ">
        <h3 className="text-[15px] text-black">Sofa zaza</h3>
        <div className="flex items-center gap-[6px]">
          <span className="text-[15px] text-black">2.600.000</span>
          <span className="text-[15px] text-black opacity-[50%] line-through">
            3.000.000
          </span>
        </div>
      </div>
    </article>
  );
};

export default ProductItem;
