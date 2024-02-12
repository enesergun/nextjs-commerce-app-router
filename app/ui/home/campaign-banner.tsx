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
import { useMediaQuery } from "@/app/hooks/useMediaQuery";

import type { CAMPAING_ELEMENT } from "@/app/lib/definitions";
import Link from "next/link";

export default function CampaignBanner({ data }: { data: CAMPAING_ELEMENT[] }) {
  const media = useMediaQuery("(min-width: 768px)");

  const [activeIndex, setActiveIndex] = React.useState(0);

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <div className="p-4 lg:px-6 max-w-screen-xl mx-auto h-[550px]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        onSlideChange={handleSlideChange}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {data.map((campaign: CAMPAING_ELEMENT, index: number) => (
          <SwiperSlide key={campaign.campaign_id}>
            <Link href={campaign.campaign_link} className="w-full h-full">
              <picture>
                <Image
                  src={campaign.campaign_desktop_image}
                  width={media ? 1280 : 400}
                  height={550}
                  alt={campaign.campaign_name}
                  className="rounded-2xl"
                  priority={index === activeIndex}
                />
              </picture>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
