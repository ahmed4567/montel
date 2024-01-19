import Image from "next/image";

function MdCard({ title, img }) {
  return (
    <div className=" hover:scale-105 transition transform m-auto duration-200 ease-out  cursor-pointer p-2 text-center items-center ">
      <div className=" relative h-[200px] w-[200px]  md:h-[250px] m-auto md:w-[250px]">
        <Image
          layout="fill"
          objectFit="contain"
          className="rounded-md  "
          alt="img"
          src={img}
        />
      </div>{" "}
      <h3 className="text-xl mt-2">{title}</h3>
    </div>
  );
}

export default MdCard;
