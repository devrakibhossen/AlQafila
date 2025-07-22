import Image from "next/image";

const loading = () => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center h-screen">
      <Image
        className="w-40 h-[51px] animate-fade-in"
        src="/alQafila1.png"
        alt="logo"
        width={200}
        height={150}
        priority
      />
      {/* <div className="w-12 h-12 border-2 border-[#104e80] border-t-transparent rounded-full animate-spin"></div> */}
    </div>
  );
};

export default loading;
