import React, { useState, FunctionComponent, useEffect } from "react";

import { IconType } from "react-icons";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// Generic props type for the Carousel component
type CarouselProps<T> = {
  items: T[];
  ItemTemplate: FunctionComponent<{ item: T }>;
  autoMove: boolean;
  numVisibleItems: number;
};

function Carousel<T>({
  items,
  ItemTemplate,
  autoMove,
  numVisibleItems,
}: CarouselProps<T>) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        return items.length - 1;
      } else {
        return prevIndex - 1;
      }
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
        className="p-2.5 rounded-full border-2 border-white/40 text-white/40 hover:text-[#0C3457] hover:bg-white hover:transition-colors duration-300 flex items-center justify-center align-middle cursor-pointer"
      >
        {React.createElement(icon, { size: 22 })}
      </div>
    );
  }

  useEffect(() => {
    if (autoMove) {
      const interval = setInterval(next, 1500); // Auto-cycle every 3 seconds
      return () => clearInterval(interval); // Cleanup the interval on component unmount
    }
  }, []);

  if (autoMove) {
    return getVisibleItems().map((item) => <ItemTemplate item={item} />);
  }

  return (
    <div className="flex justify-around items-center">
      {moveButton(IoIosArrowBack, prev)}

      {getVisibleItems().map((item) => (
        <ItemTemplate item={item} />
      ))}

      {moveButton(IoIosArrowForward, next)}
    </div>
  );
}

export default Carousel;
