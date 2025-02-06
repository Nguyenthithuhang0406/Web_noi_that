import Image from "next/image";
import React from "react";
import sofaShape from "../../../../public/images/sofaShape.png";

const Introduction = () => {
  return (
    <div className="w-full px-[31px] h-[309px]">
      <h1 className="my-[31px  text-center font-semibold text-[30px] text-[#9F7A5F]">
        Giới thiệu
      </h1>
      <div className="w-full h-full flex md:flex-row flex-col ">
        <p className="md:w-[50%] h-full mb-[31px] md:mb-0 w-full md:pr-[39px] text-[15px] items-center">
          Khoảng mười năm trước, người sáng lập của chúng tôi đang trang bị nội
          thất cho căn hộ của mình. Chán nản vì thiếu những chiếc ghế sofa được
          thiết kế đẹp, chất lượng tốt và giá cả phải chăng, anh bắt đầu xác
          định lại quy trình. Ý tưởng rất rõ ràng: cộng tác với các nhà thiết kế
          và nhà sản xuất độc lập để tạo ra những tác phẩm bạn yêu thích, trừ
          phần đánh dấu. Và thế là House.com ra đời. Nơi tạo dựng ngôi nhà mơ
          ước của bạn.
        </p>
        <div className="md:w-[50%] w-full max-h-[309px] overflow-hidden">
          <Image
            src={sofaShape}
            alt="Hình ảnh minh hoạ ghế sofa"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
