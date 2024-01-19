import Image from "next/image";
import logo from "./logo-black.png";
import {
  MagnifyingGlassCircleIcon,
  GlobeAltIcon,
  Bars3Icon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 w-full items-center bg-white px-2 py-1 shadow-md md:px-4 md:py-1">
      {/**left */}
      <div className="lift relative flex items-center h-6 cursor-pointer my-auto">
        <Image
          alt="logo"
          src={logo}
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/**midile */}
      <div className="mid flex items-center h-fit  md:border-2 rounded-full md:shadow-sm">
        <input
          className="flex-grow md:pl-5 pl-1 bg-transparent outline-none text-gray-600 placeholder-gray-400 text-sm  "
          type="text"
          placeholder="Start your serch"
        />
        <MagnifyingGlassCircleIcon className=" hidden md:inline-flex pr-1 h-10 fill-red-500  cursor-pointer py-1  " />
      </div>
      {/**right */}
      <div className="right text-black flex items-center space-x-4 ">
        <div className="flex items-center justify-between flex-grow">
          <p className="hidden md:flex font-bold text-lg ml-4 cursor-pointer ">
            Be A Host
          </p>
          <GlobeAltIcon className="md:h-10 h-5 fill-blue-800  cursor-pointer" />
        </div>
        <div className="flex items-center border-2 rounded-full p-1 shadow-sm">
          <Bars3Icon className="md:h-10 h-5 cursor-pointer" />
          <UserCircleIcon className="md:h-10 h-5 fill-red-500  cursor-pointer" />
        </div>
      </div>
    </header>
  );
}

export default Header;
