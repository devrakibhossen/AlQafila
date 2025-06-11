import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
const SocialMediaSignIn = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-3 my-2">
        <div className="w-full text-md p-1.5 flex shadow-sm justify-center items-center gap-2 green-accent rounded-full border">
          <FaGoogle className=""/> Google
        </div>
        <div className="w-full text-md p-1.5 flex shadow-sm justify-center items-center gap-2 green-accent rounded-full border">
          <FaGithub className=""/> Github
        </div>
      
      </div>
    </div>
  );
};

export default SocialMediaSignIn;
