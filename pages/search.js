import React from "react";
import Header from "../components/Header";
import Foter from "../components/Foter";
function Search() {
  return (
    <div className="bg-white">
      <Header />
      <main className="flex-grow pt-14 px-6">
        <section>
          <p className="text-xs">300+ stays for 5 number of guests</p>
          <h1 className=" text-3xl mt-2 mb-6 font-semibold ">stays in Mars </h1>
          <div className="hidden md:inline-flex mb-5 text-gray-800 whitespace-nowrap space-x-3 ">
            <p className="btn">canselation Flexaplty :</p>
            <p className="btn">type of place</p>
            <p className="btn">price</p>
            <p className="btn">Romms and Beds</p>
            <p className="btn">More filters</p>
          </div>
        </section>
      </main>
      <Foter />
    </div>
  );
}

export default Search;
