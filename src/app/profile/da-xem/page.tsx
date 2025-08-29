import ViewedSection from "@/components/Profile/TabDaXem";
import {Property}  from "../../../types/property";

const viewedProperties : Property[]  = Array.from({ length: 16 }, (_, index) => ({
  id: index + 1,
  price: "18.42 tỷ",
  rating: 5,
  description: "Sổ hồng riêng xây dựng",
  bedrooms: 5,
  area: "84.00 m²",
  address: "Căn 01, Nhà liền kề, Khu A, Dự án Concorde",
  image: "https://via.placeholder.com/300",
}));

export default function DaXem() {
  return <ViewedSection  properties = {viewedProperties} />;
}

