import React from "react";

export const Button = ({ children, className, onClick }) => {
  return (
    <button 
      className={`bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition ${className}`} 
      onClick={onClick}
    >
      {children}
    </button>
  );
};
