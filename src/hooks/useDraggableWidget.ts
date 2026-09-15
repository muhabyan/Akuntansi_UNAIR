import { useState, useEffect, useRef, useCallback } from 'react';

type Position = { x: number; y: number };

const TOP_CLEARANCE = 80;
const VIEWPORT_MARGIN = 16;
const FALLBACK_WIDGET_SIZE = 56;

function getViewportSize() {
  return {
    width: typeof document !== 'undefined' ? document.documentElement.clientWidth : 1024,
    height: typeof window !== 'undefined' ? window.innerHeight : 768,
  };
}

function clampLauncherPosition(position: Position, width = FALLBACK_WIDGET_SIZE, height = FALLBACK_WIDGET_SIZE): Position {
  const viewport = getViewportSize();
  const maxX = Math.max(0, viewport.width - width);
  const maxY = Math.max(TOP_CLEARANCE, viewport.height - height);
  const x = Number.isFinite(position.x) ? Math.min(Math.max(position.x, 0), maxX) : 0;
  const y = Number.isFinite(position.y) ? Math.min(Math.max(position.y, TOP_CLEARANCE), maxY) : TOP_CLEARANCE;
  return { x, y };
}

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
          if (getViewportSize().width < 768) return parsed;
          const safePosition = clampLauncherPosition(parsed);
          if (safePosition.x !== parsed.x || safePosition.y !== parsed.y) {
            localStorage.setItem(`draggable_widget_${id}`, JSON.stringify(safePosition));
          }
          return safePosition;
        }
      } catch {
        localStorage.removeItem(`draggable_widget_${id}`);
      }
    }
    return clampLauncherPosition(defaultPosition);
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

  const w = widgetRef.current?.getBoundingClientRect().width || 56;
  let edgeState: 'left' | 'right' | false = false;
  const MARGIN = 16;
  const clientWidth = typeof document !== 'undefined' ? document.documentElement.clientWidth : (typeof window !== 'undefined' ? window.innerWidth : 1024);
  
  if (position.x <= MARGIN + 5) {
    edgeState = 'left';
  } else if (position.x >= clientWidth - w - MARGIN - 5) {
    edgeState = 'right';
  }

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) return;
      const rect = widgetRef.current?.getBoundingClientRect();
      const w = rect?.width || 56;
      const h = rect?.height || 56;
      
      setPosition(prev => {
        const safePosition = clampLauncherPosition(prev, w, h);
        return safePosition.x === prev.x && safePosition.y === prev.y ? prev : safePosition;
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
      setIsDragging(true);
      setIsLongPressing(true);
    }

    if (isDragging) {
      e.preventDefault();
      dragInfo.current.isMoved = true;
      let newX = dragInfo.current.startPosX + dx;
      let newY = dragInfo.current.startPosY + dy;

      const rect = widgetRef.current?.getBoundingClientRect();
      const w = rect?.width || 56;
      const h = rect?.height || 56;
      const clientWidth = document.documentElement.clientWidth;
      
      newX = Math.max(0, Math.min(newX, clientWidth - w));
      newY = Math.max(TOP_CLEARANCE, Math.min(newY, window.innerHeight - h));

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
      const clientWidth = document.documentElement.clientWidth;

      if (!isDesktopCurrent) {
        if (finalX + w / 2 < clientWidth / 2) {
          finalX = 0; 
        } else {
          finalX = clientWidth - w;
        }
      } else {
        if (finalX < 40) {
          finalX = 0;
        } else if (finalX > clientWidth - w - 40) {
          finalX = clientWidth - w;
        }
      }

      finalY = Math.max(TOP_CLEARANCE, Math.min(finalY, window.innerHeight - h));

      const newPos = { x: finalX, y: finalY };
      setPosition(newPos);
      localStorage.setItem(`draggable_widget_${id}`, JSON.stringify(newPos));
    }
  }, [isDragging, position.x, position.y, id]);

  const getPanelStyle = (panelWidth: number, panelHeight: number): React.CSSProperties => {
    const viewport = getViewportSize();
    const safeWidth = Math.min(panelWidth, Math.max(0, viewport.width - VIEWPORT_MARGIN * 2));
    const safeHeight = Math.min(panelHeight, Math.max(0, viewport.height - TOP_CLEARANCE - VIEWPORT_MARGIN));
    const opensRight = position.x < viewport.width / 2;
    const opensDown = position.y < viewport.height / 2;
    const preferredX = opensRight ? position.x + 64 : position.x - safeWidth - VIEWPORT_MARGIN;
    const preferredY = opensDown ? position.y : position.y - safeHeight - VIEWPORT_MARGIN;

    return {
      left: Math.min(Math.max(preferredX, VIEWPORT_MARGIN), Math.max(VIEWPORT_MARGIN, viewport.width - safeWidth - VIEWPORT_MARGIN)),
      top: Math.min(Math.max(preferredY, TOP_CLEARANCE), Math.max(TOP_CLEARANCE, viewport.height - safeHeight - VIEWPORT_MARGIN)),
      maxWidth: `calc(100vw - ${VIEWPORT_MARGIN * 2}px)`,
      maxHeight: `calc(100dvh - ${TOP_CLEARANCE + VIEWPORT_MARGIN}px)`,
    };
  };

  return {
    ref: widgetRef,
    position,
    isDragging,
    isLongPressing,
    get isMoved() { return dragInfo.current.isMoved; },
    edgeState,
    isDesktop: typeof window !== 'undefined' ? window.innerWidth >= 768 : true,
    getPanelStyle,
    handlers: {
      onPointerDown: handlePointerDown,
      onPointerMove: handlePointerMove,
      onPointerUp: handlePointerUp,
      onPointerCancel: handlePointerUp,
      style: { touchAction: 'none' } as React.CSSProperties
    }
  };
}
