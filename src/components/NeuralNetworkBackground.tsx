import { useEffect, useRef } from 'react';

interface NeuralNetworkBackgroundProps {
  className?: string;
  /** overall opacity of the network */
  opacity?: number;
  /** enable subtle cursor interaction */
  interactive?: boolean;
  /** density multiplier — higher = more nodes */
  density?: number;
}

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  green: boolean;
}

/**
 * Crisp, GPU-light "neural network" constellation rendered on a canvas.
 *
 * Vector rendering keeps it perfectly sharp at any resolution / DPI. It is
 * DPR-aware, pauses when the tab is hidden, uses cheap two-pass glow (no
 * expensive per-node shadowBlur) so it stays smooth even at high density, and
 * renders a single static frame for users who prefer reduced motion.
 */
const NeuralNetworkBackground = ({
  className = '',
  opacity = 0.9,
  interactive = true,
  density = 1,
}: NeuralNetworkBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const CYAN = '0, 229, 255';
    const GREEN = '0, 229, 143';
    const MAX_DIST = 138;
    const MOUSE_DIST = 200;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let nodes: Node[] = [];
    let raf = 0;
    let running = false;
    const mouse = { x: -9999, y: -9999, active: false };

    const build = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const base = (width * height) / 12500;
      const count = Math.round(Math.min(150, Math.max(42, base)) * density);
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.26,
        vy: (Math.random() - 0.5) * 0.26,
        green: Math.random() > 0.72,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // connections
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distSq = dx * dx + dy * dy;
          if (distSq < MAX_DIST * MAX_DIST) {
            const alpha = (1 - Math.sqrt(distSq) / MAX_DIST) * 0.55;
            ctx.strokeStyle = `rgba(${CYAN}, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }

        if (interactive && mouse.active) {
          const dxm = a.x - mouse.x;
          const dym = a.y - mouse.y;
          const dmSq = dxm * dxm + dym * dym;
          if (dmSq < MOUSE_DIST * MOUSE_DIST) {
            ctx.strokeStyle = `rgba(${GREEN}, ${(1 - Math.sqrt(dmSq) / MOUSE_DIST) * 0.6})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      }

      // nodes — cheap two-pass glow (no shadowBlur)
      for (const n of nodes) {
        const color = n.green ? GREEN : CYAN;
        ctx.beginPath();
        ctx.arc(n.x, n.y, 3.4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, 0.16)`;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, 0.95)`;
        ctx.fill();
      }
    };

    let last = 0;
    const FRAME_MS = 33; // ~30fps — plenty for a slow-drifting network, ~half the CPU

    const step = (now: number) => {
      if (running) raf = requestAnimationFrame(step);
      if (now - last < FRAME_MS) return;
      last = now;

      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;

        if (interactive && mouse.active) {
          const dx = mouse.x - n.x;
          const dy = mouse.y - n.y;
          const d = Math.hypot(dx, dy);
          if (d < MOUSE_DIST && d > 0.001) {
            n.x += (dx / d) * 0.22;
            n.y += (dy / d) * 0.22;
          }
        }
      }
      draw();
    };

    const start = () => {
      if (running || prefersReduced) return;
      running = true;
      raf = requestAnimationFrame(step);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    build();
    if (prefersReduced) draw();
    else start();

    const onResize = () => {
      build();
      if (prefersReduced) draw();
    };
    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };
    const onLeave = () => {
      mouse.active = false;
      mouse.x = -9999;
      mouse.y = -9999;
    };
    const onVisibility = () => {
      if (document.hidden) stop();
      else start();
    };

    window.addEventListener('resize', onResize);
    document.addEventListener('visibilitychange', onVisibility);
    if (interactive) {
      window.addEventListener('mousemove', onMove);
      window.addEventListener('mouseleave', onLeave);
    }

    return () => {
      stop();
      window.removeEventListener('resize', onResize);
      document.removeEventListener('visibilitychange', onVisibility);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onLeave);
    };
  }, [interactive, density]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`absolute inset-0 h-full w-full ${className}`}
      style={{ opacity }}
    />
  );
};

export default NeuralNetworkBackground;
