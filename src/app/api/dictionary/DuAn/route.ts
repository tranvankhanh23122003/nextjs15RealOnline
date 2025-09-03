import { NextResponse } from "next/server";

export async function GET() {
  const responseData = {
    project: {
      name: "Cocoland",
      ownership: "Sổ hồng lâu dài",
      constructionDensity: "50%",
      startDate: "2024",
      investor: "TĐC Lâm Chiểu",
      totalArea: "100 ha",
      scale: "500 căn",
      progress: "Đang triển khai",
    },
    areas: [
      {
        id: 1,
        image: "/_next/static/media/baner1.png",
        area: "Khu A",
        project: "Khu biệt thự cao cấp",
        style: "Cổ điển",
        type: "Biệt thự",
      },
      {
        id: 2,
        image: "/_next/static/media/khu-cong-nghiep.png",
        area: "Khu B",
        project: "Khu biệt thự cao cấp",
        style: "Hiện đại",
        type: "Biệt thự",
      },
      {
        id: 3,
        image: "/_next/static/media/baner1.png",
        area: "Khu C",
        project: "Khu biệt thự cao cấp",
        style: "Tân cổ điển",
        type: "Biệt thự",
      },
    ],
  };
//   console.log("Yêu cầu GET tới /api/dictionary/DuAn");
  return NextResponse.json(responseData);
}