import React from 'react';
import './style.css'
interface CanItem {
  id: number;
  management: string;
  code: string;
  project: string;
  price: string;
  status: string;
  paymentProgress?: string;
}

interface HeaderProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  data: CanItem[];
  setData: React.Dispatch<React.SetStateAction<CanItem[]>>;
}

const Header: React.FC<HeaderProps> = ({
  selectedCategory,
  setSelectedCategory,
  data,
  setData,
}) => {
  const categories = ['Tất cả', 'Giữ chỗ', 'Đã cọc', 'Đã mua', 'Chuyển nhượng'];

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);

    if (category === 'Giữ chỗ') {
      const updated = data.map((item) => ({
        ...item,
        status:
          item.status === 'Giữ chỗ'
            ? ['Đã hủy', 'Đang giữ chỗ', 'Đã gia hạn'][Math.floor(Math.random() * 3)]
            : item.status,
      }));
      setData(updated);
    } else if (category === 'Đã cọc') {
      const updated = data.map((item) => ({
        ...item,
        status: item.status === 'Đang giữ chỗ' ? 'Đang cọc' : item.status,
      }));
      setData(updated);
    } else if (category === 'Đã mua') {
      const updated = data.map((item) => ({
        ...item,
        status:
          item.status === 'Đang cọc'
            ? ['Chờ duyệt', 'Đã ký HĐMB', 'Đã bàn giao'][Math.floor(Math.random() * 3)]
            : item.status,
        paymentProgress:
          item.status === 'Đang cọc'
            ? ['0/3', '1/3', '2/3', '3/3'][Math.floor(Math.random() * 4)]
            : item.paymentProgress,
      }));
      setData(updated);
    }
  };

  return (
    <div className="profile-header-container">
      <div>
        <h2 className="profile-header-title">Danh sách căn của bạn</h2>
        <div className="profile-header-categories">
          {categories.map((category) => (
            <span
              key={category}
              className={`profile-header-category ${
                selectedCategory === category ? 'profile-header-category--active' : ''
              }`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
