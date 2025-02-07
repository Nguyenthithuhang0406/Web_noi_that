import ProductItem from "@/app/_components/home/ProductItem";
import React from "react";
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";

const GroupProduct = () => {
  const listProduct = [1, 2, 3, 4];
  return (
    <section aria-labelledby="product-category">
      <div className="flex items-center justify-between">
        <h2 className="h-[40px] bg-[#F5F5F3] rounded-[4px] z-[7] shadow-md text-[20px] text-black font-semibold flex items-center justify-center px-[16px]">
          Sofas
        </h2>
        <div className="flex items-center space-x-[10px]">
          <button
            aria-label="Xem sản phẩm trước"
            className="w-[28px] h-[28px] rounded-[50%] bg-[#F5F5F3] flex items-center justify-center"
          >
            <GrFormPrevious className="text-[24px] text-black" />
          </button>
          <button
            aria-label="Xem sản phẩm tiếp theo"
            className="w-[28px] h-[28px] rounded-[50%] bg-[#F5F5F3] flex items-center justify-center"
          >
            <MdNavigateNext className="text-[24px] text-black" />
          </button>
        </div>
      </div>

      <div className="mt-[13px] w-full flex flex-wrap items-center justify-between">
        {listProduct.map((item, index) => (
          <div key={index} className="xl:w-[23%] w-full sm:w-[45%] lg:w-[30%] mb-[20px] xl:mb-0">
            <ProductItem />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GroupProduct;
