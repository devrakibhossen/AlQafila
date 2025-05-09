import { BriefcaseIcon, Star } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
export const metadata: Metadata = {
  title: "AlQafila | Interview",
};
const page = () => {
  const jobs = [
    {
      _id: "1",
      role: "Frontend Developer",
      description:
        "Create responsive UI using React, Tailwind CSS, and modern JavaScript frameworks.",
      rating: 4.7,
      companyLogo: "https://i.ibb.co/gb4YyHHW/image.png",
    },
    {
      _id: "2",
      role: "Backend Developer",
      description:
        "Build scalable APIs with Node.js, Express, and database integrations like MongoDB or PostgreSQL.",
      rating: 4.6,
      companyLogo: "https://i.ibb.co/xSF3YVvz/image.png",
    },
    {
      _id: "3",
      role: "Full Stack Developer",
      description:
        "Manage both client and server sides using MERN stack with RESTful APIs and cloud deployment.",
      rating: 4.8,
      companyLogo: "https://i.ibb.co/YFLQWG4g/image.png",
    },
    {
      _id: "4",
      role: "UI/UX Designer",
      description:
        "Design user-centered interfaces using Figma, Adobe XD, and follow accessibility standards.",
      rating: 4.5,
      companyLogo: "https://i.ibb.co/gb4YyHHW/image.png",
    },
    {
      _id: "5",
      role: "DevOps Engineer",
      description:
        "Implement CI/CD pipelines, automate infrastructure with Docker, Kubernetes, and cloud services.",
      rating: 4.6,
      companyLogo: "https://i.ibb.co/gb4YyHHW/image.png",
    },
    {
      _id: "6",
      role: "Data Scientist",
      description:
        "Analyze data using Python, build predictive models, and visualize insights with tools like Tableau.",
      rating: 4.7,
      companyLogo: "https://i.ibb.co/gb4YyHHW/image.png",
    },
    {
      _id: "7",
      role: "Mobile App Developer",
      description:
        "Develop cross-platform mobile apps using Flutter or React Native with seamless performance.",
      rating: 4.6,
      companyLogo: "https://i.ibb.co/RG6TWPxQ/image.png",
    },
  ];

  return (
    <div className="mt-24">
      <section className="w-11/12 mx-auto border rounded-md bg-white dark:bg-zinc-900 p-5 ">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left: Text Section */}
          <div className="text-gray-600 max-w-xl space-y-6">
            <div className="flex items-center gap-2">
              <BriefcaseIcon className="w-4 h-4" />
              <h2 className="text-md font-semibold">AI Interview</h2>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white leading-tight">
              Boost Your Confidence with AI-Powered Interview Practice
            </h1>
            <p className=" text-sm">
              Practice real-time interview questions, get instant feedback, and
              improve your performance with our intelligent AI system.
            </p>
            <button className="px-5 py-1.5  border text-sm rounded-full  ">
              Start Interview
            </button>
          </div>

          {/* Right: Image Section */}
          <div className="w-full md:w-1/2">
            <Image
              src="https://i.ibb.co/v60FJCDm/13963976427.pngg" // Make sure this image exists
              alt="Interview Illustration"
              width={500}
              height={500}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>
      <h3 className="text-2xl md:text-3xl font-bold  text-zinc-900 dark:text-white mt-8 w-11/12 mx-auto">
        Explore AI Mock Interviews by Role
      </h3>

      <section className="w-11/12 mx-auto py-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {jobs.map((job) => (
          <div
            key={job._id}
            className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-lg shadow p-5 flex flex-col gap-4 hover:shadow-md transition"
          >
            {/* Company Logo and Role */}
            <div className="flex items-center gap-4">
              <Image
                src={job.companyLogo}
                alt={job.role}
                width={50}
                height={50}
                className="rounded-full w-12 h-12 object-cover"
              />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {job.role}
              </h3>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {job.description}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-1 text-yellow-500">
              <Star className="w-4 h-4 fill-yellow-400" />
              <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                {job.rating}
              </span>
            </div>

            {/* Button */}
            <Link href={`/interview/start/${job.role}`}>
              <button className="mt-auto w-full px-4 py-2 cursor-pointer text-zinc-900 dark:text-white rounded-full text-sm border">
                Start Interview
              </button>
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
};

export default page;
