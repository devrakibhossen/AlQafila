import Image from "next/image";
import Link from "next/link";
import { BsThreeDotsVertical } from "react-icons/bs";

const CompanySidebar = () => {
  const companies = [
    {
      id: 1,
      name: "Google",
      members: "12.5K Followers",
      coverImage: "https://i.ibb.co/VYPf84DJ/image.png",
    },
    {
      id: 2,
      name: "Microsoft",
      members: "8.2K Followers",
      coverImage: "https://i.ibb.co/CpVxPgtQ/image.png",
    },
    {
      id: 3,
      name: "JavaScript",
      members: "15.3K Followers",
      coverImage: "https://i.ibb.co/bMTBBBH9/image.png",
    },
    {
      id: 4,
      name: "UI/UX Makes",
      members: "5.7K Followers",
      coverImage: "https://i.ibb.co/Zzg3y84q/image.png",
    },
    {
      id: 5,
      name: "Phitron",
      members: "10.1K Followers",
      coverImage: "https://i.ibb.co/gb4YyHHW/image.png",
    },
    {
      id: 6,
      name: "BD Jobs",
      members: "3.9K Followers",
      coverImage: "https://i.ibb.co/YFLQWG4g/image.png",
    },
  ];
  return (
    <div className="w-full hidden md:block  ">
      <div className="bg-white dark:bg-zinc-900 p-4 flex flex-col  space-y-4 border rounded-md">
        <div className="flex justify-between  items-center border-b pb-3">
          <h3 className="text-gray-700 dark:text-white text-lg font-semibold">
            Similar Companies
          </h3>
          <BsThreeDotsVertical className="text-gray-700 dark:text-gray-300" />
        </div>

        {companies.map((company) => (
          <div
            key={company.id}
            className="flex gap-2.5 justify-between items-center"
          >
            <div className="flex gap-2.5 items-center">
              <Image
                className="rounded-lg w-12 h-12 border shadow-md"
                src={company.coverImage}
                alt="logo"
                width={48}
                height={29}
                priority
              />
              <div>
                <h3 className="text-black dark:text-white  text-md">
                  <Link href={`/company/${company.name}`}>{company.name}</Link>
                </h3>
                <p className="text-sm dark:text-gray-300 text-gray-700">
                  {company.members}
                </p>
              </div>
            </div>
            <div>
              <button className="py-[2px] text-sm text-white px-2 bg-green-accent   w-full rounded-full cursor-pointer">
                Follow
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanySidebar;
