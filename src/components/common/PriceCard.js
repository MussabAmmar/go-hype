import React from "react";
import Link from "next/link";

const PriceCard = ({ price, linkTo }) => {
  return (
    <div className="flex flex-col justify-end p-5 w-[300px] h-[150px] rounded-xl bg-[url('/bg1.jpg')] bg-opacity-50">
      <h2 className="text-2xl font-bold text-white">UNDER</h2>
      <div className="text-4xl font-bold text-white">PKR {price}K</div>
      {/* <Link href={linkTo}>
        <a className="block bg-green-500 text-white px-4 py-2 rounded-lg text-center">
          Choose Plan
        </a>
      </Link> */}
    </div>
  );
};

export default PriceCard;
