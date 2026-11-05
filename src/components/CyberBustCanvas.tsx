import { useEffect, useRef } from "react";

interface CyberBustCanvasProps {
  className?: string;
  particleCount?: number;
}

export const CyberBustCanvas = ({
  className = "",
  particleCount = 1200,
}: CyberBustCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 400);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 450);

    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const onResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetMouseX = ((e.clientX - rect.left) / width - 0.5) * 1.5;
      targetMouseY = ((e.clientY - rect.top) / height - 0.5) * 1.5;
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMouseMove);

    type ColorType = "cyan" | "violet" | "teal";

    interface Point3D {
      x: number;
      y: number;
      z: number;
      size: number;
      alpha: number;
      colorType: ColorType;
      isRing?: boolean;
    }

    const darkColors: Record<ColorType, string> = {
      cyan: "0, 212, 255",
      violet: "124, 58, 237",
      teal: "0, 255, 200",
    };

    const lightColors: Record<ColorType, string> = {
      cyan: "8, 145, 178",
      violet: "109, 40, 217",
      teal: "13, 148, 136",
    };

    let isLightMode = document.documentElement.getAttribute("data-theme") === "light";

    const handleThemeChange = (e: any) => {
      isLightMode = e.detail === "light";
    };
    window.addEventListener("theme-change", handleThemeChange);

    const points: Point3D[] = [];

    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    const isReducedMotion = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const effectiveCount = isMobile ? Math.min(particleCount, 550) : particleCount;

    // 1. Generate stylized human head points (ellipsoid)
    const headCount = Math.floor(effectiveCount * 0.45);
    for (let i = 0; i < headCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 65 + Math.random() * 12;

      // Squish into head shape
      const x = r * Math.sin(phi) * Math.cos(theta) * 0.82;
      const y = r * Math.cos(phi) * 1.05 - 25;
      const z = r * Math.sin(phi) * Math.sin(theta) * 0.95;

      points.push({
        x,
        y,
        z,
        size: Math.random() * 1.8 + 0.6,
        alpha: Math.random() * 0.7 + 0.35,
        colorType: Math.random() > 0.25 ? "cyan" : "violet",
      });
    }

    // 2. Generate neck & shoulders
    const bodyCount = Math.floor(particleCount * 0.35);
    for (let i = 0; i < bodyCount; i++) {
      const t = Math.random();
      const angle = Math.random() * Math.PI * 2;
      
      // Neck (t: 0 to 0.4) vs Shoulders (t: 0.4 to 1.0)
      if (t < 0.35) {
        // Neck
        const radius = 28 + Math.random() * 10;
        const y = 50 + t * 90;
        points.push({
          x: Math.cos(angle) * radius * 0.8,
          y,
          z: Math.sin(angle) * radius * 0.8,
          size: Math.random() * 1.6 + 0.5,
          alpha: Math.random() * 0.6 + 0.3,
          colorType: "cyan",
        });
      } else {
        // Broad shoulders
        const progress = (t - 0.35) / 0.65;
        const shoulderWidth = 60 + progress * 110;
        const radiusZ = 25 + progress * 25;
        const y = 90 + progress * 80;
        points.push({
          x: (Math.random() - 0.5) * shoulderWidth * 2,
          y: y + (Math.random() - 0.5) * 15,
          z: (Math.random() - 0.5) * radiusZ * 2,
          size: Math.random() * 1.7 + 0.5,
          alpha: Math.random() * 0.5 + 0.25,
          colorType: Math.random() > 0.4 ? "cyan" : "violet",
        });
      }
    }

    // 3. Orbital cyber rings surrounding the head
    const ringCount = Math.floor(particleCount * 0.2);
    for (let i = 0; i < ringCount; i++) {
      const angle = (i / ringCount) * Math.PI * 2;
      const radius = 135 + (i % 2 === 0 ? 15 : -10) + Math.random() * 10;
      // tilted ring
      const rx = Math.cos(angle) * radius;
      const rz = Math.sin(angle) * radius;
      const ry = Math.sin(angle) * 35;

      points.push({
        x: rx,
        y: ry - 10,
        z: rz,
        size: Math.random() * 2.2 + 0.8,
        alpha: Math.random() * 0.8 + 0.4,
        colorType: "teal",
        isRing: true,
      });
    }

    let rotY = 0;
    let rotX = 0;

    const render = () => {
      rotY += 0.008;
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      const currentRotY = rotY + mouseX * 0.8;
      const currentRotX = mouseY * 0.5 - 0.1;

      ctx.clearRect(0, 0, width, height);

      const fov = 350;
      const cx = width / 2;
      const cy = height / 2 + 10;

      const cosY = Math.cos(currentRotY);
      const sinY = Math.sin(currentRotY);
      const cosX = Math.cos(currentRotX);
      const sinX = Math.sin(currentRotX);

      const currentColors = isLightMode ? lightColors : darkColors;

      // Sort points by depth
      const projected = [];

      for (let i = 0; i < points.length; i++) {
        const p = points[i];

        // Rotate Y
        let x1 = p.x * cosY - p.z * sinY;
        let z1 = p.z * cosY + p.x * sinY;

        // Rotate X
        let y1 = p.y * cosX - z1 * sinX;
        let z2 = z1 * cosX + p.y * sinX + 320;

        if (z2 <= 0) continue;

        const scale = fov / z2;
        const x2D = cx + x1 * scale;
        const y2D = cy + y1 * scale;

        const depthAlpha = Math.min(1, Math.max(0.15, (scale - 0.4) * 1.6));
        const finalAlpha = p.alpha * depthAlpha * (isLightMode ? 1.15 : 1.0);

        projected.push({
          x: x2D,
          y: y2D,
          z: z2,
          size: Math.max(0.6, p.size * scale),
          alpha: Math.min(1, finalAlpha),
          color: currentColors[p.colorType],
          isRing: p.isRing,
        });
      }

      // Sort back-to-front
      projected.sort((a, b) => b.z - a.z);

      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${p.alpha})`;
        ctx.fill();
      }

      if (!isReducedMotion) {
        animId = requestAnimationFrame(render);
      }
    };

    let isVisible = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible && !isReducedMotion) {
          cancelAnimationFrame(animId);
          animId = requestAnimationFrame(render);
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(canvas);
    render();

    return () => {
      observer.disconnect();
      window.removeEventListener("theme-change", handleThemeChange);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animId);
    };
  }, [particleCount]);

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full block ${className}`}
      aria-hidden="true"
    />
  );
};

export default CyberBustCanvas;
