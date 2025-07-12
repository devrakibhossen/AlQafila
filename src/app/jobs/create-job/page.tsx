import { Metadata } from "next";
import Image from "next/image";
import CreatePostForm from "../components/CreatePostForm";

export const metadata: Metadata = {
  title: "AlQafila | Create Job",
};

const companies = [
  { id: 0, name: "Linkedin", logo: "https://i.ibb.co/rRdB0yxM/image.png" },
  { id: 1, name: "Google", logo: "https://i.ibb.co/RkHZTYPm/image.png" },
  { id: 2, name: "Tesla", logo: "https://i.ibb.co/wFWsFSKK/image.png" },
  { id: 3, name: "Opent Ai", logo: "https://i.ibb.co/WpfqmbSB/image.png" },
  { id: 4, name: "Apple", logo: "https://i.ibb.co/20ft5VqC/image.png" },
  { id: 5, name: "Samsung", logo: "https://i.ibb.co/DfvmV9wR/image.png" },
];

const testimonials = [
  {
    quote:
      "We found our ideal candidate within 48 hours of posting. The quality of applicants was exceptional!",
    author: "Sarah Chen",
    company: "TechCorp",
  },
  {
    quote:
      "The platform made hiring remote talent incredibly simple. Highly recommended!",
    author: "Mark Johnson",
    company: "StartupX",
  },
  {
    quote:
      "We've consistently found high-quality candidates here. It's our go-to platform for all our hiring needs.",
    author: "Emily Rodriguez",
    company: "InnovateNow",
  },
];

const stats = [
  { value: "10k+", label: "Monthly active job seekers" },
  { value: "48h", label: "Average time to hire" },
  { value: "95%", label: "Employer satisfaction rate" },
  { value: "500+", label: "Companies hiring monthly" },
];
const page = () => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-5 md:w-11/12 px-1 mx-auto md:mb-5 mb-10">
      <div className="md:col-span-2 bg-white dark:bg-zinc-900 border rounded-md md:p-5 p-2.5  w-full">
        <CreatePostForm />
      </div>
      <div className="md:col-span-1 bg-white dark:bg-zinc-900 border rounded-md p-5 lg:block hidden">
        <div className="mb-5">
          <h3 className="text-xl font-bold">Trusted by Industry Leaders</h3>
          <p>Join thousands of companies hiring top talent</p>
        </div>
        <div className="space-y-6 ">
          {/* Company Logos */}
          <div className="grid grid-cols-3 gap-4">
            {companies.map((company) => (
              <div
                key={company.id}
                className="flex items-center justify-center"
              >
                <Image
                  src={company.logo}
                  alt={company.name}
                  height={80}
                  width={80}
                  className="border rounded-lg"
                />{" "}
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="space-y-4">
            {testimonials.map((testimonial, index) => (
              <blockquote
                key={index}
                className="border-l-2 border-l-green-600 border-primary pl-4"
              >
                <p className="text-sm italic text-muted-foreground">
                  {testimonial.quote}
                </p>
                <footer className="mt-2 text-sm font-medium">
                  - {testimonial.author}, {testimonial.company}
                </footer>
              </blockquote>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="rounded-lg bg-muted p-4">
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
