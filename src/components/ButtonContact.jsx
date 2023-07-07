import React from "react";
import { BsWhatsapp } from "react-icons/bs";

const ButtonContact = () => {
  return (
    <a
      href="https://wa.me/5517992471752"
      className="fixed bottom-20 right-5 p-3 text-white text-xl bg-green-600 rounded-full"
    >
      <BsWhatsapp />
    </a>
  );
};

export default ButtonContact;
