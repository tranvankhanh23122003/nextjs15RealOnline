import React from 'react';
import './style.css'

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  selectedCategory: string;
  selectedStatus: string;
  setSelectedStatus: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  selectedStatus,
  setSelectedStatus
}) => {
  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedStatus(e.target.value);
  };

  return (
    <div className="profile-search-bar-wrapper">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="🔎 Nhập mã căn để tìm kiếm..."
        className="profile-search-bar-input"
      />

      {['Giữ chỗ', 'Đã cọc', 'Đã mua'].includes(selectedCategory) && (
        <select
          value={selectedStatus}
          onChange={handleStatusChange}
          className="profile-search-bar-select"
        >
          <option value="">Chọn trạng thái</option>
          <option value="Đang giữ chỗ">Đang giữ chỗ</option>
          <option value="Đã hủy">Đã hủy</option>
          <option value="Đã gia hạn">Đã gia hạn</option>
          <option value="Đang cọc">Đang cọc</option>
          <option value="Chờ duyệt">Chờ duyệt</option>
          <option value="Đã ký HĐMB">Đã ký HĐMB</option>
          <option value="Đã bàn giao">Đã bàn giao</option>
        </select>
      )}
    </div>
  );
};

export default SearchBar;