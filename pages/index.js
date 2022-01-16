import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Data Overflow</title>
        <meta name="description" content="Data overflow is bla bla bla " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </Layout>
  );
}
