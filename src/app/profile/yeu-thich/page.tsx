import React from 'react';
import { Property } from '../../../types/Property';
import FavoriteTabs from '@/components/Profile/TabYeuThich';

// import ProjectGridBDS from "../../../components/Profile/PropertyGrid_BDS"; // Ensure the filename matches exactly


interface PropertyCard {
  id: number;
name: string;
area: string;
price: string;
address: string;
image: string;
isHot: boolean;
  }
  
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
 const cjsndasjd : PropertyCard[]  = Array.from({ length: 16 }, (_, index) => ({
  id: index + 1,
  name: "Bất động sản " + (index + 1),
  area: "100 m²",
  price: "5 tỷ",
  address: "123 Đường ABC, Quận XYZ",
  image: "https://via.placeholder.com/300",
  isHot: index % 2 === 0,
 }));

export default function YeuThich() {
  // return <FavoriteTabs properties = {viewedProperties} />;
  <h1>test</h1>
}