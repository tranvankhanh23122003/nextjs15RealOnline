import Slide1 from '../../../assets/images/baner1.png';
import Slide2 from '../../../assets/images/khu-cong-nghiep.png';
import './style.css';

export default function DoiTac() {
  const partners = [
    { id: 1, name: 'Đối tác 1', title:'Thương hiệu phát triển chủ lực kinh doanh bất động sản, sản xuất vật liệu và xây dựng.', image: Slide1 },
    { id: 2, name: 'Đối tác 2', title:'Thương hiệu phát triển chủ lực kinh doanh bất động sản, sản xuất vật liệu và xây dựng.', image: Slide2 },
    { id: 3, name: 'Đối tác 3', title:'Thương hiệu phát triển chủ lực kinh doanh bất động sản, sản xuất vật liệu và xây dựng.', image: Slide1 },
  ];

  return (
    <div className="partner-section">
      <h2 className="partner-title">Đối tác chiến lược</h2>
      <h5>Phát triển dự án </h5>

      <div className="partner-cards">
        {partners.map((partner) => (
          <div key={partner.id} className="partner-card">
            <h3 className="partner-card-title">{partner.name}</h3>
            <div className="partner-content">
              <img src={partner.image.src} alt={partner.name} className="partner-image" />
              <span className="partner-name">{partner.title}</span>
            </div>
          </div>
        ))}
      </div>
      <hr className="partner-divider" />
    </div>
  );
}