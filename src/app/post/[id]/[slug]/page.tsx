import PostDetails from "../../components/PostDetails";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AlQafila | Post Details",
};

const Page = async (props: { params: Promise<{ id: string; slug: string }> }) => {
  const params = await props.params;
  const { id, slug } = params;

  let data = null;

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/posts/${id}/${slug}`
    );
    data = await res.json();
  } catch (err) {
    console.log(err);
  }

  return (
    <div className="md:w-11/12 mx-auto mx-1">
      <PostDetails post={data?.data} />
    </div>
  );
};

export default Page;