import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const ModalHeader = ({ name, onClose }) => {
  return (
    <header className="flex items-center">
      <h2 className=" font-bold text-[17px]">{name}</h2>

      <button className=" w-[30px] h-[30px] bg-transparent rounded-[100px] flex items-center justify-center">
        <AiOutlineClose
          size={20}
          cursor="pointer"
          onClick={onClose}
          color="black"
        />
      </button>
    </header>
  );
};

export default ModalHeader;
