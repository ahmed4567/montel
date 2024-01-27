import React from "react";
import Image from "next/image";
import { HeartIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
function InfoCard({ img, total, location, title, description, star, price }) {
  return (
    <div className="flex border rounded-lg b-2 hover:opacity-80 cursor-pointer hover:shadow-lg transition transform duration-200 ease-out">
      <div className="relative h-24 w-32 md:w-80 md:h-52 rounded-lg flex-shrink-0">
        <Image
          alt={img}
          src={img}
          layout="fill"
          className="rounded-l-lg"
          objectFit="cover"
        />
      </div>
      <div className="flex flex-grow flex-col pl-5">
        <div className="flex justify-between">
          <p>{location}</p>
          <HeartIcon className="h-7 cursor-pointer" />
        </div>
        <h4 className="text-lg">{title}</h4>
        <div className="border-b w-72 pb-2 " />

        <p className=" flex-grow pt-2 text-gray-500 text-sm">{description}</p>
        <div className="flex justify-between">
          <p className="flex items-center">
            {" "}
            <StarIcon className="h-5 fill-red-400" />
            {star}
          </p>
          <div className="p-2">
            <p className="text-lg font-semibold lg:text-2xl pb-2">{price}</p>
            <p className="text-right font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
