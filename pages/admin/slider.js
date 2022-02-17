import AdminLayout from "../../components/adminComponents/AdminLayout";
import SliderOps from "../../components/adminComponents/sliderOps";
import AdminWorkZone from "../../components/adminComponents/AdminWorkZone";

export default function GestionSlider() {
  return (
    <AdminLayout>
      <AdminWorkZone>
        <SliderOps label="Operations"></SliderOps>
      </AdminWorkZone>
    </AdminLayout>
  );
}
