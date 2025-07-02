import React from "react";
import "./Work.css"; // import custom css

const jobs = [
  {
    title: "Junior C# Developer",
    company: "Amsys\u200c",
    period: "09/2024 - Present",
    details: [
      "Developing and maintaining WinForms applications for call center information system and attendance terminal.",
    ],
  },
  {
    title: "IT Support Technician",
    company: "Amsys",
    period: "01/2024 - 08/2024",
    details: [
      "Scripting + Automation (Python, Kotlin)",
      "Creating and running SQL Queries in PostgreSQL Docker - Container Management",
    ],
  },
];

const Work = () => {
  const renderBlinkingDots = () => {
    const dots = [];
    for (let i = 0; i < 10; i++) {
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      dots.push(
        <span
          key={i}
          className="blink-dot"
          style={{ top: `${top}%`, left: `${left}%` }}
          aria-hidden="true"
        >
          ░
        </span>
      );
    }
    return dots;
  };

  return (
    <div className="terminal-container max-w-3xl bg-[#001a00] text-[#39ff14] font-mono border-4 border-[#004400] rounded-lg p-8 relative overflow-hidden select-none shadow-[inset_0_0_30px_#004400,0_0_20px_#00ff00aa] flex flex-col gap-4">
      <h2 className="terminal-header text-4xl font-black uppercase tracking-widest text-center select-text drop-shadow-glow">
        Work Experience
      </h2>

      {/* Console prompt */}
      <div
        className="console-container flex items-start gap-2 text-base select-none"
        aria-label="Future console"
      >
        <span className="prompt-symbol font-extrabold mt-1 drop-shadow-glow">$</span>
        <span className="blinking-cursor w-3 h-6 rounded-sm bg-[#39ff14] animate-blinkCursor shadow-cursorGlow" />
      </div>

      <ul className="jobs-list list-none p-0 m-0 text-base leading-relaxed select-text">
        {jobs.map((job, i) => (
          <li key={i} className="job-item mb-12 relative cursor-default">
        <div className="job-title font-extrabold text-base border-l-4 border-[#39ff14] pl-4 mb-3 text-[#7fff7f] select-text relative transition-colors duration-300 hover:text-[#aaffaa] hover:drop-shadow-glow">
          {job.title}{" "}
          <span className="at-text font-medium text-[#339933]">at</span>{" "}
          <strong>{job.company}</strong>
          <br />
          <em className="text-base text-[#339933]">({job.period})</em>
        </div>
        <ul className="job-details list-disc list-inside text-[#66ff66cc] text-sm pl-4 select-text">
          {job.details.map((detail, idx) => (
            <li key={idx} className="mb-2 relative">
              {detail}
            </li>
          ))}
        </ul>
      </li>

        ))}
      </ul>

      <div className="blinking-dots-wrapper pointer-events-none overflow-visible z-10 absolute inset-0 select-none">
        {renderBlinkingDots()}
      </div>
    </div>
  );
};

export default Work;
