import React from "react";
import { fetchSingleCampaign } from "@/app/lib/data";
import Image from "next/image";
import { formatDate } from "@/app/utils/formatDate";

export default async function CampaignDetail({ slug }: { slug: string }) {
  const data = await fetchSingleCampaign({ slug: slug });

  const startDate = formatDate(data.campaign_start_date);
  const endDate = formatDate(data.campaign_end_date);

  return (
    <div className="p-4 lg:px-6 max-w-screen-xl mx-auto">
      <div className="h-[550px]">
        <Image
          src={data.campaign_desktop_image}
          width={1280}
          height={550}
          alt={data.campaign_name}
          className="hidden lg:block rounded-2xl h-full object-cover"
        />
        <Image
          src={data.campaign_mobile_image}
          width={1280}
          height={550}
          alt={data.campaign_name}
          className="lg:hidden h-full rounded-2xl object-cover"
        />
      </div>
      <div className="flex flex-col sm:flex-row sm:justify-between my-4 sm:my-8 sm:items-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-cyan-950 mb-2 sm:mb-0">
          {data.campaign_name}
        </h1>
        <div className="border border-solid p-5 rounded-2xl ">
          <p className="text-sm font-bold mb-2">
            Kampanya Geçerlilik Tarihleri
          </p>
          <span>{startDate}</span>
          <span>-</span>
          <span>{endDate}</span>
        </div>
      </div>
      <article className="text-lg sm:text-xl">
        {data.campaign_description}
      </article>
    </div>
  );
}
