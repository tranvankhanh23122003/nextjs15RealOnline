"use client";

import { MapPinIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import SLide1 from "../../../assets/images/baner1.png"
import './style.css'
interface ProjectCard {
  id: number;
  name: string;
  area: string;
  price: string;
  address: string;
  image: string;
  isHot: boolean;
}

interface ProjectGridTDCProps {
  projects: ProjectCard[];
}

const ProjectGridTDC: React.FC<ProjectGridTDCProps> = ({ projects }) => {
  const router = useRouter();

  return (
    <div className="project-grid-container">
    <div className="project-grid">
      {projects.map((project) => (
        <div key={project.id} className="project-card">
          <div className="relative">
            <img src={SLide1.src} alt={project.name} className="project-image" />
            {project.isHot && (
              <div className="project-hot-badge">Dự án hot bán</div>
            )}
            <div className="project-favorite">
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
          </div>
          <div className="project-content" onClick={() => router.push("/du-an")}>
            <h3 className="project-title">{project.name}</h3>
            <div className="project-info">
              <p>{project.area}</p>
              <p className="project-price">{project.price}</p>
            </div>
            <div className="project-address">
              <MapPinIcon className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span>{project.address}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  
  );
};

export default ProjectGridTDC;
