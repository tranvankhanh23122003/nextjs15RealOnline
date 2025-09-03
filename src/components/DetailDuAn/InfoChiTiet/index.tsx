import './style.css';
import { Project } from '@/types/duan';

interface InfoChiTietDuAnProps {
  project: Project | null;
}

export default function InfoChiTietDuAn({ project }: InfoChiTietDuAnProps) {
  if (!project) {
    return <div>Không có dữ liệu dự án</div>;
  }

  return (
    <div className="info-section">
      <h3>Thông tin chi tiết</h3>
      <div className="info-columns">
        <div className="info-left">
          <p>
            <span className="label">Tên dự án:</span>
            <span className="value">{project.name}</span>
          </p>
          <hr />
          <p>
            <span className="label">Hình thức sở hữu:</span>
            <span className="value">{project.ownership}</span>
          </p>
          <hr />
          <p>
            <span className="label">Mật độ xây dựng:</span>
            <span className="value">{project.constructionDensity}</span>
          </p>
          <hr />
          <p>
            <span className="label">Thời điểm khởi công:</span>
            <span className="value">{project.startDate}</span>
          </p>
        </div>
        <div className="info-right">
          <p>
            <span className="label">Chủ đầu tư:</span>
            <span className="value">{project.investor}</span>
          </p>
          <hr />
          <p>
            <span className="label">Tổng diện tích:</span>
            <span className="value">{project.totalArea}</span>
          </p>
          <hr />
          <p>
            <span className="label">Quy mô phát triển:</span>
            <span className="value">{project.scale}</span>
          </p>
          <hr />
          <p>
            <span className="label">Tiến độ:</span>
            <span className="value">{project.progress}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
