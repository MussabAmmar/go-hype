import Image from "next/image";
import Layout from "@/components/layout/Layout";
import ImageCarousel from "@/components/common/ImageCarousel";
import TextComponent from "@/components/common/TextComponent";
import InfluencerCard from "@/components/common/InfluencerCard";
import PriceCard from "@/components/common/PriceCard";

export default function Home() {
  const images = ["/image1.jpg", "/image2.jpg", "/image3.jpg"];
  const priceOptions = [
    { price: 50, linkTo: "/pricing/basic" },
    { price: 100, linkTo: "/pricing/standard" },
    { price: 150, linkTo: "/pricing/premium" },
    { price: 200, linkTo: "/pricing/basic" },
  ];

  return (
    <Layout>
      <main className="">
        <ImageCarousel images={images} />
        <div className="mt-6">
          <TextComponent tag={"h1"} text={"Featured Influencers"} />
        </div>
        <div className="mt-4">
          <InfluencerCard
            profilePicture={"/profile1.jpg"}
            name={"Laurance Baker"}
            occupation={"Comedian"}
            priceToHire={"50000"}
          />
        </div>
        <div className="mt-6">
          <TextComponent tag={"h1"} text={"New & Noteworthy"} />
        </div>
        <div className="mt-4">
          <InfluencerCard
            profilePicture={"/profile1.jpg"}
            name={"Laurance Baker"}
            occupation={"Comedian"}
            priceToHire={"50000"}
          />
        </div>
        <div className="flex justify-between space-x-5 py-10">
          {priceOptions.map((option, index) => (
            <div key={index}>
              <PriceCard {...option} />
            </div>
          ))}
        </div>
        <div className="relative w-full h-[400px]">
          <Image
            src={"/image2.jpg"}
            alt="get a quote"
            fill
            sizes="(max-width: 768px) 100vw"
            className="object-cover opacity-50"
          />
          <div className="absolute p-4 pt-6 bottom-0 w-full flex justify-between bg-gradient-to-t from-green to-transparent">
            <div>
              <TextComponent
                tag={"h2"}
                text={"Invite a celebrity to your Event"}
              />
              <p className="text-white">
                Request participating talent to be part of any specific occasion
              </p>
            </div>
            <button className="border border-white rounded-xl bg-transparent py-3 px-5 text-white">
              Get a Quote
            </button>
          </div>
        </div>
      </main>
    </Layout>
  );
}
