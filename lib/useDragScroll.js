'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

/* Turns a horizontal overflow rail into something you can drive with the
   mouse: a vertical wheel over the rail scrolls it sideways, and you can
   grab and throw it with the pointer. Native trackpad swipes and touch
   are left alone — they already do the right thing. */
export default function useDragScroll({ enabled = true } = {}) {
  const ref = useRef(null);
  const drag = useRef({ active: false, startX: 0, startLeft: 0, moved: 0 });
  const snapTimer = useRef(null);
  const [dragging, setDragging] = useState(false);

  /* Scroll snapping fights direct scrollLeft writes, so it's parked for
     the duration of the gesture and restored once the rail goes idle —
     which lands the nearest tile on the snap point. */
  const suspendSnap = useCallback((el) => {
    el.style.scrollSnapType = 'none';
    clearTimeout(snapTimer.current);
    snapTimer.current = setTimeout(() => {
      el.style.scrollSnapType = '';
    }, 170);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el || !enabled) return undefined;

    const onWheel = (e) => {
      // A real horizontal gesture is already going the right way.
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
      if (el.scrollWidth <= el.clientWidth) return;
      suspendSnap(el);
      const before = el.scrollLeft;
      el.scrollLeft += e.deltaY;
      // Only claim the wheel if the rail actually moved. Comparing
      // against the edges directly doesn't work — snap padding keeps
      // scrollLeft off zero — and swallowing a no-op would trap the
      // page's own scroll under the cursor.
      if (el.scrollLeft !== before) e.preventDefault();
    };

    el.addEventListener('wheel', onWheel, { passive: false });
    return () => {
      el.removeEventListener('wheel', onWheel);
      clearTimeout(snapTimer.current);
    };
  }, [suspendSnap, enabled]);

  // A gesture already in flight must not survive the rail being locked.
  useEffect(() => {
    if (!enabled) {
      drag.current.active = false;
      setDragging(false);
    }
  }, [enabled]);

  const onPointerDown = useCallback(
    (e) => {
      if (!enabled || e.pointerType === 'touch' || e.button !== 0) return;
      const el = ref.current;
      if (!el) return;
      drag.current = { active: true, startX: e.clientX, startLeft: el.scrollLeft, moved: 0 };
      setDragging(true);
    },
    [enabled]
  );

  const onPointerMove = useCallback(
    (e) => {
      const d = drag.current;
      if (!d.active) return;
      const el = ref.current;
      if (!el) return;
      const dx = e.clientX - d.startX;
      if (Math.abs(dx) > d.moved) d.moved = Math.abs(dx);
      if (d.moved > 3) {
        // Capture only once it's clearly a drag, so plain clicks on the
        // tiles still reach the button.
        if (el.hasPointerCapture?.(e.pointerId) === false) el.setPointerCapture(e.pointerId);
        suspendSnap(el);
        el.scrollLeft = d.startLeft - dx;
      }
    },
    [suspendSnap]
  );

  const endDrag = useCallback((e) => {
    if (!drag.current.active) return;
    drag.current.active = false;
    setDragging(false);
    const el = ref.current;
    if (el?.hasPointerCapture?.(e.pointerId)) el.releasePointerCapture(e.pointerId);
  }, []);

  // A drag that ends on top of a tile must not also open its gallery.
  const onClickCapture = useCallback((e) => {
    if (drag.current.moved > 6) {
      e.preventDefault();
      e.stopPropagation();
      drag.current.moved = 0;
    }
  }, []);

  return {
    ref,
    dragging,
    handlers: {
      onPointerDown,
      onPointerMove,
      onPointerUp: endDrag,
      onPointerCancel: endDrag,
      onClickCapture,
    },
  };
}
