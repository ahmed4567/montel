import React from "react";
import Image from "next/image";
import lgCardimg from "./lrgCard.jpg";
const LgCard = ({ discrp, title, butnText }) => {
  return (
    <div className="relative  ">
      <div className="relative  md:h-[50vh] h-[40vh] min-w-[300px]">
        <Image
          layout="fill"
          objectFit="cover"
          className="rounded-sm  "
          alt="img"
          src={lgCardimg}
        />
      </div>
      <div className="absolute left-5 lg:text-center top-8 lg:top-10  lg:left-[30%]  ">
        <h3 className="text-4xl lg:w-fit font-bold mb-3 w-64">{title}</h3>
        <p className="font-semibold">{discrp}</p>
        <button className=" hover:shadow-md shadow-md shadow-blue-500 hover:shadow-blue-300 active:scale-90 transition duration-150 text-sm text-black bg-sky-200 rounded-lg mt-5 px-4 py-2">
          {butnText}
        </button>
      </div>
    </div>
  );
};

export default LgCard;
