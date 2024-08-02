'use client';
import { useEffect, useRef, useState } from 'react';
import Product from '../OriginalsSection/Product';
import { BsArrowLeftSquareFill as LeftArrow } from 'react-icons/bs';
import { BsArrowRightSquareFill as RightArrow } from 'react-icons/bs';

const TrendingSection = ({ trendingProducts }: { trendingProducts: Product[] }) => {
  const [sliderPosition, setSliderPosition] = useState(0);
  const [isListEnd, setIsListEnd] = useState(false);
  const trendingListRef = useRef<HTMLUListElement | null>(null);
  const lastItemRef = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    const lastItem = lastItemRef.current;
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          entry.isIntersecting ? setIsListEnd(true) : setIsListEnd(false);
        });
      },
      { threshold: 1 }
    );
    lastItem && observer.observe(lastItem);

    return () => {
      lastItem && observer.unobserve(lastItem);
    };
  }, []);

  const move = (direction: 'left' | 'right') => {
    if (direction === 'right' && !isListEnd) {
      setSliderPosition(p => p + 1);

      trendingListRef.current!.style.cssText += `transform: translateX(-${(
        ((sliderPosition + 1) * 100) /
        (trendingProducts.length + 1)
      ).toFixed(2)}%);`;
    } else if (direction === 'left' && sliderPosition !== 0) {
      setSliderPosition(p => p - 1);

      trendingListRef.current!.style.cssText += `transform: translateX(-${(
        ((sliderPosition - 1) * 100) /
        (trendingProducts.length + 1)
      ).toFixed(2)}%);`;
    }
  };

  return (
    <div className="overflow-hidden trending-products-wrapper">
      <ul
        ref={trendingListRef}
        className={`flex justify-around gap-4 w-max h-84 trending-products`}
      >
        {trendingProducts.map(product => {
          return (
            <Product
              key={product.product_id}
              thumbnail={product.details.thumbnail}
              title={product.title}
              price={product.price}
              forTrendingSection
            />
          );
        })}

        <li
          ref={lastItemRef}
          className="border border-[var(--theme-switcher-border)] hover:border-[var(--text-color-default)] p-2 sm:p-4 w-[16rem] grid place-content-center font-semibold"
        >
          <p className="text-xl">View All</p>
        </li>
      </ul>
      <div className="text-4xl flex gap-2.5 mt-3.5 justify-center relative z-50">
        <button onClick={() => move('left')}>
          <LeftArrow className={`shadow-md ${sliderPosition === 0 && 'opacity-55'}`} />
        </button>

        <button onClick={() => move('right')}>
          <RightArrow className={`shadow-md ${isListEnd && 'opacity-55'}`} />
        </button>
      </div>
    </div>
  );
};

export default TrendingSection;
