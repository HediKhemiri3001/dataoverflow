import VideoAdd from "../../components/adminComponents/videoAdd";
import VideoDelete from "../../components/adminComponents/videoDelete";
import AdminLayout from "../../components/adminComponents/AdminLayout";
import AdminWorkZone from "../../components/adminComponents/AdminWorkZone";
export default function GestionVideo() {
  return (
    <AdminLayout>
      <AdminWorkZone>
        <VideoAdd label="Add"></VideoAdd>
        <VideoDelete label="Delete"></VideoDelete>
      </AdminWorkZone>
    </AdminLayout>
  );
}
