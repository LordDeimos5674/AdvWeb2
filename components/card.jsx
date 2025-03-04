import React from "react";
import clsx from "clsx";

export const Card = ({ children, className, ...props }) => {
  return (
    <div
      className={clsx(
        "bg-white shadow-md rounded-lg overflow-hidden border border-gray-200",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardContent = ({ children, className }) => {
  return <div className={clsx("p-4", className)}>{children}</div>;
};
