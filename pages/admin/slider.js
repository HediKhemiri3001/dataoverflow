import AdminLayout from "../../components/adminComponents/AdminLayout";
import SliderAdd from "../../components/adminComponents/sliderAdd";
import SliderDelete from "../../components/adminComponents/sliderDelete";
import AdminWorkZone from "../../components/adminComponents/AdminWorkZone";

export default function GestionSlider() {
  return (
    <AdminLayout>
      <AdminWorkZone>
        <SliderDelete label="Delete"></SliderDelete>
        <SliderAdd label="Add"></SliderAdd>
      </AdminWorkZone>
    </AdminLayout>
  );
}
