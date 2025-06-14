import { PiArticleNyTimesThin } from "react-icons/pi";

const StoryModal = () => {
  return (
    <div className="w-full">
      <div className="flex gap-1 justify-center  transition duration-200 items-center bg-gray-100 hover:bg-gray-200 dark:text-gray-300 text-gray-700 cursor-pointer w-full rounded-full p-2 ">
        <PiArticleNyTimesThin className="green-accent text-xl" />
        <span className="text-sm">Write Article</span>
      </div>
    </div>
  );
};

export default StoryModal;
