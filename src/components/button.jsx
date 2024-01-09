import React from "react";

function Button({ styles }) {
  return (
    <button
      className={`py-3 px-6 font-montserrat font-medium text-[18px] bg-blue-gradient rounded-[10px] outline-none ${styles}`}
      type="button"
    >
      Boshlash
    </button>
  );
}

export default Button;
