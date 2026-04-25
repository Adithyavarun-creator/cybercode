import React from "react";

const BackendIndex = () => {
  return (
    <div className="flex flex-col justify-center min-h-screen items-center gap-10">
      <div className="text-white flex items-center gap-2 cursor-pointer">
        <span className="uppercase text-xl md:text-2xl lg:text-4xl font-extrabold bg-primary px-3 py-2 rounded-2xl">
          CS
        </span>
        <span className="font-extrabold text-xl md:text-2xl lg:text-4xl">
          CyberShield
        </span>
      </div>

      <div>
        <h2 className="text-white text-xs md:text-2xl font-semibold">
          The backend is deployed 🚀🚀🚀
        </h2>
      </div>
    </div>
  );
};

export default BackendIndex;
