"use client";
import Image from "next/image";
import { useEffect } from "react";
import PostHeader from "./PostHeader";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { fetchPosts } from "@/store/features/posts/postsSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import CustomVideoPlayer from "../watch/components/CustomVideoPlayer";
import PostActions from "../post/components/PostActions";
import { Skeleton } from "@/components/ui/skeleton";

const Posts = () => {
  const dispatch = useDispatch<AppDispatch>();
  const posted = useSelector((state: RootState) => state.posts.posts);
  const loading = useSelector((state: RootState) => state.posts.loading);
  const posts = posted?.data;

  console.log("posted", posts);
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="bg-white dark:bg-zinc-900 dark:border-zinc-800/40 border rounded-md p-4 space-y-3"
          >
            <div className="flex items-center gap-3">
              <Skeleton className="w-10 h-10 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="w-32 h-3 rounded" />
                <Skeleton className="w-20 h-2 rounded" />
              </div>
            </div>

            <Skeleton className="w-full h-4 rounded" />
            <Skeleton className="w-3/4 h-4 rounded" />
            <Skeleton className="w-full h-64 rounded" />

            <div className="grid grid-cols-3 gap-2 pt-2">
              <Skeleton className="h-8 rounded" />
              <Skeleton className="h-8 rounded" />
              <Skeleton className="h-8 rounded" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div>
      {posts?.map((post) => (
        <div
          key={post._id}
          className="bg-white dark:bg-zinc-900 dark:border-zinc-800/40 border md:rounded-md mb-1.5 "
        >
          {typeof post.authorId === "object" && (
            <PostHeader authorInfo={post.authorId} createdAt={post.createdAt} />
          )}

          <div className="space-y-2">
            <p className="whitespace-pre-line break-words text-black text-sm dark:text-gray-300  md:px-3 px-2.5">
              {post.text}
            </p>

            <div className="flex flex-wrap gap-1  md:px-3  px-2.5">
              {post?.hashtags?.map((tag, index) => (
                <span key={index} className="text-sm green-accent">
                  #{tag}
                </span>
              ))}
            </div>

            {post.images && post.images.length > 0 && (
              <Swiper
                pagination={{
                  dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                {post?.images?.map((imgObj, idx) => (
                  <SwiperSlide key={idx}>
                    <Image
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA..."
                      className="w-full max-h-[400px] object-contain "
                      src={imgObj?.images}
                      alt="Post image"
                      width={500}
                      height={300}
                      priority
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            )}

            {post?.video?.video && (
              <CustomVideoPlayer src={post?.video?.video} />
            )}
            <PostActions postId={post?._id ?? ""} postSlug={post?.slug ?? ""} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
