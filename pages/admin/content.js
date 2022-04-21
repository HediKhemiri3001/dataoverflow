import Head from "next/head";
import AdminLayout from "../../components/adminComponents/AdminLayout";
import AdminWorkZone from "../../components/adminComponents/AdminWorkZone";
import ContentAdd from "../../components/adminComponents/contentAdd";
import ContentDelete from "../../components/adminComponents/ContentDelete";
import { useState } from "react";
import axios from "axios";
import { ContentContext } from "../../context/ContentContext";
export default function GestionContent({ content }) {
  return (
    <AdminLayout>
      <Head>
        <title>Content management - Dataoverflow</title>
        <meta name="description" content="Data overflow is bla bla bla " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContentContext.Provider value={content}>
        <AdminWorkZone>
          <ContentAdd label="Add Content"></ContentAdd>
          <ContentDelete label="Delete Content"></ContentDelete>
        </AdminWorkZone>
      </ContentContext.Provider>
    </AdminLayout>
  );
}
export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/content/get");
  return {
    props: {
      content: res.data,
    },
  };
};
