import React from "react";

export const Card = ({ children, className, onClick }) => {
  return (
    <div 
      className={`bg-white border border-gray-300 rounded-lg shadow-md p-4 ${className}`} 
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export const CardContent = ({ children, className }) => {
  return <div className={`p-2 ${className}`}>{children}</div>;
};
