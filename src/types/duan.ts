export interface Project {
  name: string;
  description?: string;
  ownership: string;
  constructionDensity: string;
  startDate: string;
  investor: string;
  totalArea: string;
  scale: string;
  progress: string;
  [key: string]: any; // Cho phép các thuộc tính bổ sung từ API
}

export interface Area {
  id: number;
  image: string;
  area: string;
  project: string;
  style: string;
  type: string;
}