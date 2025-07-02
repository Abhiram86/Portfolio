import { useContext, useRef, useState } from "react";
import {
  ModalCarouselContext,
  ModalCarouselPropsData,
} from "../context/ModelCarouselContext";
import { icons } from "../utils/Icons";
import Zoomable from "./Zoomable";

export default function ModalCarousel({
  data,
}: {
  data: ModalCarouselPropsData;
}) {
  const { setOpen } = useContext(ModalCarouselContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const images = 4;

  const handleScroll = () => {
    if (scrollRef.current) {
      const left = scrollRef.current.scrollLeft;
      const width = scrollRef.current.offsetWidth;
      const index = Math.round(left / width);
      setCurrentIndex(index);
    }
  };

  const scrollTo = (index: number) => {
    if (scrollRef.current && index >= 0 && index < images) {
      scrollRef.current.scrollTo({
        left: index * scrollRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="h-[400px] flex flex-col items-center space-y-4 z-10 w-96 p-2 rounded-lg fixed ring ring-zinc-600 bg-zinc-900/50 top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div>
        <div className="absolute w-[475px] flex justify-between top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <button
            className={`transition-opacity duration-300 ${currentIndex === 0 ? "opacity-5" : "rounded-full"}`}
            onClick={() => scrollTo(currentIndex - 1)}
          >
            <img
              src={icons.Left.imgSrc}
              className="p-2 hover:bg-purple-800 rounded-full transition-colors cursor-pointer"
              alt="left"
            />
          </button>
          <button
            className={`transition-opacity duration-300 ${currentIndex === images - 1 ? "opacity-5" : "rounded-full"}`}
            onClick={() => scrollTo(currentIndex + 1)}
          >
            <img
              src={icons.Left.imgSrc}
              className="p-2 rotate-180 hover:bg-purple-800 rounded-full transition-colors cursor-pointer"
              alt="right"
            />
          </button>
        </div>
        <div>
          <button
            className="absolute top-1 right-3 text-red-400 hover:underline"
            onClick={() => setOpen(null)}
          >
            close
          </button>
          <p className="text-center">{data.name}</p>
        </div>
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex carousel rounded-lg overflow-scroll h-[360px] snap-x space-x-2 snap-proximity"
        >
          {data.pages.map((page, index) => (
            <Zoomable key={index} page={page.link} />
          ))}
        </div>
      </div>
      {data.pages.length > 0 && (
        <div className="bg-zinc-900 p-2 w-96 rounded-lg ring ring-zinc-600">
          {data.pages[currentIndex].description}
        </div>
      )}
    </div>
  );
}
