"use client";
import { Bookmark, BriefcaseIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaMapMarkerAlt, FaPaperPlane, FaSearch } from "react-icons/fa";
import { RiExternalLinkFill } from "react-icons/ri";

const Page = () => {
  const jobs = [
    {
      _id: "job1",
      title: "Front-End Developer",
      company: "Programming Hero",
      companyLogo: "https://i.ibb.co/xSF3YVvz/image.png",
      location: "Dhaka, Bangladesh",
      type: "Full-time",
      remote: false,
      salary: "$700 - $1000/month",
      quickApply: true,
      posted: "24 April 2025",
      description:
        "We are looking for a passionate Front-End Developer to join our team. You will build responsive, scalable UIs. Strong skills in Tailwind CSS and React are a plus. Collaborate closely with design and backend teams. Prior experience with REST APIs preferred. Write clean, maintainable code.",
      skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
      recruiterName: "Afsana Rahman",
      recruiterImage: "https://randomuser.me/api/portraits/women/45.jpg",
    },
    {
      _id: "job2",
      title: "React.js Developer",
      company: "CodeCraft",
      companyLogo: "https://i.ibb.co/0jqHpnp/sneakers.png",
      location: "Remote",
      type: "Contract",
      remote: true,
      salary: "$1200/month",
      quickApply: false,
      posted: "22 April 2025",
      description:
        "CodeCraft is hiring a skilled React.js Developer. You'll work on scalable projects and maintain reusable components. Strong understanding of React hooks and state management is essential. Collaborate with designers and QA teams. Debug issues and optimize performance.",
      skills: ["React", "Redux", "JavaScript", "REST APIs", "Git"],
      recruiterName: "Zahid Hasan",
      recruiterImage: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      _id: "job3",
      title: "UI/UX Designer",
      company: "PixelPoint",
      companyLogo: "https://i.ibb.co/RjBLWxB/grey-brim.png",
      location: "Sylhet, Bangladesh",
      type: "Full-time",
      remote: true,
      salary: "$800/month",
      quickApply: true,
      posted: "20 April 2025",
      description:
        "We are seeking a creative UI/UX Designer. Responsibilities include designing intuitive interfaces, wireframes, and prototypes. Knowledge of Figma and Adobe XD is required. Work with developers for design implementation. Keep designs user-centric and modern.",
      skills: ["Figma", "Adobe XD", "UI Design", "UX Research", "Prototyping"],
      recruiterName: "Rima Sultana",
      recruiterImage: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      _id: "job4",
      title: "WordPress Developer",
      company: "WebGen",
      companyLogo: "https://i.ibb.co/ypkgK0X/blue-beanie.png",
      location: "Chittagong, Bangladesh",
      type: "Part-time",
      remote: false,
      salary: "$400 - $600/month",
      quickApply: false,
      posted: "18 April 2025",
      description:
        "WebGen is looking for a WordPress Developer to manage themes, plugins, and custom functionality. Familiarity with Elementor and WooCommerce is a plus. Ensure responsive design and SEO optimization. Collaborate with the content team. Debug and update client sites regularly.",
      skills: ["WordPress", "PHP", "Elementor", "WooCommerce", "MySQL"],
      recruiterName: "Imran Kabir",
      recruiterImage: "https://randomuser.me/api/portraits/men/75.jpg",
    },
    {
      _id: "job5",
      title: "Junior JavaScript Developer",
      company: "DevHive",
      companyLogo: "https://i.ibb.co/QdJwgmp/brown-cowboy.png",
      location: "Remote",
      type: "Internship",
      remote: true,
      salary: "$200/month",
      quickApply: true,
      posted: "16 April 2025",
      description:
        "Join our internship program as a Junior JavaScript Developer. Work on real projects under mentorship. Learn modern JS, DOM manipulation, and basic React. Good communication and eagerness to learn are important. Ideal for recent grads or self-taught learners.",
      skills: ["JavaScript", "DOM", "ES6", "Git", "Basic React"],
      recruiterName: "Nazia Ahmed",
      recruiterImage: "https://randomuser.me/api/portraits/women/22.jpg",
    },
  ];
  const router = useRouter();
  return (
    <div className="w-11/12 mx-auto mt-20">
      <button
        onClick={() => router.push("/interview")}
        className=" flex items-center justify-center mb-3 gap-2 rounded-full border dark:border-zinc-800 border-gray-300 overflow-hidden shadow-sm  bg-white dark:bg-zinc-900 text-sm  font-medium py-2 px-4 transition-all"
      >
        <BriefcaseIcon className="w-4 h-4" />
        Ai Interview
      </button>
      <div className="flex w-full max-w-3xl mx-auto rounded-full border dark:border-zinc-800 border-gray-300 overflow-hidden shadow-sm">
        {/* Job Title Input */}
        <div className="flex items-center gap-2 px-4 py-2 w-1/2 bg-white dark:bg-zinc-900">
          <FaSearch className="text-gray-400" />
          <input
            type="text"
            placeholder="Find your perfect job"
            className="w-full outline-none text-sm bg-transparent"
          />
        </div>

        {/* Divider */}
        <div className="w-px bg-gray-200" />

        {/* Location Input */}
        <div className="flex items-center gap-2 px-4 py-2 w-1/2 bg-white dark:bg-zinc-900">
          <FaMapMarkerAlt className="text-gray-400" />
          <input
            type="text"
            placeholder='City, state, zipcode, or "remote"'
            className="w-full outline-none text-sm bg-transparent"
          />
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-5 mt-10">
        <div className="md:col-span-1 ">
          {jobs.map((job) => (
            <div
              key={job._id}
              className="border rounded-xl shadow-sm p-4 w-full bg-white dark:bg-zinc-900 mb-6"
            >
              <div className="flex justify-between items-start">
                <div className="flex items-center space-x-2">
                  <Image
                    src={job.companyLogo}
                    alt="NodeFlair"
                    className="w-6 h-6 rounded-full"
                    width={48}
                    height={48}
                  />
                  <span className="text-sm font-medium">{job.company}</span>
                  <span className="text-sm dark:text-gray-300 text-gray-600">
                    3.6★
                  </span>
                </div>
                <Bookmark className="w-4 h-4 text-gray-400 cursor-pointer" />
              </div>
              <div className="mt-2">
                <h3 className="text-md dark:text-white font-semibold text-gray-800">
                  {job.title}
                </h3>
                <p className="text-sm dark:text-gray-300 text-gray-500">
                  California
                </p>
              </div>
              <div className="mt-3 flex justify-between items-center">
                {job.quickApply ? (
                  <span className="bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded flex items-center gap-1">
                    <FaPaperPlane /> Quick Apply
                  </span>
                ) : (
                  <span className="bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded flex items-center gap-1">
                    Apply
                    <RiExternalLinkFill />
                  </span>
                )}
                <span className="text-xs  text-gray-400">{job.posted}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="md:col-span-2 bg-white dark:bg-zinc-900 p-5 border rounded-xl">
          <div className="flex justify-between items-center">
            <div>
              <div className="flex justify-between items-start">
                <div className="flex items-center space-x-2">
                  <Image
                    src="https://i.ibb.co/xSF3YVvz/image.png"
                    alt="NodeFlair"
                    className="w-10 h-10 rounded-full"
                    width={48}
                    height={48}
                  />
                  <span className="text-md font-medium">Programming Hero</span>
                  <span className="text-sm text-gray-600">3.6★</span>
                </div>
              </div>
              <div className="mt-2">
                <h3 className="text-lg dark:text-white  font-semibold text-gray-800">
                  Front End developer
                </h3>
                <p className="text-sm dark:text-gray-300 text-gray-500">
                  California
                </p>
              </div>
            </div>
            <button className="bg-green-100 text-green-700 text-xs font-medium px-4 py-2 rounded flex items-center gap-1 cursor-pointer">
              <FaPaperPlane /> Quick Apply
            </button>
          </div>
          <hr className="my-4" />
          <h3 className="text-lg font-semibold dark:text-white  text-gray-800 mb-2">
            Your Fit for This Role
          </h3>

          <div className="grid grid-cols-2 gap-2 max-w-60 mb-4">
            {["JavaScript", "DOM", "ES6", "Git", "Basic React"].map(
              (skill, idx) => (
                <span
                  key={idx}
                  className="text-sm border text-center dark:text-gray-300 text-gray-700 px-2 py-1 rounded-full "
                >
                  {skill}
                </span>
              )
            )}
          </div>
          {/* Job Details */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm dark:text-gray-300 text-gray-700 mb-4">
            <p>
              <strong>Job Type:</strong> Internship
            </p>
            <p>
              <strong>Salary:</strong> $200/month
            </p>
            <p>
              <strong>Remote:</strong> Yes
            </p>
            <p>
              <strong>Posted:</strong> 16 April 2025
            </p>
          </div>

          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            {`We are seeking a dedicated and detail-oriented Front-End Developer
            to join our team. The ideal candidate should be proficient in
            building responsive, scalable user interfaces using modern
            technologies. Experience with Tailwind CSS and React is highly
            desirable. You'll collaborate closely with our design and backend
            teams, and prior experience working with RESTful APIs is a strong
            plus. We value clean, maintainable, and well-documented code.`}
          </p>
          <div className="flex items-center gap-3 mt-4 pt-4 border-t">
            <Image
              src="https://i.ibb.co/ypkgK0X/blue-beanie.png"
              alt="Recruiter"
              className="w-10 h-10 rounded-full"
              width={48}
              height={48}
            />
            <div>
              <p className="text-sm font-medium dark:text-white  text-black">
                Nazia Ahmed
              </p>
              <p className="text-xs dark:text-gray-300 text-gray-700">
                Recruiter at Programming Hero
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
