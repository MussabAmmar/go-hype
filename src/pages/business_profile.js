import React from "react";
import Layout from "@/components/layout/Layout";
import Image from "next/image";
import { Star } from "@phosphor-icons/react";

const BusinessProfile = () => {
  const data = {
    profilePic: "/bus_profile1.jpg",
    name: "Noon",
    tagline: "The social learning company",
    reviewScore: 4.5,
    reviewCount: 45,
    industry: "E-learning",
    orgSize: "Medium",
    about:
      "Our mission is to radically change the way people learn. We empower students to learn from top teachers in groups with their friends",
  };
  const upcomingWork = {
    picture: "/image2.jpg",
    title: "Event Title",
    description:
      "Event description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  };
  const prevWork = ["/prev1.jpg", "/prev2.jpg", "/prev3.jpg"];
  return (
    <Layout>
      {/* Profile Picture */}
      <div className="w-full my-10">
        <div className="relative w-full h-[300px]">
          <Image
            src={data.profilePic}
            fill
            alt="profile picture"
            className="object-contain"
          />
        </div>
        <div className="text-white">
          <h1 className="text-2xl font-medium">{data.name}</h1>
          <p>{data.tagline}</p>
          <div className="flex items-center">
            <Star size={20} weight="fill" color="#bb840c" />
            <span>{data.reviewScore}out of 5.0</span>
          </div>
        </div>
      </div>
      {/* Information about the company */}
      <div className="w-full flex flex-col space-y-3 text-white my-10">
        <div className="">
          <h1 className="text-2xl font-medium">Industry:</h1>
          <p className="">{data.industry}</p>
        </div>
        <div className="">
          <h1 className="text-2xl font-medium">Organizational Size:</h1>
          <p className="">{data.orgSize}</p>
        </div>
        <div className="">
          <h1 className="text-2xl font-medium">About:</h1>
          <p className="">{data.about}</p>
        </div>
      </div>
      {/* Featured Event */}
      <div className="w-full flex flex-col space-y-3 text-white my-10">
        <h1 className="text-2xl font-medium">Upcoming Work:</h1>
        <div className="relative w-full h-[300px]">
          <Image
            src={upcomingWork.picture}
            alt="event picture"
            fill
            className="object-cover"
          />
          <div className="absolute flex justify-between items-center bottom-0 z-10">
            <div className="w-1/3">
              <h1 className="text-lg font-medium">{upcomingWork.title}</h1>
              <p>{upcomingWork.description}</p>
            </div>
            <button className="bg-green px-6 py-3 rounded-lg">
              Bid Project
            </button>
          </div>
        </div>
      </div>
      {/* Previous Work */}
      <div className="w-full flex flex-col space-y-3 text-white my-10">
        <h1 className="text-2xl font-medium">Previous Work</h1>
        <div className="flex justify-around">
          {prevWork.map((image, index) => {
            return (
              <Image
                key={index}
                src={image}
                alt="work image"
                width={250}
                height={250}
                className="rounded-2xl"
              />
            );
          })}
        </div>
      </div>
      {/* Reviews & Ratings */}
      <div className="w-full flex flex-col space-y-3 text-white my-10">
        <h1 className="text-2xl font-medium">Reviews and Rating</h1>
        <div className="w-1/3 bg-slate-600 p-5 rounded-xl">
          <div className="flex justify-start items-center space-x-2">
            <h2 className="font-medium">Anonymous</h2>
            <div className="flex">
              <Star size={10} weight="fill" color="#bb840c" />
              <Star size={10} weight="fill" color="#bb840c" />
              <Star size={10} weight="fill" color="#bb840c" />
            </div>
          </div>
          <h2>October 22nd, 2022</h2>
          <p>
            {
              "Thank you Magic Jhonson for taking the time out to do what you did! I know the students and staff will love this!! Thanks once again"
            }
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default BusinessProfile;
