import Layout from "@/components/layout/Layout";
import React, { useState } from "react";
import { InstagramLogo, FacebookLogo, TiktokLogo } from "@phosphor-icons/react";
import PrevWork from "@/components/common/PrevWork";

const UserProfile = () => {
  return (
    <Layout>
      <div className="pt-10">
        <div className="flex items-center space-x-5">
          <div className="">
            <img
              className="rounded-full"
              src="https://placehold.co/150"
              alt="Profile Picture"
            />
          </div>
          <div className="flex-grow">
            <h1 className="text-3xl text-white font-bold">Jess Bailey</h1>
            <span className="text-sm text-gray-300 ">@jessbailey</span>
          </div>
          <button className="text-white font-medium bg-green-600 hover:bg-green-700 rounded-lg py-2 px-4">
            Edit my profile
          </button>
        </div>
        <div className="flex mt-10">
          <div className="w-1/2 text-white">
            <h2 className="font-medium">Bio:</h2>
            <p className="text-sm">
              Laker Legend. 2X Hall of Fame Athlete. Business Leader. Chairman
              and CEO of Magic Johnson Enterprises. Earvin quote Magic Johnson
              will be on Cameo at exclusive times to create MAGICAL,
              Congratulatory, Inspirational, Motivational, Birthday and
              Graduation messages for the legendary people in your life. Sign up
              for email alerts and join Magic's Cameo Fan Club to be notified
              when Magic will be available for new requests.io:
            </p>
          </div>
          <div className="w-1/2 ml-10 text-white">
            <div className="flex justify-between">
              <h2 className="font-medium">Platforms:</h2>
              <div className="flex">
                <InstagramLogo size={30} color="white" />
                <FacebookLogo size={30} color="white" />
                <TiktokLogo size={30} color="white" />
              </div>
            </div>
            <div className="flex justify-between">
              <h2 className="font-medium">Categories:</h2>
              <ul className="flex font-sm">
                <li>Entertainment,</li>
                <li>TV,</li>
                <li>Comedy</li>
              </ul>
            </div>
            <div className="flex justify-between">
              <h2 className="font-medium">Location:</h2>
              <p className="font-sm">Lahore, Pakistan</p>
            </div>
            <div className="flex justify-between">
              <h2 className="font-medium">Audience Demographic:</h2>
              <p className="font-sm">Depressed Teenagers</p>
            </div>
            <div className="flex justify-between">
              <h2 className="font-medium">Base Price:</h2>
              <p>PKR 50,000</p>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <h2 className="text-white font-medium">Past Work:</h2>
          <div className="flex flex-nowrap overflow-x-scroll max-w-full">
            <PrevWork imageSrc={"https://placehold.co/100"} />
            <PrevWork imageSrc={"https://placehold.co/100"} />
            <PrevWork imageSrc={"https://placehold.co/100"} />
            <PrevWork imageSrc={"https://placehold.co/100"} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UserProfile;
