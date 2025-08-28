// apis/phankhu/index.ts
export interface PhanKhu {
    id: number;
    image: string;
    area: string;
    acreage: string;
    price: string;
    type: string;
  }
  
  export const getPhanKhu = async (): Promise<PhanKhu[]> => {
    try {
      const res = await fetch("/api/dictionary/PhanKhu");
      if (!res.ok) {
        throw new Error("Failed to fetch Phan Khu");
      }
      const data: PhanKhu[] = await res.json();
      return data;
    } catch (error) {
      console.error("Error fetching Phan Khu:", error);
      return [];
    }
  };
  