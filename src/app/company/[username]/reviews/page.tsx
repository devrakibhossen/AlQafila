"use client";
import { Plus, Star } from "lucide-react";
import ReviewCard from "../../components/ReviewCard";

const page = () => {
  const reviews = [
    {
      reviewerName: "Sarah Johnson",
      reviewerImage:
        "https://res.cloudinary.com/duhybktme/image/upload/v1754316559/w9cf7fjcoqomrhq6wheg.webp",
      reviewerTitle: "Senior Software Engineer",
      rating: 5,
      reviewText:
        "TechCorp has been an amazing place to work. The company culture is inclusive and supportive, with excellent opportunities for career growth. The leadership team genuinely cares about employee development and work-life balance.",
      date: "2 weeks ago",
      helpfulCount: 12,
      workType: "Current Employee" as const,
    },
    {
      reviewerName: "Michael Chen",
      reviewerImage:
        "https://res.cloudinary.com/duhybktme/image/upload/v1754026559/gsnhh1p3qt7etswiqeep.jpg",
      reviewerTitle: "Product Manager",
      rating: 5,
      reviewText:
        "Outstanding company with cutting-edge technology and innovative projects. The collaborative environment encourages creativity and professional growth. Benefits package is comprehensive and competitive.",
      date: "1 month ago",
      helpfulCount: 8,
      workType: "Current Employee" as const,
    },
    {
      reviewerName: "Emily Rodriguez",
      reviewerImage:
        "https://res.cloudinary.com/duhybktme/image/upload/v1754026559/gsnhh1p3qt7etswiqeep.jpg",
      reviewerTitle: "UX Designer",
      rating: 4,
      reviewText:
        "Great place for creative professionals. The design team has autonomy to innovate and the company invests in the latest design tools and technologies. Could improve on remote work flexibility.",
      date: "2 months ago",
      helpfulCount: 15,
      workType: "Former Employee" as const,
    },
    {
      reviewerName: "David Park",
      reviewerImage:
        "https://res.cloudinary.com/duhybktme/image/upload/v1754026559/gsnhh1p3qt7etswiqeep.jpg",
      reviewerTitle: "CTO at StartupXYZ",
      rating: 5,
      reviewText:
        "TechCorp delivered exceptional results for our digital transformation project. Their team's expertise and professionalism exceeded our expectations. Highly recommend their services.",
      date: "3 months ago",
      helpfulCount: 22,
      workType: "Client" as const,
    },
  ];
  const ratingDistribution = [
    { stars: 5, count: 89, percentage: 71 },
    { stars: 4, count: 25, percentage: 20 },
    { stars: 3, count: 8, percentage: 6 },
    { stars: 2, count: 2, percentage: 2 },
    { stars: 1, count: 1, percentage: 1 },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < Math.floor(rating)
            ? "fill-yellow-400 text-yellow-400"
            : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="bg-white dark:bg-zinc-900 p-5 rounded-md ">
      <div className="mb-5">
        <div className="flex items-center gap-5 justify-between">
          <div className="mb-3">
            <h3 className="text-lg mb-2">Reviews</h3>
            <div className="flex items-center gap-3">
              <p className="flex">{renderStars(4.5)}</p>
              <h3 className="text-bold">4.8</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                (125 reviews)
              </p>
            </div>
          </div>
          <button className="bg-green-accent py-2 px-4 rounded-md flex items-center gap-1.5 text-white test-sm">
            <Plus className="w-4 h-4" /> Write Review
          </button>
        </div>
        <div className="space-y-2">
          {ratingDistribution.map((item) => (
            <div key={item.stars} className="flex items-center gap-3">
              <span className="text-sm font-medium w-8">{item.stars}★</span>
              <div className="flex-1 bg-muted rounded-full h-2">
                <div
                  className="h-2 bg-green-accent rounded-full"
                  style={{ width: `${item.percentage}%` }}
                ></div>
              </div>
              <span className="text-sm text-gray-700 dark:text-gray-300 w-8">
                {item.count}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </div>
    </div>
  );
};

export default page;
