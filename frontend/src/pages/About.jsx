import React from "react";

const About = () => {
  return (
    <div className="flex h-heightWithoutNavbar flex-col items-center justify-start p-5 lg:flex-row">
      <div className="grid h-full w-full place-content-center">
        <img
          src="./aboutimage.jpeg"
          alt=""
          className="w-[300px] rounded-full sm:w-[400px] md:w-[450px] lg:w-[500px]"
        />
      </div>
      <div className="flex h-full w-full flex-col items-center justify-center text-white">
        <div className="">
          <h1 className="relative w-fit text-2xl font-bold before:absolute before:top-[90%] before:h-[3px] before:w-[60%] before:bg-[#2563eb] lg:text-4xl lg:before:top-full">
            About Us
          </h1>
          <p className="mt-1 text-[15px] text-gray-300 lg:mt-3">
            Welcome to Search My Notes, the ultimate hub for students to
            seamlessly share and access educational resources. Our platform is
            designed with a singular purpose – to make the exchange of study
            materials as effortless as possible, fostering a collaborative and
            enriching academic experience for students across colleges.
          </p>
        </div>
        <div className="">
          <h1 className="relative w-fit text-2xl font-bold before:absolute before:top-[90%] before:h-[3px] before:w-[60%] before:bg-[#2563eb] lg:text-4xl lg:before:top-full">
            Who I am:
          </h1>
          <p className="mt-1 text-[15px] text-gray-300 lg:mt-3">
            Search My Notes is more than a website; it's a community initiative
            inspired by my passion for learning. As a dedicated student, I
            believe in the shared journey of education. Alongside a diverse team
            of tech enthusiasts and educators, we aim to enhance the learning
            experience for everyone.
          </p>
        </div>
        <div className="">
          <h1 className="relative w-fit text-2xl font-bold before:absolute before:top-[90%] before:h-[3px] before:w-[60%] before:bg-[#2563eb] lg:text-4xl lg:before:top-full">
            Our Mission:
          </h1>
          <p className="mt-1 text-[15px] text-gray-300 lg:mt-3">
            At Search My Notes, my mission is simple: to empower students
            through a centralized platform where knowledge is limitless. We
            strive to eliminate obstacles to academic success, ensuring that
            valuable study materials are accessible to everyone.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
