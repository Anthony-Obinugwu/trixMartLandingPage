import Header from "@/components/header";
import WaitlistUserCard from "@/components/waitlist/waitlist-user-card";
import { SocialPlatform } from "@/features/waitlist/domain/socialplatform";
import React from "react";

const page = () => {
  const waitlistUsers = [
    {
      pfpImage: "/waitlist-images/profile-pictures/chow-central.png",
      businessName: "Chow Central",
      fullName: "Nafisa Aliyu",
      businessAddress:
        "Shop 2 Gunea street, phase 1 off Nile University Road, Cadastral zone, Abuja.",
      phoneNumber: "07032920569 ",
      socialLink: "https://wa.me/2347032920569",
      socialPlatform: SocialPlatform.WHATSAPP,
      featuredProducts: [
        "/waitlist-images/products/chow-1.png",
        "/waitlist-images/products/chow-2.png",
        "/waitlist-images/products/chow-3.png",
        "/waitlist-images/products/chow-4.png",
        "/waitlist-images/products/chow-5.png",
        "/waitlist-images/products/chow-6.png",
        "/waitlist-images/products/chow-7.png",
      ],
    },
    {
      pfpImage: "/waitlist-images/profile-pictures/mk-wears.png",
      businessName: "MK WEARS & GADGETS NG",
      fullName: "Muhammad Kabir",
      businessAddress: "Abuja, Nigeria.",
      phoneNumber: "09061445332",
      socialLink: " www.tiktok.com/@mkay_phone_store",
      socialPlatform: SocialPlatform.TIKTOK,
      featuredProducts: [
        "/waitlist-images/products/mk-1.png",
        "/waitlist-images/products/mk-2.png",
        "/waitlist-images/products/mk-3.png",
        "/waitlist-images/products/mk-4.png",
        "/waitlist-images/products/mk-5.png",
        "/waitlist-images/products/mk-6.png",
        "/waitlist-images/products/mk-7.png",
      ],
    },
    {
      pfpImage: "/waitlist-images/profile-pictures/zaraya.png",
      businessName: "Zaraya collections",
      fullName: "Halima Sadiq",
      businessAddress: "Thuja ville, Abuja.",
      phoneNumber: "08088466005",
      socialLink:
        "https://www.instagram.com/ashbah_232_?igsi=MTNpaXh5MDBzaW1pdw==",
      socialPlatform: SocialPlatform.INSTAGRAM,
      featuredProducts: [
        "/waitlist-images/products/zar-1.png",
        "/waitlist-images/products/zar-2.png",
        "/waitlist-images/products/zar-3.png",
        "/waitlist-images/products/zar-4.png",
      ],
    },
    {
      pfpImage: "/waitlist-images/profile-pictures/zamam.png",
      businessName: "Zamam Collection",
      fullName: "Rahma Adamu Aliyu ",
      businessAddress: "Abuja.",
      phoneNumber: "09062022600",
      socialLink:
        "https://www.instagram.com/_zamamcollection_?igsi=MWg3cW54OGZreTN0aA==",
      socialPlatform: SocialPlatform.INSTAGRAM,
      featuredProducts: [
        "/waitlist-images/products/zam-1.png",
        "/waitlist-images/products/zam-2.png",
        "/waitlist-images/products/zam-3.png",
      ],
    },
    {
      pfpImage: "/waitlist-images/profile-pictures/daisy.jpeg",
      businessName: "Softbeautybydaisy",
      fullName: "Daisy Ofili",
      businessAddress: "15B Borno Street",
      phoneNumber: "09075576170",
      socialLink:
        "https://www.instagram.com/_zamamcollection_?igsi=MWg3cW54OGZreTN0aA==",
      socialPlatform: SocialPlatform.INSTAGRAM,
      featuredProducts: [
        "/waitlist-images/products/daisy-1.jpeg",
        "/waitlist-images/products/daisy-2.jpeg",
        "/waitlist-images/products/daisy-3.jpeg",
      ],
    },
    {
      pfpImage: "/waitlist-images/profile-pictures/lola.png",
      businessName: "Lola Luxe Nails",
      fullName: "Damilola Abayomi",
      businessAddress: "online",
      phoneNumber: "09019332248",
      socialLink:
        "https://www.instagram.com/lola_luxe.nail?igsi=MWU5ZGxhYXQydGFr",
      socialPlatform: SocialPlatform.INSTAGRAM,
      featuredProducts: [
        "/waitlist-images/products/lola-1.png",
        "/waitlist-images/products/lola-2.png",
        "/waitlist-images/products/lola-3.png",
        "/waitlist-images/products/lola-4.png",
        "/waitlist-images/products/lola-5.png",
        "/waitlist-images/products/lola-6.png",
      ],
    },
  ];

  return (
    <div>
      <Header />

      <div className="px-4">
        {waitlistUsers.map((user, index) => (
          <>
            <div className="text-center font-bold text-[#026ccf] text-3xl pb-4">
              Top Featured #{index + 1}
            </div>
            <WaitlistUserCard
              key={index}
              pfpImage={user.pfpImage}
              businessName={user.businessName}
              fullName={user.fullName}
              businessAddress={user.businessAddress}
              phoneNumber={user.phoneNumber}
              socialLink={user.socialLink}
              socialPlatform={user.socialPlatform}
              featuredProducts={user.featuredProducts}
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default page;
