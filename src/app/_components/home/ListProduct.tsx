import GroupProduct from "@/app/_components/home/GroupProduct";
import React from "react";

const ListProduct = () => {
  return (
    <div className="mt-[61px] w-full px-[31px] pt-[31px]">
      <h1 className="mb-[29px] text-center font-semibold text-[30px] text-[#9F7A5F]">
        Sản phẩm chính
        <GroupProduct />
        <p className="text-[20px] text-black opacity-[42%] underline text-center mt-[25px]">Xem thêm các sản phẩm khác</p>
      </h1>
    </div>
  );
};

export default ListProduct;
