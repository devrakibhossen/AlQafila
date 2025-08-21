import PostDetails from "../../components/PostDetails";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "AlQafila | Post Deails",
};


interface ParamsProps {
  params: {
    id: string;
    slug: string;
  };
}
const page = async({params}:ParamsProps) => {

  const {id , slug } = params ;

  console.log("This is params: " , id, slug);
  let data = null;
  try{
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/posts/${id}/${slug}`);
   data = await res.json();
    console.log("This sis data", data);
  }catch (err) {
    console.log(err);
  }

  return (
    <div className="w-11/12 mx-auto">
      <PostDetails post={data?.data}/>
    </div>
  );
};

export default page;
