import Image from "next/image";
const page = () => {
  return (
    <div className="w-11/12 mx-auto grid md:grid-cols-3 grid-cols-1 gap-5 mt-10">
      <div className="md:col-span-2 col-span-1">
        <div className="justifyBetween mb-8">
          <div className="flex items-center space-x-2">
            <Image
              src="https://i.ibb.co/xSF3YVvz/image.png"
              alt="NodeFlair"
              className="w-14 h-14 rounded-md"
              width={78}
              height={78}
            />
            <div>
              <h3 className="text-md dark:text-white font-semibold text-gray-800">
                Front End Developer
              </h3>
              <p className="text-sm dark:text-gray-300 text-gray-500">
                Programming Hero
              </p>
            </div>
          </div>
          <button className="border px-3 rounded-sm text-sm p-1 dark:bg-zinc-900 ">
            Save
          </button>
        </div>

        <h3 className="text-lg front-bold mb-5">About the role</h3>
        <p className="text-sm">
          Front-end developers play a crucial role in crafting the user
          experience on websites and applications. Their responsibilities span
          from optimizing application performance to creating visually appealing
          user interfaces. Below are detailed descriptions of their key roles
          and responsibilities, organized as listicles: Optimize Applications
          for Maximum Speed Optimize code and assets to ensure fast load times
          and smooth performance. Utilize techniques like code splitting, lazy
          loading, and minification to reduce load times. Employ caching
          strategies and CDN (Content Delivery Network) integration to enhance
          speed. Building Reusable Codes Develop modular, reusable code
          components to streamline development and maintenance. Utilize
          front-end frameworks like React, Vue.js, or Angular to create scalable
          and reusable UI components. Implement design patterns such as MVC
          (Model-View-Controller) or MVVM (Model-View-ViewModel) to ensure code
          reusability. Designing New Applications and Websites Collaborate with
          UX/UI designers to translate design mockups into interactive web
          applications. Ensure designs are visually appealing, user-friendly,
          and responsive across various devices and screen sizes. Implement
          design principles such as typography, color theory, and layout to
          create engaging user interfaces. Develop New User-Facing Features
          Write clean, efficient code to implement new features and
          functionalities based on project requirements. Incorporate
          interactivity, animations, and transitions to enhance user engagement
          and usability. Conduct thorough testing to ensure feature
          compatibility and responsiveness across different browsers and
          devices.
        </p>
      </div>
      <div className="col-span-1">
        <div className="bg-white border rounded-md dark:bg-zinc-900 space-y-3 p-5 mb-5">
          <h3 className="text-md front-bold">Apply now</h3>
          <p className="text-xs">
            Please let Programming Hero you found this job on Alqafila. This
            helps us grow!
          </p>
          <button className="py-1 px-3 w-full text-center text-sm bg-green-accent rounded-md">
            Apply now
          </button>
        </div>
        <div className="bg-white border rounded-md dark:bg-zinc-900 space-y-1.5 p-5 mb-5">
          <h3 className="text-md front-bold mb-2">About the job</h3>
          <div className="justifyBetween gap-3">
            <p className="text-xs text-gray-400">Posted on</p>
            <p className="text-sm ">January 26,2026</p>
          </div>
          <div className="justifyBetween gap-3">
            <p className="text-xs text-gray-400">Employment Type</p>
            <p className="text-sm ">Full-Time</p>
          </div>
          <div className="justifyBetween gap-3">
            <p className="text-xs text-gray-400">Location</p>
            <p className="text-sm ">Bangladesh</p>
          </div>
          <div className="justifyBetween gap-3">
            <p className="text-xs text-gray-400">Salary</p>
            <p className="text-sm ">$10,000-$50,000</p>
          </div>
        </div>

        <div className="bg-white border rounded-md dark:bg-zinc-900 space-y-3 p-5 ">
          <h3 className="text-md front-bold">Skills</h3>
          <div className="flex gap-3 items-center">
            {["JavaScript", "DOM", "ES6", "Git", "Python"].map((skill, idx) => (
              <span
                key={idx}
                className="text-xs border text-center dark:text-gray-300 text-gray-700 py-1 px-2 rounded-sm "
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
