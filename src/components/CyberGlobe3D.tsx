import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Shield, Radio, Activity, Globe, Lock } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export const CyberGlobe3D = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const { isDark } = useTheme();
  const [activeNode, setActiveNode] = useState<{
    city: string;
    coord: string;
    threats: string;
    status: string;
  }>({
    city: "Nashik / Mumbai Command Node",
    coord: "19.9975° N, 73.7898° E",
    threats: "0 Critical / Nominal",
    status: "ENCRYPTED DEFENSE OPERATIONAL",
  });

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let width = container.clientWidth || 500;
    let height = container.clientHeight || 500;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 215;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Globe Group
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    const radius = 94;

    const isCurrentLight = document.documentElement.getAttribute("data-theme") === "light";

    // 1. Base Wireframe Globe
    const sphereGeo = new THREE.SphereGeometry(radius, 32, 32);
    const sphereMat = new THREE.MeshBasicMaterial({
      color: isCurrentLight ? 0x0891b2 : 0x00d4ff,
      wireframe: true,
      transparent: true,
      opacity: isCurrentLight ? 0.22 : 0.12,
    });
    const sphere = new THREE.Mesh(sphereGeo, sphereMat);
    globeGroup.add(sphere);

    // 2. Inner Glow Sphere
    const innerGeo = new THREE.SphereGeometry(radius * 0.98, 36, 36);
    const innerMat = new THREE.MeshBasicMaterial({
      color: isCurrentLight ? 0xe0f2fe : 0x051329,
      transparent: true,
      opacity: isCurrentLight ? 0.65 : 0.88,
    });
    const innerSphere = new THREE.Mesh(innerGeo, innerMat);
    globeGroup.add(innerSphere);

    // 3. Surface Points (Dot Matrix Globe)
    const pointsGeo = new THREE.BufferGeometry();
    const pointCount = 1950;
    const posArray = new Float32Array(pointCount * 3);

    for (let i = 0; i < pointCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / pointCount);
      const theta = Math.sqrt(pointCount * Math.PI) * phi;

      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);

      posArray[i * 3] = x;
      posArray[i * 3 + 1] = y;
      posArray[i * 3 + 2] = z;
    }

    pointsGeo.setAttribute("position", new THREE.BufferAttribute(posArray, 3));
    const pointsMat = new THREE.PointsMaterial({
      size: 1.5,
      color: isCurrentLight ? 0x0284c7 : 0x00ffff,
      transparent: true,
      opacity: isCurrentLight ? 0.8 : 0.65,
    });
    const pointCloud = new THREE.Points(pointsGeo, pointsMat);
    globeGroup.add(pointCloud);

    const updateThemeColors = (isLight: boolean) => {
      sphereMat.color.setHex(isLight ? 0x0891b2 : 0x00d4ff);
      sphereMat.opacity = isLight ? 0.22 : 0.12;
      innerMat.color.setHex(isLight ? 0xe0f2fe : 0x051329);
      innerMat.opacity = isLight ? 0.65 : 0.88;
      pointsMat.color.setHex(isLight ? 0x0284c7 : 0x00ffff);
      pointsMat.opacity = isLight ? 0.8 : 0.65;
    };

    const handleThemeChange = (e: any) => {
      const isLight = e.detail === "light";
      updateThemeColors(isLight);
    };
    window.addEventListener("theme-change", handleThemeChange);

    // 4. Coordinates to 3D Cartesian
    const latLongToVector3 = (lat: number, lon: number, r: number) => {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lon + 180) * (Math.PI / 180);
      return new THREE.Vector3(
        -r * Math.sin(phi) * Math.cos(theta),
        r * Math.cos(phi),
        r * Math.sin(phi) * Math.sin(theta)
      );
    };

    // Major Security Operations Nodes
    const nodes = [
      { city: "Nashik / Mumbai", lat: 19.9975, lon: 73.7898, color: 0x00ff88, size: 2.6, pri: true },
      { city: "London", lat: 51.5074, lon: -0.1278, color: 0x00d4ff, size: 1.8 },
      { city: "Frankfurt", lat: 50.1109, lon: 8.6821, color: 0x00d4ff, size: 1.8 },
      { city: "Tokyo", lat: 35.6762, lon: 139.6503, color: 0x00d4ff, size: 1.8 },
      { city: "New York", lat: 40.7128, lon: -74.006, color: 0x00d4ff, size: 1.8 },
      { city: "Singapore", lat: 1.3521, lon: 103.8198, color: 0xffa800, size: 1.8 },
      { city: "Sydney", lat: -33.8688, lon: 151.2093, color: 0xffa800, size: 1.8 },
    ];

    const nodeObjects: THREE.Mesh[] = [];
    nodes.forEach((n) => {
      const pos = latLongToVector3(n.lat, n.lon, radius + 1.2);
      const markerGeo = new THREE.SphereGeometry(n.size, 16, 16);
      const markerMat = new THREE.MeshBasicMaterial({ color: n.color });
      const marker = new THREE.Mesh(markerGeo, markerMat);
      marker.position.copy(pos);
      globeGroup.add(marker);
      nodeObjects.push(marker);

      // Pulsing Ring for Nashik HQ
      if (n.pri) {
        const ringGeo = new THREE.RingGeometry(3.5, 5, 24);
        const ringMat = new THREE.MeshBasicMaterial({
          color: 0x00ff88,
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0.8,
        });
        const ring = new THREE.Mesh(ringGeo, ringMat);
        ring.position.copy(pos);
        ring.lookAt(new THREE.Vector3(0, 0, 0));
        globeGroup.add(ring);
      }
    });

    // 5. Great Circle Arc Connections
    const createCurvedArc = (
      startLat: number,
      startLon: number,
      endLat: number,
      endLon: number,
      color: number = 0x00e5ff
    ) => {
      const start = latLongToVector3(startLat, startLon, radius);
      const end = latLongToVector3(endLat, endLon, radius);

      const mid = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5);
      const distance = start.distanceTo(end);
      mid.normalize().multiplyScalar(radius + distance * 0.28);

      const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
      const curvePoints = curve.getPoints(50);
      const arcGeo = new THREE.BufferGeometry().setFromPoints(curvePoints);
      const arcMat = new THREE.LineBasicMaterial({
        color,
        transparent: true,
        opacity: 0.55,
      });
      return new THREE.Line(arcGeo, arcMat);
    };

    // Connections from Nashik HQ to global relays
    globeGroup.add(createCurvedArc(19.9975, 73.7898, 51.5074, -0.1278, 0x00e5ff));
    globeGroup.add(createCurvedArc(19.9975, 73.7898, 50.1109, 8.6821, 0x00e5ff));
    globeGroup.add(createCurvedArc(19.9975, 73.7898, 35.6762, 139.6503, 0x20bfa9));
    globeGroup.add(createCurvedArc(19.9975, 73.7898, 40.7128, -74.006, 0xffa800));
    globeGroup.add(createCurvedArc(19.9975, 73.7898, 1.3521, 103.8198, 0x00ff88));

    // 6. Interactive Drag & Auto Rotation Controls
    let isMouseDown = false;
    let prevMouseX = 0;
    let prevMouseY = 0;
    let rotSpeedX = 0;
    let rotSpeedY = 0;

    const domElement = renderer.domElement;

    const handleMouseDown = (e: MouseEvent) => {
      isMouseDown = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isMouseDown) return;
      const deltaX = e.clientX - prevMouseX;
      const deltaY = e.clientY - prevMouseY;
      rotSpeedX = deltaX * 0.005;
      rotSpeedY = deltaY * 0.005;
      globeGroup.rotation.y += rotSpeedX;
      globeGroup.rotation.x += rotSpeedY;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const handleMouseUp = () => {
      isMouseDown = false;
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isMouseDown = true;
        prevMouseX = e.touches[0].clientX;
        prevMouseY = e.touches[0].clientY;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isMouseDown || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - prevMouseX;
      const deltaY = e.touches[0].clientY - prevMouseY;
      rotSpeedX = deltaX * 0.005;
      rotSpeedY = deltaY * 0.005;
      globeGroup.rotation.y += rotSpeedX;
      globeGroup.rotation.x += rotSpeedY;
      prevMouseX = e.touches[0].clientX;
      prevMouseY = e.touches[0].clientY;
    };

    const handleTouchEnd = () => {
      isMouseDown = false;
    };

    domElement.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    domElement.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animId: number;
    let isVisible = true;
    const clock = new THREE.Clock();

    const animate = () => {
      if (!isVisible) return;
      const delta = clock.getDelta();

      if (!isMouseDown) {
        globeGroup.rotation.y += 0.004 + rotSpeedX;
        globeGroup.rotation.x += rotSpeedY;
        rotSpeedX *= 0.95;
        rotSpeedY *= 0.95;
      }

      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible) {
          cancelAnimationFrame(animId);
          animId = requestAnimationFrame(animate);
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(container);
    animate();

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animId);
      window.removeEventListener("theme-change", handleThemeChange);
      window.removeEventListener("resize", handleResize);
      domElement.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      domElement.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      className={`relative w-full rounded-3xl border backdrop-blur-2xl p-6 md:p-10 shadow-2xl overflow-hidden group transition-all duration-300 ${
        isDark
          ? "bg-black/60 border-white/10"
          : "bg-white/95 border-slate-200 shadow-xl shadow-slate-900/5"
      }`}
    >
      {/* Background radial highlight */}
      <div
        className={`absolute inset-0 pointer-events-none transition-colors duration-300 ${
          isDark
            ? "bg-radial from-cyan-950/20 via-transparent to-transparent"
            : "bg-radial from-cyan-500/10 via-transparent to-transparent"
        }`}
      />

      {/* Header Info */}
      <div
        className={`flex flex-col md:flex-row md:items-center justify-between gap-4 border-b pb-6 mb-6 relative z-10 transition-colors duration-300 ${
          isDark ? "border-white/10" : "border-slate-200"
        }`}
      >
        <div>
          <div
            className={`flex items-center gap-2 font-mono text-xs uppercase tracking-widest mb-1 ${
              isDark ? "text-cyan-400" : "text-cyan-700 font-semibold"
            }`}
          >
            <Radio size={14} className="animate-pulse" />
            <span>GLOBAL THREAT SURVEILLANCE &amp; TELEMETRY</span>
          </div>
          <h3
            className={`font-headline text-2xl md:text-3xl uppercase tracking-wider transition-colors duration-300 ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            3D SECURITY SURVEILLANCE GRID
          </h3>
        </div>

        <div className="flex items-center gap-3">
          <div
            className={`px-3.5 py-1.5 rounded-full font-mono text-xs flex items-center gap-2 border ${
              isDark
                ? "bg-emerald-950/50 border-emerald-500/40 text-emerald-400"
                : "bg-emerald-50 border-emerald-300 text-emerald-800 font-semibold"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>PRIMARY SOC NODE: NASHIK</span>
          </div>
          <div
            className={`hidden sm:block px-3.5 py-1.5 rounded-full font-mono text-xs border ${
              isDark
                ? "bg-white/5 border-white/10 text-white/70"
                : "bg-slate-100 border-slate-200 text-slate-700 font-medium"
            }`}
          >
            LATENCY: 14ms
          </div>
        </div>
      </div>

      {/* Main Grid: Globe on Left, Live Telemetry Cards on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        
        {/* 3D WebGL Canvas */}
        <div className="lg:col-span-7 relative flex items-center justify-center">
          <div
            ref={mountRef}
            className="w-full aspect-square max-w-[580px] cursor-grab active:cursor-grabbing relative flex items-center justify-center"
          />

          {/* Touch/Drag Overlay Hint */}
          <div
            className={`absolute bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase pointer-events-none whitespace-nowrap border shadow-sm ${
              isDark
                ? "bg-black/75 border-white/15 text-white/60"
                : "bg-white/90 border-slate-300 text-slate-600 font-medium shadow-md shadow-slate-900/5"
            }`}
          >
            INTERACTIVE 3D ORBIT · DRAG TO ROTATE GLOBE
          </div>
        </div>

        {/* Live Security Nodes List */}
        <div className="lg:col-span-5 space-y-4">
          <div
            className={`p-4 rounded-2xl border backdrop-blur-md transition-all duration-300 ${
              isDark
                ? "bg-white/[0.03] border-cyan-400/30"
                : "bg-white border-cyan-500/25 shadow-md shadow-slate-900/5"
            }`}
          >
            <div className="flex items-center justify-between text-xs font-mono uppercase mb-2">
              <span
                className={`flex items-center gap-1.5 font-bold ${
                  isDark ? "text-cyan-400" : "text-cyan-700"
                }`}
              >
                <Shield size={14} />
                COMMAND HEADQUARTERS
              </span>
              <span className={isDark ? "text-emerald-400" : "text-emerald-700 font-semibold"}>
                100% SECURE
              </span>
            </div>
            <div
              className={`text-lg font-headline uppercase tracking-wider transition-colors duration-300 ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              {activeNode.city}
            </div>
            <div className={`text-xs font-mono mt-1 ${isDark ? "text-white/60" : "text-slate-500"}`}>
              COORDINATES: {activeNode.coord}
            </div>
            <div
              className={`mt-3 pt-3 border-t flex items-center justify-between text-xs font-mono transition-colors duration-300 ${
                isDark ? "border-white/10 text-white/70" : "border-slate-200 text-slate-600"
              }`}
            >
              <span>STATUS:</span>
              <span className={`font-semibold ${isDark ? "text-emerald-400" : "text-emerald-700"}`}>
                {activeNode.status}
              </span>
            </div>
          </div>

          <div
            className={`p-4 rounded-2xl border space-y-2.5 transition-all duration-300 ${
              isDark ? "bg-black/40 border-white/10" : "bg-slate-50/80 border-slate-200"
            }`}
          >
            <div className={`text-xs font-mono uppercase tracking-wider mb-2 ${isDark ? "text-white/50" : "text-slate-500"}`}>
              Global Correlated Telemetry Streams
            </div>

            {[
              { node: "London Gateway", ping: "42ms", enc: "AES-256", status: "Active" },
              { node: "Frankfurt SIEM Relay", ping: "55ms", enc: "WireGuard", status: "Active" },
              { node: "Tokyo Threat Sensor", ping: "68ms", enc: "TLS 1.3", status: "Active" },
              { node: "New York Edge", ping: "89ms", enc: "IPsec Tunnel", status: "Active" },
            ].map((stream) => (
              <div
                key={stream.node}
                className={`flex items-center justify-between p-2 rounded-lg border text-xs font-mono transition-all duration-200 ${
                  isDark
                    ? "bg-white/[0.02] border-white/5"
                    : "bg-white border-slate-200 text-slate-800 shadow-xs"
                }`}
              >
                <div className={`flex items-center gap-2 ${isDark ? "text-white/90" : "text-slate-800 font-medium"}`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${isDark ? "bg-cyan-400" : "bg-cyan-600"}`} />
                  <span>{stream.node}</span>
                </div>
                <div className={`flex items-center gap-3 ${isDark ? "text-white/50" : "text-slate-500"}`}>
                  <span>{stream.enc}</span>
                  <span className={`font-semibold ${isDark ? "text-cyan-300" : "text-cyan-700"}`}>
                    {stream.ping}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div
            className={`p-3 rounded-xl border text-xs font-sans leading-relaxed transition-all duration-300 ${
              isDark
                ? "bg-cyan-950/20 border-cyan-500/20 text-cyan-200/80"
                : "bg-cyan-50/80 border-cyan-200 text-cyan-900"
            }`}
          >
            Real-time defensive surveillance correlating multi-zone attack vectors and establishing synchronized zero-trust perimeter enforcement.
          </div>
        </div>

      </div>

    </div>
  );
};

export default CyberGlobe3D;
