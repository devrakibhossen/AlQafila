// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { GoPlus } from "react-icons/go";
// import { MdOutlineEdit } from "react-icons/md";
// import { EducationExperienceModal } from "./EducationExperienceModal";
// import { useState, useCallback } from "react";

// type EducationExperienceData = {
//   title: string;
//   institution?: string;
//   company?: string;
//   startDate: string;
//   endDate: string;
//   description: string;
// };

// const ProfileSidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [modalType, setModalType] = useState<"education" | "experience">(
//     "education"
//   );
//   const [mode, setMode] = useState<"add" | "edit">("add");
//   const [editData, setEditData] = useState<EducationExperienceData | undefined>(
//     undefined
//   );

//   const handleOpenModal = (
//     type: "education" | "experience",
//     mode: "add" | "edit",
//     data?: EducationExperienceData
//   ) => {
//     setModalType(type);
//     setMode(mode);
//     setEditData(data);
//     setIsOpen(true);
//   };

//   const handleClose = () => {
//     setIsOpen(false);
//     setEditData(undefined);
//   };

//   const handleSubmit = (data: EducationExperienceData) => {
//     console.log(mode === "add" ? "Added:" : "Updated:", data);
//     setIsOpen(false);
//   };

//   const education = [
//     {
//       _id: "1",
//       institutionImage: "https://i.ibb.co/vx8HzcdH/image.png",
//       institution: "Lakhanpur Fazil Madrasah",
//       years: "2021-2022",
//       name: "SSC",
//       gpa: 4.63,
//     },
//     {
//       _id: "2",
//       institutionImage: "https://i.ibb.co/TMpVtrpT/image.png",
//       institution: "Comilla Govt College",
//       years: "2024-2025",
//       name: "HSC",
//       gpa: 5.0,
//     },
//   ];
//   return (
//     <div className="space-y-6">
//       {/* Education Section */}
//       <div className="bg-white dark:bg-zinc-900 rounded-md shadow-lg p-4">
//         <div className="flex justify-between items-center mb-4">
//           <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
//             Education
//           </h4>
//           <div className="flex gap-2 items-center">
//             <EducationExperienceModal
//               open={isOpen}
//               onClose={() => setIsOpen(false)}
//               onSubmit={handleAdd}
//               mode="add"
//               type="education"
//             />

//             <GoPlus className="text-gray-700 dark:text-gray-300 text-2xl" />
//           </div>
//         </div>

//         {/* Single Education Item */}
//         {education.map((e) => (
//           <div
//             key={e._id}
//             className="flex gap-4  justify-between mb-4 border p-2 rounded-md shadow-md"
//           >
//             <div className="flex gap-4 items-center ">
//               <Image
//                 src={e.institutionImage}
//                 alt="Institution"
//                 className="w-14 h-14 rounded-full object-cover border"
//                 width={48}
//                 height={48}
//               />
//               <div>
//                 <h5 className="text-sm font-semibold dark:text-white text-gray-800">
//                   {e.institution}
//                 </h5>
//                 <p className="text-xs text-gray-600 dark:text-white">
//                   SSC | {e.years}
//                 </p>
//                 <p className="text-xs text-gray-600 dark:text-white">
//                   GPA - {e.gpa}
//                 </p>
//               </div>
//             </div>
//             <MdOutlineEdit
//               onClick={() => setIsOpen(true)}
//               className="text-gray-700 dark:text-gray-300  text-2xl"
//             />
//           </div>
//         ))}
//       </div>

//       {/* Experience Section */}
//       <div className="bg-white dark:bg-zinc-900 rounded-md shadow-lg p-4">
//         <div className="flex justify-between items-center mb-4">
//           <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
//             Experience
//           </h4>
//           <div className="flex gap-2 items-center ">
//             <EducationExperienceModal
//               open={isOpen}
//               onClose={() => setIsOpen(false)}
//               onSubmit={handleAdd}
//               mode="edit"
//               type="experience"
//             />
//             <GoPlus className="text-gray-700 dark:text-gray-300 text-2xl" />
//           </div>
//         </div>

//         {/* Single Experience Item */}
//         <div className="flex gap-4  justify-between mb-4 border p-2 rounded-md shadow-md">
//           <div className="flex gap-4 items-center ">
//             <Image
//               src="https://i.ibb.co/xSF3YVvz/image.png"
//               alt="Company"
//               className="w-12 h-12 rounded-full object-cover border"
//               width={48}
//               height={48}
//             />
//             <div>
//               <h5 className="text-sm font-semibold dark:text-white text-gray-800">
//                 Hero Web Agency
//               </h5>
//               <p className="text-xs text-gray-600 dark:text-gray-300">
//                 Front-End Developer | 6 Months
//               </p>
//             </div>
//           </div>
//           <MdOutlineEdit
//             onClick={() => setIsOpen(true)}
//             className="text-gray-700 dark:text-gray-300 text-2xl"
//           />
//         </div>
//       </div>

//       {/* language */}
//       <div className=" bg-white dark:bg-zinc-900 rounded-md shadow-lg p-4">
//         <div className="flex justify-between items-center mb-3">
//           <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
//             Profile URL
//           </h4>
//           <MdOutlineEdit className="text-gray-700 dark:text-gray-300 text-2xl"></MdOutlineEdit>
//         </div>
//         <p className="text-sm text-blue-500 hover:underline leading-relaxed cursor-pointer">
//           <Link href="https://alqafila.vercel.app/profile/rakibhossen">
//             https://alqafila.vercel.app/profile/rakibhossen
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default ProfileSidebar;

