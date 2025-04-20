import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Image
        className=""
        src="/alQafila.png"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />
      <h3 className="text-2xl text-[#155D8C] font-extrabold">
        Professional social media web platform
      </h3>
    </div>
  );
}
