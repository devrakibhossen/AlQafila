"use client";
import { Star, ThumbsUp } from "lucide-react";
import Image from "next/image";

interface ReviewCardProps {
  reviewerName: string;
  reviewerImage: string;
  reviewerTitle: string;
  rating: number;
  reviewText: string;
  date: string;
  helpfulCount: number;
  workType: "Current Employee" | "Former Employee" | "Client";
}

const ReviewCard = ({
  reviewerName,
  reviewerTitle,
  reviewerImage,
  rating,
  reviewText,
  date,
  helpfulCount,
}: ReviewCardProps) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="p-6 shadow-md bg-gray-100 rounded-md  transition-shadow">
      <div className="flex items-start gap-4">
        <Image
          className="rounded-full h-11 w-11 border-2 border-gray-200 hover:border-primary transition-all"
          src={reviewerImage || ""}
          alt="User Avatar"
          width={50}
          height={50}
          priority
        />

        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h3 className="font-semibold text-foreground">{reviewerName}</h3>
              <p className="text-sm text-professional-gray">{reviewerTitle}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 mb-3">
            <div className="flex">{renderStars(rating)}</div>
            <span className="text-sm text-professional-gray">
              {rating}.0 • {date}
            </span>
          </div>

          <p className="text-foreground leading-relaxed mb-4">{reviewText}</p>

          <div className="flex items-center gap-1 text-sm text-professional-gray">
            <ThumbsUp className="w-4 h-4" />
            <span>Helpful ({helpfulCount})</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewCard;
