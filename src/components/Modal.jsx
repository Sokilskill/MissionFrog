import { useEffect } from "react";
import ReactDOM from "react-dom";

const modalRoot = document.getElementById("modal-root");

const Modal = ({ children, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      const handleEscape = (event) => {
        if (event.key === "Escape") {
          onClose();
        }
      };
      document.addEventListener("keydown", handleEscape);
      return () => {
        document.removeEventListener("keydown", handleEscape);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div
      className="fixed left-0 bottom-0 top-0 right-0 bg-gray-800/30 px-5 flex justify-center items-center z-[1000]"
      onClick={onClose}
    >
      <div
        className="relative dark:bg-gray-900 p-5 rounded-lg shadow-[0 4px 6px rgba(0, 0, 0, 0.1)] max-w-4xl "
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-3.5 right-3.5 flex justify-center items-center bg-none text-2xl text-amber-700 w-5 h-5"
          onClick={onClose}
        >
          &times;
        </button>
        {children}
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
