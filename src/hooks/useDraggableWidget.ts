import { useState, useEffect, useRef, useCallback } from 'react';

type Position = { x: number; y: number };

interface UseDraggableWidgetProps {
  id: string;
  defaultPosition: {
    // We use percentages or specific pixel values relative to screen
    // For simplicity, we just use absolute pixel positions from top-left (0,0)
    x: number; 
    y: number;
  };
  snapThreshold?: number; // Distance to edge to snap
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
  
  const widgetRef = useRef<any>(null);
  const dragInfo = useRef({
    startX: 0,
    startY: 0,
    startPosX: 0,
    startPosY: 0,
    timer: null as ReturnType<typeof setTimeout> | null,
    isMoved: false,
  });

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    // Only left click or touch
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    
    // Prevent default touch actions like scrolling while interacting with widget
    (e.target as HTMLElement).setPointerCapture(e.pointerId);

    dragInfo.current.startX = e.clientX;
    dragInfo.current.startY = e.clientY;
    dragInfo.current.startPosX = position.x;
    dragInfo.current.startPosY = position.y;
    dragInfo.current.isMoved = false;

    // Start long press timer
    dragInfo.current.timer = setTimeout(() => {
      setIsLongPressing(true);
      setIsDragging(true);
      // Vibrate if supported to indicate long press success
      if (typeof navigator !== 'undefined' && navigator.vibrate) {
        navigator.vibrate(50);
      }
    }, 400); // 400ms long press
  }, [position.x, position.y]);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!dragInfo.current.timer && !isDragging) return;

    const dx = e.clientX - dragInfo.current.startX;
    const dy = e.clientY - dragInfo.current.startY;

    // If moved more than 5px before timer triggers, cancel long press
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

      // Ensure it doesn't go completely off-screen during drag
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
      
      // Snap to edge logic
      const rect = widgetRef.current?.getBoundingClientRect();
      const w = rect?.width || 56;
      const h = rect?.height || 56;

      let finalX = position.x;
      let finalY = position.y;

      const MARGIN = 16;
      
      // Horizontal snap: Left or Right half
      if (finalX + w / 2 < window.innerWidth / 2) {
        finalX = MARGIN; // Snap to left
      } else {
        finalX = window.innerWidth - w - MARGIN; // Snap to right
      }

      // Vertical constraints (don't go off screen)
      finalY = Math.max(MARGIN, Math.min(finalY, window.innerHeight - h - MARGIN));

      const newPos = { x: finalX, y: finalY };
      setPosition(newPos);
      localStorage.setItem(`draggable_widget_${id}`, JSON.stringify(newPos));
    }
  }, [isDragging, position.x, position.y, id]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
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

  return {
    ref: widgetRef,
    position,
    isDragging,
    isLongPressing,
    isMoved: dragInfo.current.isMoved,
    handlers: {
      onPointerDown: handlePointerDown,
      onPointerMove: handlePointerMove,
      onPointerUp: handlePointerUp,
      onPointerCancel: handlePointerUp,
      // Stop default touch action so drag works on mobile
      style: { touchAction: 'none' } as React.CSSProperties
    }
  };
}
