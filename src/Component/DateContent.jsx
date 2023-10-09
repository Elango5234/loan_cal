import React from "react";

function DateContent() {
  return (
    <div
      style={{ background: "#27304c" }}
      className="flex mx-10 mt-10 relative"
    >
      <div className="mt-12 mb-4 mx-80 flex items-center">
        <span className=" text-gray-300 text-xl font-medium inline-block align-middle">
          <p>Monthly payments starting from</p>
        </span>
        <div className="ml-32 text-gray-80 border-none outline-none">
          <input type="text" />
        </div>
      </div>
    </div>
  );
}

export default DateContent;
