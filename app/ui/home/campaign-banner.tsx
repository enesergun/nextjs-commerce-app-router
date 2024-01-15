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

import type { CAMPAING_ELEMENT } from "@/app/lib/definitions";
import Link from "next/link";

export default function CampaignBanner({ data }: { data: CAMPAING_ELEMENT[] }) {
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
        {data.map((campaign: CAMPAING_ELEMENT) => (
          <SwiperSlide key={campaign.campaign_id}>
            <Link href={campaign.campaign_link} className="w-full h-full">
              <Image
                src={campaign.campaign_desktop_image}
                width={1280}
                height={550}
                alt={campaign.campaign_name}
                className="hidden lg:block rounded-2xl"
              />
              <Image
                src={campaign.campaign_mobile_image}
                width={1280}
                height={550}
                alt={campaign.campaign_name}
                className="lg:hidden rounded-2xl"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
