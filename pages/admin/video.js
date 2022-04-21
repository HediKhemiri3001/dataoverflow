import Head from "next/head";
import VideoAdd from "../../components/adminComponents/videoAdd";
import VideoDelete from "../../components/adminComponents/videoDelete";
import AdminLayout from "../../components/adminComponents/AdminLayout";
import AdminWorkZone from "../../components/adminComponents/AdminWorkZone";
export default function GestionVideo() {
  return (
    <AdminLayout>
      <AdminWorkZone>
        <Head>
          <title>Video management - Dataoverflow</title>
          <meta name="description" content="Data overflow is bla bla bla " />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <VideoAdd label="Add"></VideoAdd>
        <VideoDelete label="Delete"></VideoDelete>
      </AdminWorkZone>
    </AdminLayout>
  );
}
