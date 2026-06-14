import { useEffect, useRef, useState } from "react";

export default function Experience({ mood, setMood }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoSrc = mood.video || "/video/bg1.mp4";

  const handlePlay = async () => {
    if (!audioRef.current) {
      return;
    }

    try {
      await audioRef.current.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  };

  const handlePause = () => {
    if (!audioRef.current) {
      return;
    }

    audioRef.current.pause();
    setIsPlaying(false);
  };

  useEffect(() => {
    if (!audioRef.current) {
      return;
    }

    audioRef.current.src = mood.music;
    audioRef.current.load();

    audioRef.current.play()
      .then(() => setIsPlaying(true))
      .catch(() => {
        setIsPlaying(false);
      });
  }, [mood]);

  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute left-0 top-0 h-full w-full object-cover"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/50"></div>

      <audio ref={audioRef} loop preload="auto" />

      <div className="absolute left-4 right-4 top-4 z-10 flex items-center justify-between gap-3 text-white/80 sm:left-6 sm:right-6 sm:top-6">
        <h2 className="text-sm font-medium sm:text-base lg:text-lg">
          {mood.name} Mode
        </h2>

        <button
          onClick={() => setMood(null)}
          className="rounded-xl bg-white/10 px-3 py-2 text-sm backdrop-blur-md sm:px-4 sm:text-base"
        >
          <span className="sm:hidden">Change Mood</span>
          <span className="hidden sm:inline">Change Mood</span>
        </button>
      </div>

      <div className="relative z-10 flex h-44 w-44 items-center justify-center sm:h-56 sm:w-56 lg:h-72 lg:w-72">
        <div className="absolute inset-0 rounded-full bg-white/10 shadow-2xl backdrop-blur-2xl animate-pulse" />
        <span
          className="relative z-10 px-3 text-center text-base font-semibold tracking-wide drop-shadow-[0_1px_10px_rgba(231,224,210,0.1)] sm:text-xl lg:text-2xl"
          style={{ color: "rgba(231, 224, 210, 0.68)" }}
        >
          Focus Here
        </span>
      </div>

      <div className="absolute bottom-4 left-1/2 z-10 flex w-[calc(100%-2rem)] max-w-4xl -translate-x-1/2 items-center justify-between gap-4 rounded-2xl bg-white/10 px-4 py-3 backdrop-blur-xl sm:bottom-6 sm:w-[calc(100%-3rem)] sm:px-6 sm:py-4">
        <button
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/25 sm:h-11 sm:w-11"
          onClick={handlePlay}
          aria-label="Play"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current sm:h-5 sm:w-5" aria-hidden="true">
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>

        <input type="range" className="min-w-0 flex-1" />

        <button
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/25 sm:h-11 sm:w-11"
          onClick={handlePause}
          disabled={!isPlaying}
          aria-label="Pause"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current sm:h-5 sm:w-5" aria-hidden="true">
            <path d="M6 5h4v14H6zm8 0h4v14h-4z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
