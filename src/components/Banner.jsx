import React from "react";
import CircleAnimation from "./CircleAnimation";

const Banner = () => {
  return (
    <div
      className="pt-20 w-full h-screen bg-backgroundBanner relative"
      id="home"
    >
      <CircleAnimation y="top-[20%]" x="right-[20%]" />
      <CircleAnimation y="top-[30%]" x="left-[20%]" />
      <CircleAnimation y="top-[40%]" x="right-[60%]" />
      <CircleAnimation y="top-[75%]" x="right-[90%]" />
      <CircleAnimation y="top-[34%]" x="right-[40%]" />
      <CircleAnimation y="top-[90%]" x="right-[50%]" />
      <div className="h-full w-full max-w-[1100px] mx-auto">
        <div
          className="w-[50%] h-full flex flex-col justify-center"
          data-aos="fade-right"
          data-aos-duration="4000"
        >
          <h1 className="text-5xl text-[#f0ddee] font-titleBanner font-bold">
            SABINO AÇAI
          </h1>
          <h1 className="text-2xl text-[#f0ddee] font-titleBanner font-bold pt-1 pb-3">
            O MELHOR AÇAI DA CIDADE E REGIÃO
          </h1>
          <p className="text-lg font-medium text-white">
            Peça o melhor açai no{" "}
            <strong className="text-[#e0bcdd] underline">SABINO AÇAI</strong> e
            tenha o melhor sabor com as melhores combinações. Perfeição existe e
            está no{" "}
            <strong className="text-[#e0bcdd] underline">SABINO AÇAI</strong>.
          </p>
        </div>
        <img
          src="/assets/banner2.webp"
          alt="Copo de açai com frutas em cima"
          className="absolute bottom-[50%] top-[20%] right-0 w-[38rem]"
          data-aos="fade-right"
          data-aos-duration="2000"
        />
      </div>
    </div>
  );
};

export default Banner;
