import Image from "next/image";

function SmolCard({ img, location, distance }) {
  return (
    <div className="relative flex items-center m-2 mt-5 space-x-4 rounded-xl  transition transform duration-200  ease-out cursor-pointer hover:scale-[1.08] hover:bg-gray-200 ">
      <div className="flex">
        <div className="relative h-16 w-16 ">
          <Image
            layout="fill"
            objectFit="contain"
            objectPosition="left"
            className="rounded-md  "
            alt="img"
            src={img}
          />
        </div>
        <div className="p-1">
          <h1>{location}</h1>
          <h2 className="text-gray-500">{distance}</h2>
        </div>
      </div>
    </div>
  );
}

export default SmolCard;
