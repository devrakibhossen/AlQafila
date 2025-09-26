import React from "react";
import { Metadata } from "next";
import { FaPhone } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { TfiWorld } from "react-icons/tfi";
import { TbCategory2 } from "react-icons/tb";
import Link from "next/link";
export const metadata: Metadata = {
  title: "AlQafila | Programming Hero",
};

const page = () => {
  return (
    <div className="bg-white dark:bg-zinc-900 p-5 rounded-md space-y-4">
      <section>
        <h3 className="text-xl font-semibold mb-2.5">About Company</h3>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          Programming Hero is an innovative EdTech platform that makes learning
          programming fun and practical for learners worldwide.
        </p>
      </section>
      <section>
        <h3 className="text-xl font-semibold mb-2.5">Categories</h3>
        <div className="flex items-center gap-1.5">
          <TbCategory2 className="text-xl" />
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Software Company
          </p>
        </div>
      </section>
      <section>
        <h3 className="text-xl font-semibold mb-2.5">Key Highlights</h3>
        <ul className="list-disc pl-5 text-sm text-gray-700 dark:text-gray-300 space-y-1">
          <li>Founded in 2018</li>
          <li>Team of 150+ educators and developers</li>
          <li>Serving 1M+ learners in 50+ countries</li>
        </ul>
      </section>
      <section>
        <h3 className="text-xl font-semibold mb-2.5">Contact Info</h3>

        <div className="flex items-center gap-1.5 mb-3">
          <FaPhone className="text-xl" />
          <div>
            <h5 className="font-bold">+8801760445309</h5>
            <p className="text-sm text-gray-700 dark:text-gray-300">Phone</p>
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          <MdAlternateEmail className="text-xl" />
          <div>
            <h5 className="font-bold">support@programminghero.com</h5>
            <p className="text-sm text-gray-700 dark:text-gray-300">Email</p>
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          <TfiWorld className="text-xl" />
          <div>
            <Link
              href={`https://www.programming-hero.com`}
              className="font-bold"
            >
              https://www.programming-hero.com
            </Link>
            <p className="text-sm text-gray-700 dark:text-gray-300">Website</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
