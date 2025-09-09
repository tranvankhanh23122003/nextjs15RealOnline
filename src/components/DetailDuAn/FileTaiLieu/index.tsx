import './style.css';

export default function DuAnDocumentSection() {
  return (
    <div className="duan-document-wrapper">

      <div className="duan-document-card">
        <div className="duan-document-badge">Mới nhất</div>
        <div className="duan-document-content">
          <h3>#File</h3>
          <p>tài liệu</p>
        </div>
        <div className="duan-document-footer">
          <p>CSBH Biệt thự Cocoland</p>
          <a
            href="/assets/documents/csbh-cocoland.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="duan-document-link"
          >
            Xem tài liệu
          </a>
        </div>
      </div>
    </div>
  );
}
