const FreeTime = () => (
  <div className="bg-[#111] text-white p-6 md:p-10 rounded-lg shadow-2xl border-4 border-pink-500 max-w-4xl mx-auto font-bold relative overflow-hidden">

    <div className="absolute top-[-20px] right-[-20px] text-6xl rotate-[15deg] text-pink-600 opacity-30 pointer-events-none select-none">
      🧊
    </div>

    <h2 className="text-4xl md:text-5xl text-yellow-300 mb-6 underline decoration-wavy decoration-pink-500 tracking-wide">
      WHAT I DO WHEN I’M NOT TYPING FURIOUSLY
    </h2>

    <div className="grid md:grid-cols-2 gap-6 text-left">
      <div className="bg-[#222] p-4 border-2 border-yellow-500 rotate-[-2deg] hover:rotate-0 transition-transform duration-300">
        <span className="text-xl text-white">Formula 1 enjoyer</span>
        <p className="text-sm mt-2 text-gray-300">Speed, drama, and technical wizardry. Pure adrenaline.</p>
      </div>

      <div className="bg-[#222] p-4 border-2 border-green-500 rotate-[1deg] hover:rotate-0 transition-transform duration-300">
        <span className="text-xl text-white">Cycling therapist</span>
        <p className="text-sm mt-2 text-gray-300">Cycle away and clear the mind.</p>
      </div>

      <div className="bg-[#222] p-4 border-2 border-purple-500 rotate-[2deg] hover:rotate-0 transition-transform duration-300">
        <span className="text-xl text-white">Trading Card Games</span>
        <p className="text-sm mt-2 text-gray-300">Building decks, flexing rares, and playing with friends</p>
      </div>

      <div className="bg-[#222] p-4 border-2 border-blue-500 rotate-[-1deg] hover:rotate-0 transition-transform duration-300">
        <span className="text-xl text-white">Gym rat</span>
        <p className="text-sm mt-2 text-gray-300">Pick up heavy things. Put them down. Repeat.</p>
      </div>
    </div>

    <p className="mt-6 text-pink-400 italic text-sm text-center">
      Kept alive by gym gains, booster packs, and racing chaos
    </p>
  </div>
);

export default FreeTime;
