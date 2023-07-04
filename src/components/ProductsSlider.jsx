import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import { typesAcai } from "../data/data-acai";
import ProductItem from "./ProductItem";

const ProductsSlider = () => {
  return (
    <div
      className="w-full py-14 px-8 bg-[#993399]/20 flex flex-col items-center"
      id="products"
    >
      <h1
        className="text-4xl md:text-5xl font-bold font-titleBanner mb-10 text-center"
        data-aos="fade-left"
        data-aos-duration="3000"
      >
        Produtos Exclusivos
      </h1>

      <Swiper
        slidesPerView={5}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 30 },
          480: { slidesPerView: 2, spaceBetween: 10 },
          768: { slidesPerView: 3, spaceBetween: 30 },
          1024: { slidesPerView: 5, spaceBetween: 30 },
        }}
        loop={true}
        autoplay={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper h-full w-full max-w-[1100px] mx-auto cursor-grab pt-5 pb-10"
        data-aos="fade-left"
        data-aos-duration="3000"
      >
        {typesAcai.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <ProductItem image={item.image} title={item.title} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ProductsSlider;
