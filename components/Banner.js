import React from "react";
import Image from "next/image";
import banner from "../components/Banner.jpg";
function Banner() {
  return (
    <div className="relative h-[40vh] md:h-[70vh] ">
      <Image
        src={banner}
        alt="logo"
        layout="fill"
        objectFit="cover"
        objectPosition="left"
      />
      <div className="absolute md:bottom-48 bottom-1/2 w-full text-center ">
        <p className="text-lg sm:text-xl font-bold font-serif">
          <span className=" bg-gradient-to-r from-white via-yellow-600 to-sky-600 text-transparent bg-clip-text">
            Not Sure Where to Go? Perfect.
          </span>
        </p>
        <button className="text-purple-500 bg-white px-6 py-2 shadow-md shadow-cyan-600 rounded-full font-bold my-3 hover:shadow-lg hover:shadow-cyan-600 active:scale-90 transition duration-150">
          Im Flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
