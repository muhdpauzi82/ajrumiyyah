import { useEffect, useRef, useState } from "react";

const DESIGN_WIDTH = 1440;
const DESIGN_HEIGHT = 900;

export default function useArenaScale() {
  const viewportRef = useRef(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      const viewport = viewportRef.current;

      if (!viewport) return;

      const availableWidth = viewport.clientWidth;
      const availableHeight = viewport.clientHeight;

      const nextScale = Math.min(
        availableWidth / DESIGN_WIDTH,
        availableHeight / DESIGN_HEIGHT
      );

      setScale(nextScale);
    };

    updateScale();

    const resizeObserver = new ResizeObserver(updateScale);

    if (viewportRef.current) {
      resizeObserver.observe(viewportRef.current);
    }

    window.addEventListener("resize", updateScale);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateScale);
    };
  }, []);

  return {
    viewportRef,
    scale,
    designWidth: DESIGN_WIDTH,
    designHeight: DESIGN_HEIGHT,
  };
}