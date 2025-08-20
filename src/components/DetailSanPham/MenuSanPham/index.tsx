'use client';
import React, { useEffect, useRef, useState } from 'react';
import { FaBuilding, FaCompass, FaRulerCombined } from 'react-icons/fa';
import Slide1 from '../../../assets/images/baner1.png';
import Slide2 from '../../../assets/images/khu-cong-nghiep.png';
import './style.css';

interface Slide {
  src: string;
  alt: string;
}

interface CardData {
  slides: Slide[];
  currentPrice: string;
  originalPrice: string;
  constructionCost: string;
  floors: string;
  direction: string;
  area: string;
  detailText: string;
}

const CardComponent: React.FC<{ data: CardData }> = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % data.slides.length);
    }, 3000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startAutoSlide();
    return stopAutoSlide;
  }, []);

  return (
    <div className="sanpham-card">
      <div
        className="sanpham-slide-container"
        onMouseEnter={stopAutoSlide}
        onMouseLeave={startAutoSlide}
      >
        <div
          className="sanpham-slides"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {data.slides.map((slide, index) => (
            <img key={index} src={slide.src} alt={slide.alt} className="sanpham-slide" />
          ))}
        </div>
      </div>

      <div className="sanpham-price-info">
        <span className="sanpham-current-price">{data.currentPrice}</span>
        <span className="sanpham-original-price">{data.originalPrice}</span>
        <span className="sanpham-construction-cost">{data.constructionCost}</span>
      </div>

      <div className="sanpham-icon-row">
        <span><FaBuilding className="sanpham-icon" /> {data.floors}</span>
        <span className="divider">|</span>
        <span><FaCompass className="sanpham-icon" /> {data.direction}</span>
        <span className="divider">|</span>
        <span><FaRulerCombined className="sanpham-icon" /> {data.area}</span>
      </div>

      <div className="sanpham-detail-text">{data.detailText}</div>
    </div>
  );
};

const CardList: React.FC = () => {
  const cardsData: CardData[] = [
    {
      slides: [{ src: Slide1.src, alt: 'Slide 1' }, { src: Slide2.src, alt: 'Slide 2' }],
      currentPrice: '18,42 tỷ',
      originalPrice: '21,52 tỷ',
      constructionCost: '58,18 triệu/m²',
      floors: '5 tầng',
      direction: 'Đông Bắc',
      area: '84 m²',
      detailText: 'Căn 01, Liền kề, khu A',
    },
    {
      slides: [{ src: Slide2.src, alt: 'Slide 1' }, { src: Slide1.src, alt: 'Slide 2' }],
      currentPrice: '20,10 tỷ',
      originalPrice: '23,80 tỷ',
      constructionCost: '60,25 triệu/m²',
      floors: '6 tầng',
      direction: 'Tây Nam',
      area: '90,5 m²',
      detailText: 'Căn 02, Biệt thự, khu B',
    },
    {
      slides: [{ src: Slide1.src, alt: 'Slide 1' }, { src: Slide2.src, alt: 'Slide 2' }],
      currentPrice: '15,90 tỷ',
      originalPrice: '19,00 tỷ',
      constructionCost: '55,80 triệu/m²',
      floors: '4 tầng',
      direction: 'Đông Nam',
      area: '78,2 m²',
      detailText: 'Căn 03, Nhà phố, khu C',
    },
    {
      slides: [{ src: Slide2.src, alt: 'Slide 1' }, { src: Slide1.src, alt: 'Slide 2' }],
      currentPrice: '17,50 tỷ',
      originalPrice: '20,00 tỷ',
      constructionCost: '57,00 triệu/m²',
      floors: '5 tầng',
      direction: 'Nam',
      area: '80 m²',
      detailText: 'Căn 04, Liền kề, khu D',
    },
  ];

  return (
    <div className="sanpham-wrapper">
      <h2 className="sanpham-title">Bất động sản tương tự</h2>
      <div className="card-list-container">
        {cardsData.map((card, index) => (
          <CardComponent key={index} data={card} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
