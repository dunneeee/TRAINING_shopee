import { useRef } from 'react';

const useDraggableList = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const startXRef = useRef<number | null>(null);
  const scrollLeftRef = useRef<number>(0);
  const isDraggingRef = useRef(false);

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    isDraggingRef.current = true;
    startXRef.current =
      event.pageX - (scrollContainerRef.current?.offsetLeft || 0);
    scrollLeftRef.current = scrollContainerRef.current?.scrollLeft || 0;
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (!isDraggingRef.current || !scrollContainerRef.current) return;
    const x = event.pageX - (scrollContainerRef.current?.offsetLeft || 0);
    const scrollOffset = x - (startXRef.current || 0);
    scrollContainerRef.current.scrollLeft =
      scrollLeftRef.current - scrollOffset;
  };

  return {
    scrollContainerRef,
    handleMouseDown,
    handleMouseUp,
    handleMouseMove,
  };
};

export default useDraggableList;
