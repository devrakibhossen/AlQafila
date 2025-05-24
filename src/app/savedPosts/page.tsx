import { Metadata } from "next";
import Image from "next/image";
import { FaSearch, FaTrash } from "react-icons/fa";
export const metadata: Metadata = {
  title: "AlQafila | Saved Posts",
};
const page = () => {
  const savedPosts = [
    {
      id: 1,
      title: "Top 10 JavaScript Tricks",
      description: "Learn some amazing JS tricks you probably didn’t know.",
      image: "https://i.ibb.co/S4jHppQH/image.png",
    },
    {
      id: 2,
      title: "Build a React App in 10 Minutes",
      description: "A fast guide for developers to bootstrap a React app.",
      image: "https://i.ibb.co/MkS5PKcv/image.png",
    },
    {
      id: 3,
      title: "UI/UX Tips for Better Design",
      description: "Improve your designs with these simple UX tricks.",
      image: "https://i.ibb.co/S4jHppQH/image.png",
    },
  ];

  return (
    <div className="mx-4">
      <div className="max-w-5xl mx-auto ">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-bold">Saved Posts</h1>
          <div className="flex rounded-full items-center gap-2 px-4 py-2 w-1/2 bg-white dark:bg-zinc-900">
            <FaSearch className="text-gray-400" />
            <input
              type="text"
              placeholder="Search saved..."
              className="w-full outline-none text-sm bg-transparent"
            />
          </div>
        </div>

        {/* Post List */}
        <div className="space-y-4">
          {savedPosts.length === 0 ? (
            <div className="text-center py-20">
              <Image
                src="https://i.ibb.co/wq1b1Dr/1714319190841-2.jpg"
                alt="logo"
                className="w-20 mx-auto mb-4"
                width={150}
                height={150}
              />
              <h3 className="text-xl font-semibold">No Saved Posts</h3>
              <p className="text-gray-500">{`You haven't saved any posts yet.`}</p>
            </div>
          ) : (
            savedPosts.map((post) => (
              <div
                key={post.id}
                className="flex gap-4 items-start p-4 border rounded-lg shadow-sm dark:bg-zinc-900 bg-white hover:shadow-md transition"
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  className="w-28 h-28 object-cover rounded"
                  width={150}
                  height={150}
                />
                <div className="flex-1">
                  <h2 className="text-lg font-semibold">{post.title}</h2>
                  <p className="text-gray-600 text-sm mt-1">
                    {post.description}
                  </p>
                  <button className="green-accent hover:underline mt-2">
                    View Post
                  </button>
                </div>
                <button className="text-red-500 hover:text-red-700 text-sm">
                  <FaTrash />
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
