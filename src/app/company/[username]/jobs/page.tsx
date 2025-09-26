import Link from "next/link";
import { Plus } from "lucide-react";
import Image from "next/image";
import { MdOutlineModeEdit } from "react-icons/md";
const page = () => {
  const jobs = [
    {
      _id: "1",
      image: "https://i.ibb.co/bMTBBBH9/image.png",
      role: "Front-End Developer",
      jobType: "Full-time",
      company: "TechNova Inc.",
      location: "Remote",
      salary: "$50,000",
      experience: "1-3 years",
      postedDate: "2025-09-26",
      description:
        "We are looking for a skilled Front-End Developer to join our team and build responsive web applications.",
    },
    {
      _id: "2",
      image: "https://i.ibb.co/bMTBBBH9/image.png",
      role: "Back-End Developer",
      jobType: "Contract",
      company: "CodeCrafters Ltd.",
      location: "New York, USA",
      salary: "$60,000",
      experience: "2-5 years",
      postedDate: "2025-09-25",
      description:
        "Seeking an experienced Back-End Developer to design scalable APIs and manage databases.",
    },
    {
      _id: "3",
      image: "https://i.ibb.co/bMTBBBH9/image.png",
      role: "UI/UX Designer",
      jobType: "Part-time",
      company: "DesignHub",
      location: "London, UK",
      salary: "$40,000",
      experience: "1-4 years",
      postedDate: "2025-09-24",
      description:
        "Looking for a creative UI/UX Designer to create intuitive user interfaces and experiences.",
    },
  ];

  return (
    <div className="bg-white dark:bg-zinc-900 p-5 rounded-md ">
      <div className="flex justify-end mb-3">
        <Link href="/jobs/create-job">
          <button className="green-accent flex items-center cursor-pointer justify-center mb-3 gap-1 rounded-full border dark:border-zinc-800 border-gray-300 overflow-hidden shadow-sm bg-white dark:bg-zinc-900 text-sm font-medium py-1 px-2.5 transition-all">
            <Plus className="w-4 h-4" />
            Post Job
          </button>
        </Link>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2.5">My Posted Jobs</h3>
        <div className="grid grid-cols-2 gap-5">
          {jobs.map((job) => (
            <div
              key={job._id}
              className="p-5 bg-gray-100 dark:bg-black shadow-sm rounded-xl space-y-8"
            >
              <div className="flex justify-between items-center gap-5">
                <Image
                  src={job.image}
                  alt="logo"
                  className="object-cover w-15 h-15 border rounded-full p-1.5"
                  priority
                  width="100"
                  height="100"
                />
                <button className="flex items-center rounded-md bg-white gap-1 border py-1 px-2 text-sm">
                  <MdOutlineModeEdit />
                  Edit
                </button>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <h5 className="font-semibold">{job.company}</h5>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    5 days ago
                  </p>
                </div>
                <h2 className="text-2xl">{job.role}</h2>
                <div className="flex items-center gap-3">
                  <button className="border border-md py-1 px-3 bg-white rounded-md">
                    full-time
                  </button>
                  <button className="border border-md py-1 px-3 bg-white rounded-md">
                    remote
                  </button>
                </div>
              </div>

              <div className="border-t pt-2 flex justify-between items-center gap-5">
                <div>
                  <h3 className="font-semibold">{job.salary}/year</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {job.location}
                  </p>
                </div>
                <button className="bg-green-accent text-sm text-white py-1.5 px-3 rounded-md">
                  Apply now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
