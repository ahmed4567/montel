import Image from "next/image";
import logo from "./logo-black.png";
import {
  MagnifyingGlassCircleIcon,
  GlobeAltIcon,
  Bars3Icon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange, DateRangePicker } from "react-date-range";
import { useState } from "react";
import { useRouter } from "next/router";

function Header({ placeholder }) {
  const [serchInpout, setSerchInput] = useState("");
  const [startDate, setStrtDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGeust, setnoOfGeust] = useState(1);
  const router = useRouter();
  const restInpout = () => {
    setSerchInput("");
  };
  const search = async () => {
    router
      .push({
        pathname: "/search",
        query: {
          location: serchInpout,
          startDate: startDate.toISOString(),
          endDate: endDate.toISOString(),
          noOfGeust,
        },
      })
      .then(restInpout);
  };
  const selectionrange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  const handleSlect = (ranges) => {
    setStrtDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 w-full items-center bg-white px-1 py-1 shadow-md md:px-4 md:py-2">
      {/**left */}
      <div
        onClick={() => {
          router.push("/");
        }}
        className="lift relative flex items-center h-6 cursor-pointer my-auto"
      >
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
          value={serchInpout}
          onChange={(e) => setSerchInput(e.target.value)}
          className="flex-grow md:pl-5 pl-1 bg-transparent outline-none text-gray-600 placeholder-gray-400 text-sm  "
          type="text"
          placeholder={placeholder || "Start your serch"}
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
      {serchInpout && (
        <div className="flex flex-col w-[300px] col-span-3 mx-auto md:w-fit">
          <div className="md:hidden">
            <DateRange
              ranges={[selectionrange]}
              minDate={new Date()}
              rangeColors={["#fd5b61"]}
              onChange={handleSlect}
            />
          </div>
          <div className="hidden md:inline-flex">
            <DateRangePicker
              ranges={[selectionrange]}
              minDate={new Date()}
              rangeColors={["#fd5b61"]}
              onChange={handleSlect}
            />
          </div>
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow">Number of Gustes</h2>
            <UsersIcon className="h-5" />
            <input
              type="number"
              value={noOfGeust}
              min={1}
              onChange={(e) => {
                setnoOfGeust(e.target.value);
              }}
              className="w-12 pl-2 text-lg outline-none text-red-400 bg-white"
            />
          </div>
          <div className="flex">
            <button onClick={restInpout} className="flex-grow text-gray-500">
              Cansel
            </button>
            <button onClick={search} className="flex-grow text-red-400">
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
