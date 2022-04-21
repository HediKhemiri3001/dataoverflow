import Head from "next/head";
import ContentTable from "../components/userComponents/ContentTable";
import Layout from "../components/userComponents/Layout";
import Slider from "../components/userComponents/Slider";
import axios from "axios";
import Home from "../components/userComponents/Home";
import AboutUs from "../components/userComponents/AboutUs";
import { useState, useEffect } from "react";
import Workshops from "../components/userComponents/Workshops";
export default function Index({ SliderImages, contentData /*workshopsData*/ }) {
  return (
    <Layout>
      <Head>
        <title>Data Overflow</title>
        <meta name="description" content="Data overflow is bla bla bla " />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/*
      <Slider images={SliderImages} />
      
       */}
      <Home />
      {contentData.length != 0 ? (
        <ContentTable contentData={contentData} />
      ) : (
        <h1>No content to show</h1>
      )}
      {/* <Workshops workshops={workshopsData} /> */}
    </Layout>
  );
}
export const getServerSideProps = async () => {
  const sliderRes = await axios.get("http://localhost:3000/api/slider");
  const contentRes = await axios.get("http://localhost:3000/api/content/get");
  //const workshopsRes = await axios.get("https://localhost:3000/api/workshops");
  return {
    props: {
      SliderImages: sliderRes.data,
      contentData: contentRes.data.reverse(),
      //workshopsData: workshopsRes.data,
    },
  };
};
