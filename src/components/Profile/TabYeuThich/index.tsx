import React from "react";
import ProjectGridTDC from "../PropertyGrid_TDS";
import PropertyGridBDS from "../PropertyGrid_BDS";
import './style.css'

interface FavoriteTabsProps {
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
  viewedProperties: any[];
  projectProperties: any[];
}

const FavoriteTabs: React.FC<FavoriteTabsProps> = ({
  selectedTab,
  setSelectedTab,
  viewedProperties,
  projectProperties,
}) => {
  return (
    <>
      <h1 className="profile-favorite-tabs__title">Yêu Thích</h1>
      <div className="profile-favorite-tabs__tab-group">
        <button
          className={`profile-favorite-tabs__button ${
            selectedTab === "Bất động sản" ? "active" : ""
          }`}
          onClick={() => setSelectedTab("Bất động sản")}
        >
          Bất động sản
        </button>
        <button
          className={`profile-favorite-tabs__button ${
            selectedTab === "Dự án" ? "active" : ""
          }`}
          onClick={() => setSelectedTab("Dự án")}
        >
          Dự án
        </button>
      </div>

      <div>
        {selectedTab === "Bất động sản" ? (
          <PropertyGridBDS properties={viewedProperties} />
        ) : (
          <ProjectGridTDC projects={projectProperties} />
        )}
      </div>
    </>
  );
};

export default FavoriteTabs;