import { useEffect, useState, useRef } from "react";

export const AmbientCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only enable for precision pointer devices (mouse), disabled on touch / coarse
    if (typeof window === "undefined" || !window.matchMedia("(pointer: fine)").matches) {
      return;
    }
    const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isReduced) return;

    let mouseX = -100;
    let mouseY = -100;
    let cursorX = -100;
    let cursorY = -100;
    let animId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!visible) setVisible(true);
    };

    const onMouseEnter = () => setVisible(true);
    const onMouseLeave = () => setVisible(false);

    let checkHoverTimeout: number;
    const checkHover = (e: MouseEvent) => {
      window.clearTimeout(checkHoverTimeout);
      checkHoverTimeout = window.setTimeout(() => {
        const target = e.target as HTMLElement | null;
        if (!target) return;
        const isClickable = target.closest("a, button, input, textarea, [role='button']");
        setIsHovered(!!isClickable);
      }, 16);
    };

    const render = () => {
      cursorX += (mouseX - cursorX) * 0.25;
      cursorY += (mouseY - cursorY) * 0.25;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
      }
      animId = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousemove", checkHover, { passive: true });
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
    render();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousemove", checkHover);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      window.clearTimeout(checkHoverTimeout);
      cancelAnimationFrame(animId);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed top-0 left-0 z-[9999] will-change-transform"
      style={{
        transform: "translate3d(-100px, -100px, 0)",
      }}
      aria-hidden="true"
    >
      <div
        className={`-translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-200 pointer-events-none ${
          isHovered
            ? "w-10 h-10 border border-[var(--text-primary)] opacity-40 scale-100"
            : "w-2.5 h-2.5 bg-[var(--text-primary)] opacity-50 scale-100"
        }`}
      />
    </div>
  );
};

export default AmbientCursor;
