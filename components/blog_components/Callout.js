import React from "react";

export default function Callout({ title = "", children }) {
  return (
    <div className="bg-white border-l-8 shadow-sm border-primary-color">
      <div className="h-full p-5">
        <h6 className="mb-2 font-semibold leading-5">{title}</h6>
        <p className="text-base text-gray-900">{children}</p>
      </div>
    </div>
  );
}

