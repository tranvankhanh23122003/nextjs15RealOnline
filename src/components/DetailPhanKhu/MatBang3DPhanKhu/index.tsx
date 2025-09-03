'use client';
import React, { useRef, useState, useEffect } from 'react';
import Slide1 from '../../../../public/images/baner1.png'
import './style.css';
import Image from 'next/image';
export default function MatBang3DPhanKhu() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const startPos = useRef({ x: 0, y: 0 });
  const lastPos = useRef({ x: 0, y: 0 });

  const handleWheel = (e: WheelEvent) => {
    if (!containerRef.current?.contains(e.target as Node)) return;
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    setScale((prev) => Math.min(Math.max(prev + delta, 1), 3));
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    startPos.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const dx = e.clientX - startPos.current.x;
    const dy = e.clientY - startPos.current.y;
    setPosition({
      x: lastPos.current.x + dx,
      y: lastPos.current.y + dy,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    lastPos.current = { ...position };
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
      return () => {
        container.removeEventListener('wheel', handleWheel);
      };
    }
  }, []);

  return (
    <div
      className="wrapper-3d"
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <Image
        ref={imageRef}
        src={Slide1.src}
        alt="Mặt bằng 3D"
        width={150}
        height={68}
        className="image-3d"
        style={{
          transform: `scale(${scale}) translate(${position.x / scale}px, ${position.y / scale}px)`,
          cursor: isDragging ? 'grabbing' : 'grab',
        }}
      />
    </div>
  );
}
