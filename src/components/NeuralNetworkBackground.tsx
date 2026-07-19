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
 * Reliability notes (this must render on every visitor's machine):
 *  - Sizing is driven by a ResizeObserver, not a one-shot measurement, so a
 *    0x0 rect at mount time self-corrects once layout settles.
 *  - The animation always runs. `prefers-reduced-motion` only slows it down
 *    rather than disabling it, so the background is never blank.
 *  - Vector rendering stays sharp at any DPI; a cheap two-pass glow avoids
 *    expensive per-node shadowBlur, and the loop is capped at ~30fps.
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
    const speed = prefersReduced ? 0.35 : 1; // gentler, never fully static

    const CYAN = '0, 229, 255';
    const GREEN = '0, 229, 143';
    const MAX_DIST = 150;
    const MOUSE_DIST = 200;

    let width = 0;
    let height = 0;
    let nodes: Node[] = [];
    let raf = 0;
    let running = false;
    const mouse = { x: -9999, y: -9999, active: false };

    const build = (w: number, h: number) => {
      if (w <= 0 || h <= 0) return false;
      width = w;
      height = h;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const base = (width * height) / 12500;
      const count = Math.round(Math.min(150, Math.max(42, base)) * density);
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.26 * speed,
        vy: (Math.random() - 0.5) * 0.26 * speed,
        green: Math.random() > 0.72,
      }));
      return true;
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distSq = dx * dx + dy * dy;
          if (distSq < MAX_DIST * MAX_DIST) {
            const alpha = (1 - Math.sqrt(distSq) / MAX_DIST) * 0.78;
            ctx.strokeStyle = `rgba(${CYAN}, ${alpha})`;
            ctx.lineWidth = 1.1;
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
            ctx.strokeStyle = `rgba(${GREEN}, ${(1 - Math.sqrt(dmSq) / MOUSE_DIST) * 0.75})`;
            ctx.lineWidth = 1.1;
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
        ctx.arc(n.x, n.y, 3.6, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, 0.22)`;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.7, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, 1)`;
        ctx.fill();
      }
    };

    let last = 0;
    const FRAME_MS = 33; // ~30fps

    const step = (now: number) => {
      if (running) raf = requestAnimationFrame(step);
      if (now - last < FRAME_MS) return;
      last = now;
      if (!nodes.length) return;

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
            n.x += (dx / d) * 0.22 * speed;
            n.y += (dy / d) * 0.22 * speed;
          }
        }
      }
      draw();
    };

    const start = () => {
      if (running) return;
      running = true;
      raf = requestAnimationFrame(step);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    // ResizeObserver drives sizing so a 0x0 rect at mount self-corrects.
    const ro = new ResizeObserver((entries) => {
      const rect = entries[0]?.contentRect;
      const w = rect?.width ?? canvas.clientWidth;
      const h = rect?.height ?? canvas.clientHeight;
      if (build(w, h)) {
        draw();
        start();
      }
    });
    ro.observe(canvas);

    // Fallback in case ResizeObserver fires late or not at all.
    if (build(canvas.clientWidth, canvas.clientHeight)) {
      draw();
      start();
    }

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

    document.addEventListener('visibilitychange', onVisibility);
    if (interactive) {
      window.addEventListener('mousemove', onMove);
      window.addEventListener('mouseleave', onLeave);
    }

    return () => {
      stop();
      ro.disconnect();
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
