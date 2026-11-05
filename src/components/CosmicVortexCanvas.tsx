import { useEffect, useRef } from "react";

interface CosmicVortexCanvasProps {
  className?: string;
  variant?: "vortex" | "ambient" | "ring" | "bust";
  particleCount?: number;
  interactive?: boolean;
}

export const CosmicVortexCanvas = ({
  className = "",
  variant = "vortex",
  particleCount = 500,
  interactive = true,
}: CosmicVortexCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;

    const onResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetMouseX = e.clientX - rect.left;
      targetMouseY = e.clientY - rect.top;
    };

    window.addEventListener("resize", onResize);
    if (interactive) {
      window.addEventListener("mousemove", onMouseMove);
    }

    interface Particle {
      x: number;
      y: number;
      z: number;
      vx: number;
      vy: number;
      size: number;
      baseAlpha: number;
      color: string;
      colorIndex: number;
      angle: number;
      radius: number;
      speed: number;
    }

    const darkPalette = [
      "rgba(0, 212, 255,",   // cyan
      "rgba(124, 58, 237,",  // violet
      "rgba(255, 106, 0,",   // orange
      "rgba(255, 46, 36,",   // red
      "rgba(255, 255, 255,", // white
      "rgba(0, 255, 136,",   // green
    ];

    const lightPalette = [
      "rgba(8, 145, 178,",   // cyan-600
      "rgba(109, 40, 217,",  // violet-700
      "rgba(234, 88, 12,",   // orange-600
      "rgba(220, 38, 38,",   // red-600
      "rgba(30, 41, 59,",    // slate-800
      "rgba(13, 148, 136,",  // teal-600
    ];

    let isLightMode = document.documentElement.getAttribute("data-theme") === "light";
    let activePalette = isLightMode ? lightPalette : darkPalette;

    const particles: Particle[] = [];
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    const isReducedMotion = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const count = Math.min(particleCount, isMobile ? 160 : 500);

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius =
        variant === "ring"
          ? (isMobile ? 80 : 120) + Math.random() * (isMobile ? 100 : 180)
          : Math.pow(Math.random(), 1.5) * Math.min(width, height) * 0.55;

      const colorIndex = Math.floor(Math.random() * activePalette.length);
      const colorPrefix = activePalette[colorIndex];

      particles.push({
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius,
        z: Math.random() * 200,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        size: Math.random() * 1.8 + 0.7,
        baseAlpha: Math.random() * 0.65 + 0.2,
        color: colorPrefix,
        colorIndex,
        angle,
        radius,
        speed: (0.002 + Math.random() * 0.004) * (Math.random() > 0.5 ? 1 : 0.9),
      });
    }

    const handleThemeChange = (e: any) => {
      isLightMode = e.detail === "light";
      activePalette = isLightMode ? lightPalette : darkPalette;
      for (let i = 0; i < particles.length; i++) {
        particles[i].color = activePalette[particles[i].colorIndex];
      }
    };
    window.addEventListener("theme-change", handleThemeChange);

    let time = 0;
    let isVisible = true;

    // Viewport Visibility Observer - Pauses loop when offscreen
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible && !isReducedMotion) {
          cancelAnimationFrame(animationFrameId);
          animationFrameId = requestAnimationFrame(render);
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(canvas);

    const render = () => {
      if (!isVisible) return;

      time += 0.015;
      mouseX += (targetMouseX - mouseX) * 0.04;
      mouseY += (targetMouseY - mouseY) * 0.04;

      ctx.clearRect(0, 0, width, height);

      const centerX = width * 0.65 + (mouseX - width / 2) * 0.04;
      const centerY = height * 0.5 + (mouseY - height / 2) * 0.04;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (variant === "vortex" || variant === "ring") {
          // Swirling vortex math
          p.angle += p.speed;
          const wobble = Math.sin(time + i) * 5;
          const curRadius = p.radius + wobble;
          
          const px = centerX + Math.cos(p.angle) * curRadius;
          const py = centerY + Math.sin(p.angle) * curRadius * 0.85;

          const alpha = p.baseAlpha * (0.6 + 0.4 * Math.sin(time * 2 + i));

          ctx.beginPath();
          ctx.arc(px, py, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color} ${alpha})`;
          ctx.fill();

          // Connect very close neighbors for subtle cosmic mesh (desktop only)
          if (!isMobile && i % 8 === 0 && i + 1 < particles.length) {
            const next = particles[i + 1];
            const npx = centerX + Math.cos(next.angle) * next.radius;
            const npy = centerY + Math.sin(next.angle) * next.radius * 0.85;
            const dist = Math.hypot(px - npx, py - npy);
            if (dist < 50) {
              ctx.beginPath();
              ctx.moveTo(px, py);
              ctx.lineTo(npx, npy);
              ctx.strokeStyle = isLightMode
                ? `rgba(8, 145, 178, ${0.15 * (1 - dist / 50)})`
                : `rgba(0, 212, 255, ${0.12 * (1 - dist / 50)})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        } else {
          // Ambient floating particles
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;

          const alpha = p.baseAlpha * (0.5 + 0.5 * Math.sin(time + i));

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color} ${alpha})`;
          ctx.fill();
        }
      }

      if (!isReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      observer.disconnect();
      window.removeEventListener("theme-change", handleThemeChange);
      window.removeEventListener("resize", onResize);
      if (interactive) {
        window.removeEventListener("mousemove", onMouseMove);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, [variant, particleCount, interactive]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 ${className}`}
      aria-hidden="true"
    />
  );
};

export default CosmicVortexCanvas;
