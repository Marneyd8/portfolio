import "./Intro.css";

const Intro = () => (
  <div
    className="max-w-xl mx-auto p-5 border-4 border-black shadow-[6px_6px_0px_#000] rounded-md text-black"
    style={{
      fontFamily: "'Press Start 2P', cursive",
      backgroundImage:
        "repeating-linear-gradient(135deg, #1a1a1a 0px, #2c2c2c 10px, #1a1a1a 20px)",
      backgroundColor: "#111",
      color: "#0ff",
      borderRadius: "12px",
    }}
  >
    <div className="space-y-4 text-base leading-relaxed select-none">
      <p>
        Currently studying{" "}
        <span className="neon cyan pulseSlow">Ing.</span> in{" "}
        <span className="neon pink scaleUpSlow">Design</span> and{" "}
        <span className="neon orange scaleDownSlow">Development</span> of Software Systems at{" "}
        <span className="neon yellow flickerSlow">MUNI FI</span>.
      </p>
      <p>
        Want to learn more about{" "}
        <span className="neon green flickerSlow">web development</span> and working toward a{" "}
        <span className="neon purple pulseSlow">full-stack</span> role.
      </p>
      <p>
        Combining <span className="neon blue scaleUpSlow">React</span> on the frontend with{" "}
        <span className="neon red flickerSlow">C#/.NET</span> on the backend.
      </p>
    </div>
  </div>
);

export default Intro;
