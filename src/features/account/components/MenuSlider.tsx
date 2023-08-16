import { Icons } from '@/constants';
import clsx from 'clsx';
import { useEffect, useMemo, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

export interface MenuSliderItem {
  id: number | string;
  label: string;
  to: string;
}

interface MenuSliderProps {
  className?: string;
  items: MenuSliderItem[];
}

const useActiveItem = (items: MenuSliderItem[]) => {
  const location = useLocation();
  const [itemActive, setItemActive] = useState(items[0]);
  useEffect(() => {
    const item = items.find((item) => location.pathname.includes(item.to));
    if (item) {
      setItemActive(item);
    }
  }, [location.pathname, items]);
  const isFirstItem = useMemo(
    () => itemActive.id === items[0].id,
    [itemActive.id, items]
  );

  const isLastItem = useMemo(
    () => itemActive.id === items[items.length - 1].id,
    [itemActive.id, items]
  );

  const indexActive = useMemo(
    () => items.findIndex((item) => item.id === itemActive.id),
    [itemActive.id, items]
  );

  const totalPage = useMemo(() => Math.ceil(items.length / 3), [items.length]);

  return {
    itemActive,
    isFirstItem,
    isLastItem,
    indexActive,
    totalPage,
  };
};

export const MenuSlider = ({ className, items }: MenuSliderProps) => {
  const { totalPage, indexActive } = useActiveItem(items);
  const [sliderActive, setSliderActive] = useState(0);
  const isEndPage = sliderActive === totalPage - 1;
  const isStartPage = sliderActive === 0;

  useEffect(() => {
    setSliderActive(Math.ceil((indexActive + 1) / 3) - 1);
  }, [indexActive]);

  const handleNext = () => {
    if (isEndPage) {
      return;
    }
    setSliderActive((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (isStartPage) {
      return;
    }
    setSliderActive((prev) => prev - 1);
  };

  const sliderContainerCss = {
    '--translate-x': `calc(-${sliderActive} * (100%))`,
    transform: `translateX(var(--translate-x))`,
  } as React.CSSProperties;

  return (
    <div className={clsx(className)}>
      <div className={clsx('relative')}>
        <button
          className={clsx('absolute left-0 top-1/2 z-[2] -translate-y-1/2')}
          onClick={handlePrev}
        >
          <Icons.AngleArrowRight
            className={clsx('rotate-180', isStartPage && 'fill-lightGray')}
          />
        </button>
        <div className="overflow-hidden">
          <ul
            className="flex items-center transition"
            style={sliderContainerCss}
          >
            {items.map((item, index) => (
              <li
                key={item.id}
                className={clsx('inline-flex flex-shrink-0 basis-1/3')}
              >
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    clsx(
                      isActive ? '!border-black text-black' : 'text-darkGray',
                      (index !== items.length - 1 || index !== 0) && 'px-2',
                      'block w-full whitespace-nowrap border-b border-b-gray py-4 text-center'
                    )
                  }
                >
                  <h5>{item.label}</h5>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <button
          className={clsx('absolute right-0 top-1/2 z-[2] -translate-y-1/2')}
          onClick={handleNext}
        >
          <Icons.AngleArrowRight
            className={clsx(isEndPage && 'fill-lightGray')}
          />
        </button>
      </div>
    </div>
  );
};
