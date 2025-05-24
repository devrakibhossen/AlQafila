import { FaBookOpen } from "react-icons/fa";

const StoryModal = () => {
  return (
    <div>
      <div className="flex gap-1 items-center dark:text-gray-300 text-gray-700 cursor-pointer border rounded-full px-3 py-1">
        <FaBookOpen className="green-accent" />
        <span className="text-sm">Story</span>
      </div>
    </div>
  );
};

export default StoryModal;
