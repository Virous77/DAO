import ReactDOM from "react-dom";
import React from "react";

export const Modal = ({ isOpen, onClose, children, classStyle }) => {
  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className={
          "bg-white w-700 min-h-fit-content p-8 rounded-lg overflow-y-scroll"
        }
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};
