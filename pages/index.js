import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Banner from "../components/Banner";
import SmolCard from "../components/SmolCard";
import MdCard from "../components/MdCard";
import LgCard from "../components/LgCard";
import Foter from "../components/Foter";
import { SpeedInsights } from "@vercel/speed-insights/next";
export default function Home({ exploreData, cardsData }) {
  return (
    <main className="bg-white">
      <Header />
      <Banner />
      <section className="">
        <section className="pt-2 max-w-6xl mx-auto px-5">
          <h1 className="text-2xl font-semibold">Explore Nearby</h1>
          <div className=" grid grid-cols-2 md:grid-cols-4 ">
            {exploreData?.map((item) => (
              <SmolCard
                key={item.location}
                location={item.location}
                img={item.img}
                distance={item.distance}
              />
            ))}
          </div>
        </section>
        <section className="pt-2 max-w-6xl mx-auto px-5">
          <h2 className="text-2xl font-semibold">Live Anywhere </h2>
          <div className="cardsrowl flex m-auto overflow-y-hidden overflow-scroll">
            {cardsData?.map((item) => (
              <MdCard key={item.title} title={item.title} img={item.img} />
            ))}{" "}
          </div>
        </section>
        <section className="pt-2 max-w-6xl mx-auto md:px-5">
          <LgCard
            title="The Greatest Outdoors"
            discrp="Wishlsit curated by Montil"
            butnText="Get Inspired"
          />
        </section>
      </section>
      <section className="relative bottom-0 left-0  bg-sky-200">
        <Foter />
      </section>
      <SpeedInsights />
    </main>
  );
}
export async function getServerSideProps() {
  console.log(">>>>>>>data fiched <<<<<<<");
  const res = await fetch("https://www.jsonkeeper.com/b/4G1G");
  const json = await res.json();
  const exploreData = json;
  const res2 = await fetch("https://www.jsonkeeper.com/b/VHHT");
  const json2 = await res2.json();
  const cardsData = json2;
  return {
    props: { exploreData: exploreData, cardsData: cardsData },
  };
}
