"use client"
import { useEffect, useState } from "react";
import PropertyGridBDS from "../PropertyGrid_BDS";
import {Property, PropertyGridProps } from "../../../types/property";


const ViewedSection = ({ properties }: PropertyGridProps) => {
  const [items, setItems] = useState<Property[]>([]);

  useEffect(() => {
    if (properties && properties.length > 0) {
      setItems(properties);
    }
  }, [properties]); 

  return (
    <>
      <h1 className="title-seen">Đã Xem</h1>
    
      <PropertyGridBDS properties={items} />
    </>
  );
};

export default ViewedSection;
