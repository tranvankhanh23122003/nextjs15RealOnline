export interface Property {
    id: number;
    price: string;
    rating: number;
    description: string;
    bedrooms: number;
    area: string;
    address: string;
    image: string;
  }
  
  export interface PropertyGridProps {
    properties: Property[];
  }