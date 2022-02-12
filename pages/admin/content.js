import AdminLayout from "../../components/adminComponents/AdminLayout";
import AdminWorkZone from "../../components/adminComponents/AdminWorkZone";
import ContentAdd from "../../components/adminComponents/contentAdd";
import ContentDelete from "../../components/adminComponents/ContentDelete";
export default function GestionContent() {
  return (
    <AdminLayout>
      <AdminWorkZone>
        <ContentAdd label="Add Content"></ContentAdd>
        <ContentDelete label="Delete Content"></ContentDelete>
      </AdminWorkZone>
    </AdminLayout>
  );
}
