import Image from "next/image";

const Loading = () => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center h-screen">
          <Image
            className="w-40 h-[51px] animate-fade-in"
            src="/alQafila2.png"
            alt="logo"
            width={200}
            height={150}
            priority
          />
          {/* <div className="w-12 h-12 border-2 border-[#10b981] border-t-transparent rounded-full animate-spin"></div> */}
        </div>
  );
};

export default Loading;
