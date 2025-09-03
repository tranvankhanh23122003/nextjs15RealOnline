'use client';

import { MapPinIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import SLide1 from "../../../../public/images/baner1.png";
import Image from "next/image";
import "./style.css";

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
              <Image src={SLide1} alt={project.name} className="project-image" />
              {project.isHot && <div className="project-hot-badge">Dự án hot bán</div>}
              <div className="project-favorite">
                {/* ...icon... */}
              </div>
            </div>
            <div
              className="project-content"
              onClick={() => router.push("/duAn")}
            >
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
