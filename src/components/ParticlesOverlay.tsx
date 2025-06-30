import { useRef, useEffect } from "react";

const NUM_PARTICLES = 100;
const PARTICLE_RADIUS = 2;
const SPEED = 0.2;
const DRIFT_AMOUNT = 0.009;
const DAMPING = 0.995;
const CONNECTION_DISTANCE = 120;
const MOUSE_REPEL_RADIUS = 100;

const ParticlesOverlay = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });

  const particles = useRef(
    Array.from({ length: NUM_PARTICLES }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      dx: (Math.random() - 0.5) * SPEED,
      dy: (Math.random() - 0.5) * SPEED,
      pulse: Math.random() * 0.5 + 0.75,
    }))
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let p of particles.current) {
        // Passive random drift
        p.dx += (Math.random() - 0.5) * DRIFT_AMOUNT;
        p.dy += (Math.random() - 0.5) * DRIFT_AMOUNT;

        // Retract from mouse
        const dx = p.x - mouseRef.current.x;
        const dy = p.y - mouseRef.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MOUSE_REPEL_RADIUS) {
          const force = (MOUSE_REPEL_RADIUS - dist) / MOUSE_REPEL_RADIUS;
          const repelStrength = 0.5;
          p.dx += (dx / dist) * force * repelStrength;
          p.dy += (dy / dist) * force * repelStrength;
        }

        // Move and apply damping
        p.x += p.dx;
        p.y += p.dy;
        p.dx *= DAMPING;
        p.dy *= DAMPING;

        // Bounce off edges
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

        // Draw particle with glow
        const pulse = Math.sin(Date.now() * 0.002 + p.x + p.y) * 0.3 + p.pulse;
        const velocity = Math.sqrt(p.dx * p.dx + p.dy * p.dy);
        const glow = Math.min(velocity * 50, 1);
        const hue = (Date.now() / 20 + p.x + p.y) % 360;

        ctx.beginPath();
        ctx.arc(p.x, p.y, PARTICLE_RADIUS * pulse, 0, Math.PI * 2);
        ctx.shadowBlur = 15 * glow;
        ctx.shadowColor = `hsl(${hue}, 100%, 70%)`;
        ctx.fillStyle = `hsl(${hue}, 100%, 70%)`;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Connect particles with lines
      for (let i = 0; i < particles.current.length; i++) {
        const a = particles.current[i];
        for (let j = i + 1; j < particles.current.length; j++) {
          const b = particles.current[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DISTANCE) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(0, 255, 255, ${1 - dist / CONNECTION_DISTANCE})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Lines to 3 closest to mouse
      const sorted = [...particles.current].sort(
        (a, b) =>
          (a.x - mouseRef.current.x) ** 2 + (a.y - mouseRef.current.y) ** 2 -
          ((b.x - mouseRef.current.x) ** 2 + (b.y - mouseRef.current.y) ** 2)
      );

      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.moveTo(sorted[i].x, sorted[i].y);
        ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
        ctx.strokeStyle = "rgba(255, 255, 255, 0.7)";
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      requestAnimationFrame(draw);
    };

    requestAnimationFrame(draw);

    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 100,
        pointerEvents: "none",
        opacity: 0.8,
      }}
    />
  );
};

export default ParticlesOverlay;
