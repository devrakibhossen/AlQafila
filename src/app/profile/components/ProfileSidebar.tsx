"use client";
import Image from "next/image";
import Link from "next/link";
import { GoPlus } from "react-icons/go";
import { MdOutlineEdit } from "react-icons/md";
import { useState } from "react";
import { useAppDispatch } from "@/store/hooks";
import { EducationModal } from "./EducationModal";
import { ExperienceModal } from "./ExperienceModal";
import {
  createEducation,
  createExperience,
  editEducation,
  editExperience,
  fetchUserProfile,
} from "@/store/features/userProfile/userProfileSlice";

type ModalType = "education" | "experience" | null;

type Education = {
  _id?: string;
  institute?: string;
  degree?: string;
  gpa?: string;
  startYear?: string;
  endYear?: string;
  image?: string;
};
type Experience = {
  _id?: string;
  title?: string;
  company?: string;
  duration?: string;
  startYear?: string;
  endYear?: string;
  image?: string;
};
type ModalData = Education | Experience;
interface UserData {
  _id: string;
  name: string;
  username: string;
  email: string;
  about: string;
  bio: string;
  education: Education[];
  experience: Experience[];
  locations: string;
  profileImage: string | null;
  coverImage: string | null;
}

interface ProfileSideProps {
  userInfo: UserData;
  isEditOption: boolean;
}
const ProfileSidebar = ({ userInfo, isEditOption }: ProfileSideProps) => {
  const dispatch = useAppDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState<ModalType>(null);
  const [editMode, setEditMode] = useState(false);
  const [editData, setEditData] = useState<ModalData | null>(null);

  const handleOpenModal = (
    type: ModalType,
    mode: "add" | "edit",
    data?: ModalData
  ) => {
    setModalType(type);
    setEditMode(mode === "edit");
    setEditData(data || null);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setModalType(null);
    setEditMode(false);
    setEditData(null);
  };
  // const handleSubmit = (data: ModalData) => {
  //   console.log("data", data);
  //   if (modalType === "education") {
  //     const educationData = data as Education;
  //     if (editMode) {
  //       dispatch(
  //         updateEducation({ email: userInfo?.email, data: educationData })
  //       );
  //     } else {
  //       dispatch(
  //         postEducation({ email: userInfo?.email, data: educationData })
  //       );
  //     }
  //   } else if (modalType === "experience") {
  //     const experienceData = data as Experience;
  //     if (editMode) {
  //       dispatch(
  //         updateExperience({ email: userInfo?.email, data: experienceData })
  //       );
  //     } else {
  //       dispatch(
  //         postExperience({ email: userInfo?.email, data: experienceData })
  //       );
  //     }
  //   }

  //   handleClose();
  // };

  const handleEducationSubmit = (data: Education) => {
    if (editMode) {
      dispatch(editEducation({ email: userInfo?.email, data })).then(() => {
        dispatch(fetchUserProfile(userInfo?.username));
      });
    } else {
      dispatch(createEducation({ email: userInfo?.email, data })).then(() => {
        dispatch(fetchUserProfile(userInfo?.username));
      });
    }
    handleClose();
  };

  const handleExperienceSubmit = (data: Experience) => {
    if (editMode) {
      dispatch(editExperience({ email: userInfo?.email, data })).then(() => {
        dispatch(fetchUserProfile(userInfo?.username));
      });
    } else {
      dispatch(createExperience({ email: userInfo?.email, data })).then(() => {
        dispatch(fetchUserProfile(userInfo?.username));
      });
    }
    handleClose();
  };

  return (
    <div className="space-y-6">
      {/* Education Modal */}
      {modalType === "education" && (
        <EducationModal
          open={isOpen}
          onClose={handleClose}
          onSubmit={handleEducationSubmit}
          mode={editMode ? "edit" : "add"}
          defaultValues={editData as Education}
        />
      )}

      {/* Experience Modal */}
      {modalType === "experience" && (
        <ExperienceModal
          open={isOpen}
          onClose={handleClose}
          onSubmit={handleExperienceSubmit}
          mode={editMode ? "edit" : "add"}
          defaultValues={editData as Experience}
        />
      )}

      {/* Education Section */}
      <div className="bg-white dark:bg-zinc-900 rounded-md shadow-lg p-4">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
            Education
          </h4>
          {isEditOption && (
            <GoPlus
              className="green-accent dark:text-gray-300 text-2xl cursor-pointer"
              onClick={() => handleOpenModal("education", "add")}
            />
          )}
        </div>

        {userInfo?.education?.map((e, idx) => (
          <div key={idx} className="flex gap-4 justify-between mb-4 p-1">
            <div className="flex gap-3 items-center">
              <Image
                src={e?.image || "https://i.ibb.co/Jw3CLX4J/image.png"}
                alt="institute"
                className="w-12 h-12 rounded-full object-cover border"
                width={48}
                height={48}
              />
              <div>
                <h5 className="text-sm font-semibold dark:text-white text-gray-800">
                  {e?.institute}
                </h5>
                <p className="text-xs text-gray-600 dark:text-white">
                  {e?.degree} | {e?.startYear}-{e?.endYear}
                </p>
                <p className="text-xs text-gray-600 dark:text-white">
                  GPA - {e?.gpa}
                </p>
              </div>
            </div>
            {isEditOption && (
              <MdOutlineEdit
                onClick={() => handleOpenModal("education", "edit", e)}
                className="text-gray-700 dark:text-gray-300 text-2xl cursor-pointer"
              />
            )}
          </div>
        ))}
      </div>

      {/* Experience Section */}
      <div className="bg-white dark:bg-zinc-900 rounded-md shadow-lg p-4">
        <div className="flex  justify-between items-center mb-4">
          <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
            Experience
          </h4>
          {isEditOption && (
            <GoPlus
              className="green-accent dark:text-gray-300 text-2xl cursor-pointer"
              onClick={() => handleOpenModal("experience", "add")}
            />
          )}
        </div>

        <div className="flex flex-col gap-4 justify-between mb-4 ">
          {userInfo?.experience?.map((e, idx) => (
            <div key={idx} className="flex gap-3 justify-between  p-1">
              <div className="flex gap-3 items-center">
                <Image
                  src={e?.image || "https://i.ibb.co/zWK8Y8sw/image.png"}
                  alt="Company"
                  className="w-12 h-12 rounded-full object-cover border"
                  width={48}
                  height={48}
                />
                <div>
                  <h5 className="text-sm font-semibold dark:text-white text-gray-800">
                    {e?.company}
                  </h5>
                  <p className="text-xs text-gray-600 dark:text-gray-300">
                    {e?.title} | {e?.duration}
                  </p>
                </div>
              </div>
              {isEditOption && (
                <MdOutlineEdit
                  onClick={() => handleOpenModal("experience", "edit", e)}
                  className="text-gray-700 dark:text-gray-300 text-2xl cursor-pointer"
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* {isEditOption && (
            <MdOutlineEdit
              onClick={() => handleOpenModal("experience", "edit")}
              className="text-gray-700 dark:text-gray-300 text-2xl cursor-pointer"
            />
          )} */}

      {/* Profile URL */}
      <div className="bg-white dark:bg-zinc-900 rounded-md shadow-lg p-4">
        <div className="flex justify-between items-center mb-3">
          <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
            Profile URL
          </h4>
          {isEditOption && (
            <MdOutlineEdit className="text-gray-700 dark:text-gray-300 text-2xl" />
          )}
        </div>

        <p className="text-sm green-accent hover:underline leading-relaxed cursor-pointer">
          <Link
            href={`https://alqafila.vercel.app/profile/${userInfo?.username}`}
            target="_blank"
          >
            https://alqafila.vercel.app/profile/{userInfo?.username}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ProfileSidebar;
