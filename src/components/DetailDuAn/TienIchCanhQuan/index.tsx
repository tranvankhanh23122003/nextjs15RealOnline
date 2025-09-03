'use client';
import { useState, useEffect, useRef } from 'react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import './syle.css';
import Image from 'next/image';
type VideoItem = {
  type: 'youtube' | 'mp4';
  src: string; 
};

export default function TienIchCanhQuan() {
  const [currentVideo, setCurrentVideo] = useState(0);

  const videos: VideoItem[] = [
    { type: 'youtube', src: '' },
    { type: 'youtube', src: '' },
    { type: 'youtube', src: 'JZfmNMZczEc' },
    { type: 'youtube', src: '3yJRtZgcFq4' },
    { type: 'youtube', src: '' },
  ];

  const albumRef = useRef<HTMLDivElement | null>(null);

  const goToPrevVideo = () => {
    setCurrentVideo((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const goToNextVideo = () => {
    setCurrentVideo((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const album = albumRef.current;
    if (!album) return;

    const videoWidth = 210;
    const visibleCount = 4;
    const maxOffset = (videos.length - visibleCount) * videoWidth;

    let offset = 0;
    if (currentVideo >= visibleCount) {
      offset = (currentVideo - visibleCount + 1) * videoWidth;
      if (offset > maxOffset) offset = 0;
    }

    album.style.transform = `translateX(-${offset}px)`;
  }, [currentVideo, videos.length]);

  return (
    <div className="home-page">
      <div className="video-slider-container">
        <div className="video-slider">
          {videos[currentVideo].type === 'youtube' ? (
            <iframe
              key={videos[currentVideo].src}
              width="100%"
              height="500"
              src={`https://www.youtube.com/embed/${videos[currentVideo].src}`}
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <video
              key={videos[currentVideo].src}
              src={videos[currentVideo].src}
              className="video-slide"
              autoPlay
              muted
              loop
              controls
            />
          )}
        </div>
      </div>

      <div className="video-album-controls">
        <button onClick={goToPrevVideo} className="control-btn">
          <LeftOutlined />
        </button>

        <div className="video-album">
          <div className="video-album-inner" ref={albumRef}>
            {videos.map((video, index) => (
              <div
                key={index}
                className={`video-thumbnail-wrapper ${
                  index === currentVideo ? 'active' : ''
                }`}
                onClick={() => setCurrentVideo(index)}
              >
                {video.type === 'youtube' ? (
                  <Image
                    src={`https://img.youtube.com/vi/${video.src}/0.jpg`}
                    alt="youtube thumbnail"
                    width={150}       
                    height={68} 
                    className="video-thumbnail"
                  />
                ) : (
                  <video
                    src={video.src}
                    className="video-thumbnail"
                    muted
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <button onClick={goToNextVideo} className="control-btn">
          <RightOutlined />
        </button>
      </div>
    </div>
  );
}
