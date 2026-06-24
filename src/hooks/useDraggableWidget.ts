import { useState, useEffect, useRef, useCallback } from 'react';

type Position = { x: number; y: number };

interface UseDraggableWidgetProps {
  id: string;
  defaultPosition: {
    x: number; 
    y: number;
  };
}

export function useDraggableWidget({ id, defaultPosition }: UseDraggableWidgetProps) {
  const [position, setPosition] = useState<Position>(() => {
    const saved = localStorage.getItem(`draggable_widget_${id}`);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (typeof parsed.x === 'number' && typeof parsed.y === 'number') {
          return parsed;
        }
      } catch (e) {}
    }
    return defaultPosition;
  });

  const [isDragging, setIsDragging] = useState(false);
  const [isLongPressing, setIsLongPressing] = useState(false);
  const [isDesktop, setIsDesktop] = useState(typeof window !== 'undefined' ? window.innerWidth >= 768 : true);
  
  const widgetRef = useRef<any>(null);
  const dragInfo = useRef({
    startX: 0,
    startY: 0,
    startPosX: 0,
    startPosY: 0,
    timer: null as ReturnType<typeof setTimeout> | null,
    isMoved: false,
  });

  // Calculate if we are currently snapped to an edge
  const w = widgetRef.current?.getBoundingClientRect().width || 56;
  let edgeState: 'left' | 'right' | false = false;
  const MARGIN = 16;
  if (position.x <= MARGIN + 5) {
    edgeState = 'left';
  } else if (position.x >= window.innerWidth - w - MARGIN - 5) {
    edgeState = 'right';
  }

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
      const rect = widgetRef.current?.getBoundingClientRect();
      const w = rect?.width || 56;
      const h = rect?.height || 56;
      
      setPosition(prev => {
        let newX = prev.x;
        let newY = prev.y;
        if (newX > window.innerWidth - w) newX = Math.max(16, window.innerWidth - w - 16);
        if (newY > window.innerHeight - h) newY = Math.max(16, window.innerHeight - h - 16);
        return { x: newX, y: newY };
      });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);

    dragInfo.current.startX = e.clientX;
    dragInfo.current.startY = e.clientY;
    dragInfo.current.startPosX = position.x;
    dragInfo.current.startPosY = position.y;
    dragInfo.current.isMoved = false;

    dragInfo.current.timer = setTimeout(() => {
      setIsLongPressing(true);
      setIsDragging(true);
      if (typeof navigator !== 'undefined' && navigator.vibrate) {
        navigator.vibrate(50);
      }
    }, 400); 
  }, [position.x, position.y]);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!dragInfo.current.timer && !isDragging) return;

    const dx = e.clientX - dragInfo.current.startX;
    const dy = e.clientY - dragInfo.current.startY;

    if (!isDragging && Math.abs(dx) + Math.abs(dy) > 5) {
      if (dragInfo.current.timer) {
        clearTimeout(dragInfo.current.timer);
        dragInfo.current.timer = null;
      }
      return;
    }

    if (isDragging) {
      e.preventDefault();
      dragInfo.current.isMoved = true;
      let newX = dragInfo.current.startPosX + dx;
      let newY = dragInfo.current.startPosY + dy;

      const rect = widgetRef.current?.getBoundingClientRect();
      const w = rect?.width || 56;
      const h = rect?.height || 56;
      
      newX = Math.max(0, Math.min(newX, window.innerWidth - w));
      newY = Math.max(0, Math.min(newY, window.innerHeight - h));

      setPosition({ x: newX, y: newY });
    }
  }, [isDragging]);

  const handlePointerUp = useCallback((e: React.PointerEvent) => {
    (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    
    if (dragInfo.current.timer) {
      clearTimeout(dragInfo.current.timer);
      dragInfo.current.timer = null;
    }

    setIsLongPressing(false);
    
    if (isDragging) {
      setIsDragging(false);
      
      const rect = widgetRef.current?.getBoundingClientRect();
      const w = rect?.width || 56;
      const h = rect?.height || 56;

      let finalX = position.x;
      let finalY = position.y;
      
      const isDesktopCurrent = window.innerWidth >= 768;

      if (!isDesktopCurrent) {
        // Mobile: Always snap
        if (finalX + w / 2 < window.innerWidth / 2) {
          finalX = MARGIN; 
        } else {
          finalX = window.innerWidth - w - MARGIN;
        }
      } else {
        // Desktop: Snap only if within 40px of edge
        if (finalX < 40) {
          finalX = MARGIN;
        } else if (finalX > window.innerWidth - w - 40) {
          finalX = window.innerWidth - w - MARGIN;
        }
      }

      finalY = Math.max(MARGIN, Math.min(finalY, window.innerHeight - h - MARGIN));

      const newPos = { x: finalX, y: finalY };
      setPosition(newPos);
      localStorage.setItem(`draggable_widget_${id}`, JSON.stringify(newPos));
    }
  }, [isDragging, position.x, position.y, id]);

  return {
    ref: widgetRef,
    position,
    isDragging,
    isLongPressing,
    isMoved: dragInfo.current.isMoved,
    edgeState,
    isDesktop,
    handlers: {
      onPointerDown: handlePointerDown,
      onPointerMove: handlePointerMove,
      onPointerUp: handlePointerUp,
      onPointerCancel: handlePointerUp,
      style: { touchAction: 'none' } as React.CSSProperties
    }
  };
}
