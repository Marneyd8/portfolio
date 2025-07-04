import { useEffect, useState } from "react";
import confetti from "canvas-confetti";

const totalSegments = 21;
const segmentWidth = 12;
const segmentMargin = 4;

const School = () => {
  const ingStart = new Date("2025-09-01");
  const ingEnd = new Date("2027-07-01");
  const now = new Date();

  const calcProgress = (start, end) => {
    const total = end - start;
    const elapsed = now - start;
    return Math.min(Math.max(elapsed / total, 0), 1);
  };

  const ingProgress = calcProgress(ingStart, ingEnd);
  const ingTargetSegments = Math.round(ingProgress * totalSegments);
  const [ingSegmentsFilled, setIngSegmentsFilled] = useState(0);

  useEffect(() => {
    let animationFrame;

    const animate = () => {
      setIngSegmentsFilled((prev) => {
        if (prev < ingTargetSegments) {
          animationFrame = requestAnimationFrame(animate);
          return prev + 1;
        }
        return prev;
      });
    };
    animate();

    return () => cancelAnimationFrame(animationFrame);
  }, [ingTargetSegments]);

  // Helper to render pills
  const renderPills = (filledCount) =>
    [...Array(totalSegments)].map((_, i) => (
      <div
        key={i}
        className={`inline-block h-5 rounded-full border-2 border-gray-600 ${i < filledCount ? "bg-green-400" : "bg-gray-700"
          }`}
        style={{
          width: segmentWidth,
          marginRight: i === totalSegments - 1 ? 0 : segmentMargin,
          transition: "background-color 0.3s ease",
        }}
      />
    ));

  // Confetti trigger
  const throwConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-lg"
  style={{ fontFamily: "'Press Start 2P', cursive" }}
>

      <h2 className="text-2xl mb-4 border-b-2 border-green-400 pb-2 select-none">
        Education
      </h2>

      <div className="mb-8">
        <h3 className="text-xl font-bold text-green-400 select-none">
          Faculty of Informatics, Masaryk University, BRNO
        </h3>

        {/* Bachelor’s Degree */}
        <div className="mt-4">
          <div className="mb-1 yellow">
            <strong>Bachelor’s Degree (Bc.)</strong> in Programming and Development
          </div>
          <div className="text-xs italic text-gray-400 mb-2 select-none">
            2022 - 2025
          </div>

          <div>{renderPills(totalSegments)}</div>

          <div className="mt-1 select-none flex items-center gap-3">
            <div className="text-green-400 font-bold text-xs pr-4">Completed ✔</div>
            <button
              onClick={throwConfetti}
              type="button"
              className="px-3 py-1 font-bold rounded select-none text-xs"
              style={{
                background: "linear-gradient(145deg, #FFD700, #B8860B)",
                color: "#4B3700",
                boxShadow: "0 4px 6px #9b7500, inset 0 2px 0 #fff8b0",
                border: "1px solid #B8860B",
                textShadow: "0 1px 0 #FFE066",
                cursor: "pointer",
                userSelect: "none",
                transition: "all 0.2s ease",
              }}
              onMouseDown={e => (e.currentTarget.style.transform = "translateY(2px)")}
              onMouseUp={e => (e.currentTarget.style.transform = "translateY(0)")}
              onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}
            >
              Congrats ME🎉
            </button>
          </div>
        </div>


        {/* Master’s Degree */}
        <div className="mt-8">
          <div className="mb-1">
            <strong>Master’s Degree (Ing.)</strong> in Software Engineering
          </div>
          <div className="text-xs italic text-gray-400 mb-2 select-none">
            2025 - 2027 (Estimated)
          </div>

          <div>{renderPills(ingSegmentsFilled)}</div>
          <p className="text-xs mt-1 select-none">
            {Math.round((ingSegmentsFilled / totalSegments) * 100)}% complete
          </p>
        </div>
      </div>
    </div>
  );
};

export default School;
