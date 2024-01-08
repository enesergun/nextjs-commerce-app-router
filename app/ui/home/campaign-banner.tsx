"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "@/app/globals.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { campaigns } from "@/app/lib/placeholder-data";
import type { CAMPAING_ELEMENT } from "@/app/lib/definitions";
import Link from "next/link";

export default function CampaignBanner() {
  return (
    <div className="p-4 lg:px-6 max-w-screen-xl mx-auto h-[550px]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {campaigns.map((campaign: CAMPAING_ELEMENT) => (
          <SwiperSlide key={campaign.id}>
            <Link href={campaign.campaignLink} className="w-full h-full">
              <Image
                src={campaign.campaignImage}
                width={1280}
                height={550}
                alt={campaign.campaignName}
                className="rounded-2xl"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
