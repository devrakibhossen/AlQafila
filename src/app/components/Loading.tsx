import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center h-screen">
      <div className="w-12 h-12 border-2 border-[#10b981] border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default Loading;
