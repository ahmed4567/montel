import React from "react";
import Header from "../components/Header";
import Foter from "../components/Foter";
import { useRouter } from "next/router";
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";
function Search({ serchRes }) {
  const router = useRouter();
  const { location, startDate, endDate, noOfGeust } = router.query;
  const formateStartDate = format(new Date(startDate), "dd MMMM yy");
  const formateEndDate = format(new Date(endDate), "dd MMMM yy");
  const rang = `(${formateStartDate}) > (${formateEndDate})`;
  return (
    <div className="bg-white">
      <Header placeholder={`${location} | ${rang} | ${noOfGeust} guests`} />
      <main className="flex-grow pt-14 px-6">
        <section>
          <p className="text-xs">
            300+ stays {rang} for {noOfGeust} guests
          </p>
          <h1 className=" text-3xl mt-2 mb-6 font-semibold ">
            stays in {location}{" "}
          </h1>
          <div className="hidden md:inline-flex mb-5 text-gray-800 whitespace-nowrap space-x-3 ">
            <p className="btn">canselation Flexaplty :</p>
            <p className="btn">type of place</p>
            <p className="btn">price</p>
            <p className="btn">Romms and Beds</p>
            <p className="btn">More filters</p>
          </div>
          <div className="flex-col">
            {serchRes.map(
              ({ img, location, total, title, description, star, price }) => (
                <InfoCard
                  key={img}
                  img={img}
                  total={total}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                />
              )
            )}
          </div>
        </section>
      </main>
      <Foter />
    </div>
  );
}

export default Search;

export async function getServerSideProps() {
  const res = await fetch("https://www.jsonkeeper.com/b/5NPS");
  const json = await res.json();
  const serchRes = json;
  return {
    props: {
      serchRes,
    },
  };
}
