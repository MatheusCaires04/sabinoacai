import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ButtonUp = () => {
  const [buttonActive, setButtonActive] = useState(false);

  useEffect(() => {
    const fadeInBtn = () => {
      if (window.scrollY > 100) {
        setButtonActive(true);
      } else {
        setButtonActive(false);
      }
    };

    window.addEventListener("scroll", fadeInBtn);
  });

  return (
    <a
      href="#home"
      className={`${
        buttonActive ? "flex fixed" : "none"
      } bottom-5 right-5 bg-[#993399] p-3 text-xl text-white rounded-lg z-[999] duration-500`}
    >
      <FaArrowUp />
    </a>
  );
};

export default ButtonUp;
