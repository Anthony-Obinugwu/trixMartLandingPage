import Image from "next/image";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { SocialPlatform } from "@/features/waitlist/domain/socialplatform";

interface WaitlistUserCardProps {
  pfpImage: string;
  businessName: string;
  fullName: string;
  businessAddress: string;
  phoneNumber: string;
  socialLink: string;
  socialPlatform: SocialPlatform;
  featuredProducts: string[];
}

const WaitlistUserCard = ({
  pfpImage,
  businessName,
  fullName,
  businessAddress,
  phoneNumber,
  socialLink,
  socialPlatform,
  featuredProducts,
}: WaitlistUserCardProps) => {
  const getSocialPlatformColor = (platform: SocialPlatform) => {
    switch (platform) {
      case SocialPlatform.INSTAGRAM:
        return "bg-gradient-to-r from-pink-500 to-purple-500";
      case SocialPlatform.WHATSAPP:
        return "bg-green-500";
      case SocialPlatform.TIKTOK:
        return "bg-black";
      case SocialPlatform.FACEBOOK:
        return "bg-blue-600";
      case SocialPlatform.TWITTER:
        return "bg-blue-400";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="w-full max-w-md mx-auto mb-32 bg-white border border-gray-100 p-6 rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl">
      {/* Header Profile Section */}
      <div className="flex items-center gap-4">
        <div className="relative">
          <div
            className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-tr ${getSocialPlatformColor(socialPlatform)} p-0.5 rounded-full shadow-inner`}
          >
            <div className="w-full h-full bg-white rounded-full overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={pfpImage}
                alt="User Profile"
              />
            </div>
          </div>
          <img
            className="w-8 h-8 object-cover absolute bottom-0 right-0 bg-white rounded-full p-0.5 shadow-md"
            src="https://thumbs.dreamstime.com/b/approved-icon-profile-verification-accept-badge-quality-check-mark-sticker-tick-vector-illustration-128840911.jpg?w=768"
            alt="Verified"
          />
        </div>

        <div className="flex flex-col justify-center">
          <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight">
            {businessName}
          </h2>
          <p className="text-sm sm:text-base font-medium text-gray-500">
            {fullName}
          </p>
        </div>
      </div>

      {/* Business Details */}
      <div className="mt-6 border-t border-gray-100 pt-5">
        <ul className="space-y-3 text-sm sm:text-base text-gray-700">
          <li className="flex items-center justify-between">
            <span className="font-semibold text-gray-500">
              Business Address
            </span>
            <span className="font-medium text-gray-900">{businessAddress}</span>
          </li>
          <li className="flex items-center justify-between">
            <span className="font-semibold text-gray-500">Phone Number</span>
            <a
              href={`tel:${phoneNumber}`}
              className={`font-medium ${getSocialPlatformColor(socialPlatform)} text-transparent bg-clip-text hover:underline`}
            >
              {phoneNumber}
            </a>
          </li>
          <li className="pt-2">
            <a
              href={socialLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full"
            >
              <button
                className={`w-full bg-gradient-to-r ${getSocialPlatformColor(socialPlatform)} text-white font-semibold py-2.5 px-4 rounded-xl shadow-md transition-all duration-200 transform active:scale-[0.98]`}
              >
                OPEN ON {socialPlatform.toString()}
              </button>
            </a>
          </li>
        </ul>
      </div>

      {/* Featured Products Carousel */}
      <div className="mt-6 border-t border-gray-100 pt-5">
        <div className="mb-3">
          <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400">
            Featured Products
          </h3>
        </div>

        <div className="relative rounded-xl overflow-hidden shadow-sm bg-gray-50">
          <Carousel className="w-full">
            <CarouselContent className="[&_img]:w-full [&_img]:h-64 [&_img]:object-cover">
              {featuredProducts.map((product, index) => (
                <CarouselItem key={index}>
                  <Image
                    src={product}
                    alt={`Product ${index + 1}`}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 bg-white/80 hover:bg-white border-none shadow-md" />
            <CarouselNext className="right-2 bg-white/80 hover:bg-white border-none shadow-md" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default WaitlistUserCard;