"use client";
import Image from "next/image";
import Link from "next/link";
import { GoPlus } from "react-icons/go";
import { MdOutlineEdit } from "react-icons/md";
import { EducationExperienceModal } from "./EducationExperienceModal";
import { useState } from "react";

type EducationExperienceData = {
  title: string;
  institution?: string;
  company?: string;
  startDate: string;
  endDate: string;
  description: string;
  image: string;
};

const ProfileSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState<"education" | "experience">(
    "education"
  );
  const [mode, setMode] = useState<"add" | "edit">("add");
  const [editData, setEditData] = useState<EducationExperienceData | undefined>(
    undefined
  );
  //  const [editData, setEditData] = useState<EducationExperienceData>();

  const handleOpenModal = (
    type: "education" | "experience",
    mode: "add" | "edit",
    data?: EducationExperienceData
  ) => {
    setModalType(type);
    setMode(mode);
    setEditData(data);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setEditData(undefined);
  };

  const handleSubmit = (data: EducationExperienceData) => {
    console.log(mode === "add" ? "Added:" : "Updated:", data);
    setIsOpen(false);
  };

  const education = [
    {
      _id: "1",
      institutionImage: "https://i.ibb.co/vx8HzcdH/image.png",
      institution: "Lakhanpur Fazil Madrasah",
      years: "2021-2022",
      name: "SSC",
      gpa: 4.63,
    },
    {
      _id: "2",
      institutionImage: "https://i.ibb.co/TMpVtrpT/image.png",
      institution: "Comilla Govt College",
      years: "2024-2025",
      name: "HSC",
      gpa: 5.0,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Education Modal */}
      <EducationExperienceModal
        open={isOpen}
        onClose={handleClose}
        onSubmit={handleSubmit}
        mode={mode}
        type={modalType}
        defaultValues={editData}
      />

      {/* Education Section */}
      <div className="bg-white dark:bg-zinc-900 rounded-md shadow-lg p-4">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
            Education
          </h4>
          <GoPlus
            className="green-accent dark:text-gray-300 text-2xl cursor-pointer"
            onClick={() => handleOpenModal("education", "add")}
          />
        </div>

        {education.map((e) => (
          <div
            key={e._id}
            className="flex gap-4 justify-between mb-4 border p-2 rounded-md shadow-md"
          >
            <div className="flex gap-4 items-center">
              <Image
                src={e.institutionImage}
                alt="Institution"
                className="w-14 h-14 rounded-full object-cover border"
                width={48}
                height={48}
              />
              <div>
                <h5 className="text-sm font-semibold dark:text-white text-gray-800">
                  {e.institution}
                </h5>
                <p className="text-xs text-gray-600 dark:text-white">
                  {e.name} | {e.years}
                </p>
                <p className="text-xs text-gray-600 dark:text-white">
                  GPA - {e.gpa}
                </p>
              </div>
            </div>
            <MdOutlineEdit
              onClick={() =>
                handleOpenModal("education", "edit", {
                  title: e.name,
                  institution: e.institution,
                  startDate: e.years.split("-")[0],
                  endDate: e.years.split("-")[1],
                  image: e.institutionImage,
                  description: `GPA - ${e.gpa}`,
                })
              }
              className="text-gray-700 dark:text-gray-300 text-2xl cursor-pointer"
            />
          </div>
        ))}
      </div>

      {/* Experience Section */}
      <div className="bg-white dark:bg-zinc-900 rounded-md shadow-lg p-4">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
            Experience
          </h4>
          <GoPlus
            className="green-accent dark:text-gray-300 text-2xl cursor-pointer"
            onClick={() => handleOpenModal("experience", "add")}
          />
        </div>

        <div className="flex gap-4 justify-between mb-4 border p-2 rounded-md shadow-md">
          <div className="flex gap-4 items-center">
            <Image
              src="https://i.ibb.co/xSF3YVvz/image.png"
              alt="Company"
              className="w-12 h-12 rounded-full object-cover border"
              width={48}
              height={48}
            />
            <div>
              <h5 className="text-sm font-semibold dark:text-white text-gray-800">
                Hero Web Agency
              </h5>
              <p className="text-xs text-gray-600 dark:text-gray-300">
                Front-End Developer | 6 Months
              </p>
            </div>
          </div>
          <MdOutlineEdit
            onClick={() =>
              handleOpenModal("experience", "edit", {
                title: "Front-End Developer",
                company: "Hero Web Agency",
                startDate: "2023-01-01",
                endDate: "2023-06-01",
                image: "https://i.ibb.co/xSF3YVvz/image.png",
                description: "6 Months Experience",
              })
            }
            className="text-gray-700 dark:text-gray-300 text-2xl cursor-pointer"
          />
        </div>
      </div>

      {/* Profile URL */}
      <div className="bg-white dark:bg-zinc-900 rounded-md shadow-lg p-4">
        <div className="flex justify-between items-center mb-3">
          <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
            Profile URL
          </h4>
          <MdOutlineEdit className="text-gray-700 dark:text-gray-300 text-2xl" />
        </div>
        <p className="text-sm green-accent hover:underline leading-relaxed cursor-pointer">
          <Link href="https://alqafila.vercel.app/profile/rakibhossen">
            https://alqafila.vercel.app/profile/rakibhossen
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ProfileSidebar;
