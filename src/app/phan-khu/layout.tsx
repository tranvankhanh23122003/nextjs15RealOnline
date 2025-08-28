"use client";

import React from "react";

interface PhanKhuLayoutProps {
  children: React.ReactNode;
}

const PhanKhuLayout: React.FC<PhanKhuLayoutProps> = ({ children }) => {
  return (
    <div className="phan-khu-layout">
      <div className="phan-khu-container">
        {children} 
      </div>
    </div>
  );
};

export default PhanKhuLayout;
