import React from "react";
import clsx from "clsx";

export const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={clsx(
        "px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
