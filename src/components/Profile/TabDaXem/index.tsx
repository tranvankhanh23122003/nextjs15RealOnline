
import PropertyGridBDS from "../PropertyGrid_BDS";
import './style.css'
const ViewedSection = ({ properties }: { properties: any[] }) => {
  return (
    <>
      <h1 className="title-seen">Đã Xem</h1>
      <PropertyGridBDS properties={properties} />
    </>
  );
};

export default ViewedSection;
