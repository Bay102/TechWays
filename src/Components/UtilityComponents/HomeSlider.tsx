import { useRef } from 'react';
import '../../App.css';

const HomeSlider = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={carouselRef}
      className="max-w-[85%] p-4 space-x-4 bg-neutral rounded-box overflow-hidden"
    >
      <div className="carousel carousel-center gap-5 animate-scroll animation-iteration-count[loop] ">
        <div className="carousel-item">
          <img src="" className="rounded-box w-[250px] h-[300px]" />
        </div>
        <div className="carousel-item">
          <img src="" className="rounded-box w-[250px] h-[300px]" />
        </div>
        <div className="carousel-item">
          <img src="" className="rounded-box w-[250px] h-[300px]" />
        </div>
        <div className="carousel-item">
          <img src="" className="rounded-box w-[250px] h-[300px]" />
        </div>
        <div className="carousel-item">
          <img src="" className="rounded-box w-[250px] h-[300px]" />
        </div>
        <div className="carousel-item">
          <img src="" className="rounded-box w-[250px] h-[300px]" />
        </div>
        <div className="carousel-item">
          <img src="" className="rounded-box w-[250px] h-[300px]" />
        </div>
      </div>
    </div>
  );
};

export default HomeSlider;
