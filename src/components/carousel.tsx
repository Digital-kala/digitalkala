import React, { useState, FunctionComponent, useEffect } from "react";

import { Fade } from "react-awesome-reveal";
import { IconType } from "react-icons";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// Generic props type for the Carousel component
type CarouselProps<T> = {
  items: T[];
  ItemTemplate: FunctionComponent<{ item: T }>;
  autoMove: boolean;
  numVisibleItems: number;
  isSmallScreen: boolean;
};

type TestinomialProps = {
  name: string;
  testimonial: string;
  image?: string;
};

export function Carousel<T>({
  items,
  ItemTemplate,
  autoMove,
  numVisibleItems,
  isSmallScreen,
}: CarouselProps<T>) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => {
      return prevIndex === 0 ? items.length - 1 : prevIndex - 1;
    });
  };

  const getVisibleItems = () => {
    let visibleItems = [];
    for (let i = 0; i < numVisibleItems; i++) {
      let index = (currentIndex + i) % items.length;
      visibleItems.push(items[index]);
    }
    return visibleItems;
  };

  function moveButton(icon: IconType, onClick: () => void) {
    return (
      <div
        onClick={onClick}
        className="p-1.5 md:p-2.5 rounded-full border-2 border-white/40 text-white/40 hover:text-[#0C3457] hover:bg-white hover:transition-colors duration-300 flex items-center justify-center align-middle cursor-pointer"
      >
        {React.createElement(icon, { size: isSmallScreen ? 18 : 22 })}
      </div>
    );
  }

  useEffect(() => {
    if (autoMove) {
      const interval = setInterval(next, 3000); // Auto-cycle every 3 seconds
      return () => clearInterval(interval); // Cleanup the interval on component unmount
    }
  }, []);

  if (autoMove) {
    return getVisibleItems().map((item) => <ItemTemplate item={item} />);
  }

  return (
    <div className="flex justify-between md:justify-around items-center">
      {moveButton(IoIosArrowBack, prev)}

      {getVisibleItems().map((item) => (
        <ItemTemplate item={item} />
      ))}

      {moveButton(IoIosArrowForward, next)}
    </div>
  );
}

export function TestimonialCarousel({ items, isSmallScreen}: { items: TestinomialProps[], isSmallScreen: boolean }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => {
      return prevIndex === 0 ? items.length - 1 : prevIndex - 1;
    });
  };

  function moveButton(icon: IconType, onClick: () => void) {
    return (
      <div
        onClick={onClick}
        className="p-1.5 md:p-2.5 rounded-full border-2 border-[#0C3457] text-[#0C3457] hover:text-white hover:bg-[#0C3457] hover:transition-colors duration-300 flex items-center justify-center align-middle cursor-pointer"
      >
        {React.createElement(icon, { size: isSmallScreen ? 18 : 22 })}
      </div>
    );
  }

  return (
    <div className="flex justify-around items-center">
      {moveButton(IoIosArrowBack, prev)}

      <Fade key={currentIndex}>
        <div className="flex flex-col md:flex-row space-x-5 space-y-10 md:space-y-0 px-[10%]">
          <div className="relative w-[10rem] md:w-[33rem] mx-auto mt-5 md:mt-0">
            <div className="h-[20vh] md:h-[26vh]  rounded-lg prevent-select" />
            <div className="h-full w-full rounded-lg prevent-select absolute bottom-[10%] right-[15%] bg-[#A5BDD1]/50 shadow-lg shadow-slate-400 drop-shadow-lg" />
            <div className="h-full w-full absolute z-10 top-0">
              <img
                src={items[currentIndex].image}
                alt="participant"
                className="h-full w-full rounded-lg prevent-select object-cover shadow-lg shadow-slate-400 drop-shadow-lg"
              />
            </div>
          </div>

          <div className="flex flex-col space-y-10 px-0 md:px-16">
            <p className="text-justify !leading-7">
              {items[currentIndex].testimonial}
            </p>
            <div className="font-['WebsiteFontBold'] text-right">
              ~ {items[currentIndex].name}
            </div>
          </div>
        </div>
      </Fade>

      {moveButton(IoIosArrowForward, next)}
    </div>
  );
}
