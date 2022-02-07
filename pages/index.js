import Head from "next/head";
import ContentTable from "../components/ContentTable";
import Layout from "../components/Layout";
import Slider from "../components/Slider";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Data Overflow</title>
        <meta name="description" content="Data overflow is bla bla bla " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Slider />
      <ContentTable />
    </Layout>
  );
}
