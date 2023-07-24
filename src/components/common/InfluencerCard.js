import React from "react";
import Image from "next/image";

const InfluencerCard = ({ profilePicture, name, occupation, priceToHire }) => {
  return (
    <div className="">
      <Image
        src={profilePicture}
        width={250}
        height={250}
        alt={name}
        className="rounded-t-lg"
      />
      <h2 className="text-2xl font-medium text-white mt-4">{name}</h2>
      <h2 className="text-lg text-green">{occupation}</h2>
      <h2 className="text-lg text-white">
        <span className="font-medium">Base Price: </span>PKR {priceToHire}
      </h2>
    </div>
  );
};

export default InfluencerCard;
