import Image from "next/image";
import React, { FC } from "react";

interface UserHeaderProps {
  name: string;
  image: string;
}
const UserHeader: FC<UserHeaderProps> = ({ name, image }) => {
  return (
    <div className="flex items-center gap-3 mb-3">
      <Image
        className="rounded-full h-11 w-11 border-2 border-gray-200 hover:border-primary transition-all"
        src={image}
        alt="User Avatar"
        width={50}
        height={50}
        priority
      />
      <div>
        <h5 className="text-md font-semibold">{name}</h5>
        <p className=" text-sm">Anyone</p>
      </div>
    </div>
  );
};

export default UserHeader;
