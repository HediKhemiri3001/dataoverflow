import Head from "next/head";
import AdminLayout from "../../components/adminComponents/AdminLayout";
import SliderOps from "../../components/adminComponents/sliderOps";
import AdminWorkZone from "../../components/adminComponents/AdminWorkZone";

export default function GestionSlider() {
  return (
    <AdminLayout>
      <Head>
        <title>Slider management - Dataoverflow</title>
        <meta name="description" content="Data overflow is bla bla bla " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AdminWorkZone>
        <SliderOps label="Operations"></SliderOps>
      </AdminWorkZone>
    </AdminLayout>
  );
}
