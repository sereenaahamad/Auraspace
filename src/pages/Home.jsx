import { moods } from "../data/moods";

export default function Home({ setMood }) {
  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/video/bg2.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen flex-col justify-start px-4 py-4 text-white sm:px-6 sm:py-6">
        <div className="w-full min-h-[220px] rounded-[2rem] border border-white/15 bg-white/10 px-5 py-8 text-center shadow-2xl backdrop-blur-xl sm:min-h-[260px] sm:px-8 sm:py-12 lg:min-h-[300px] lg:py-14">
          <p className="text-xs uppercase tracking-[0.35em] text-white/70 sm:text-sm">Auraspace</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="bg-gradient-to-r from-white via-white to-cyan-200 bg-clip-text text-transparent">
              Change your mood instantly
            </span>
          </h1>
          <h2 className="mt-3 text-lg font-medium text-white/80 sm:text-2xl md:text-3xl">
            How are you feeling today?
          </h2>
        </div>

        <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-3 py-4 sm:grid-cols-3 sm:gap-4 sm:py-6">

          {moods.map((m) => (
            <div
              key={m.name}
              onClick={() => setMood(m)}
              className="flex h-28 cursor-pointer items-center justify-center rounded-2xl text-lg font-medium transition duration-300 hover:scale-[1.03] backdrop-blur-md sm:h-32 sm:text-xl"
              style={{
                background: `${m.color}CC`,
                boxShadow: "0 10px 40px rgba(0,0,0,0.3)",
              }}
            >
              {m.name}
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}
