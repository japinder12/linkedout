// CountSlider.tsx
"use client";
import React from "react";

type Props = { isDark: boolean; count: number; setCount: (n: number) => void };

export default function CountSlider({ isDark, count, setCount }: Props) {
  const label = isDark ? "text-slate-300/80" : "text-slate-700/80";
  const track = isDark ? "bg-slate-600/30" : "bg-slate-300/50";
  const halo = isDark ? "rgba(125, 211, 252, 0.18)" : "rgba(59, 130, 246, 0.18)";

  const haloStyle = { "--slider-halo": halo } as React.CSSProperties;

  return (
    <div className="min-w-0" style={haloStyle}>
      <label
        htmlFor="count"
        className={`mb-2 block text-[11px] uppercase tracking-wide font-medium ${label}`}
      >
        How Many Titles
      </label>

      {/* track */}
      <div className={`relative h-2 rounded-full ${track}`}>
        <input
          id="count"
          type="range"
          min={1}
          max={16}
          step={1}
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
          className="absolute inset-0 w-full appearance-none bg-transparent cursor-pointer"
        />
      </div>

      <div className={`mt-2 text-center text-[11px] uppercase tracking-wide font-medium ${label}`}>
        {count} titles
      </div>

      {/* Make the knob white & slightly higher so it's centered on the bar */}
      <style jsx global>{`
        /* WebKit */
        input[type="range"]::-webkit-slider-runnable-track {
          height: 2px; /* slim bar */
          background: transparent; /* we draw the bar with the div */
        }
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          height: 18px;
          width: 18px;
          border-radius: 9999px;
          background: #ffffff; /* white knob */
          border: 2px solid rgba(255, 255, 255, 0.35);
          margin-top: -8px; /* <-- lifts knob to visually center on 2px bar */
          box-shadow: 0 0 0 4px var(--slider-halo, rgba(59, 130, 246, 0.18));
          transition: box-shadow 120ms ease, transform 120ms ease;
        }
        input[type="range"]:hover::-webkit-slider-thumb {
          box-shadow: 0 0 0 6px var(--slider-halo, rgba(59, 130, 246, 0.24));
          transform: translateY(-0.5px);
        }
        input[type="range"]:focus-visible::-webkit-slider-thumb {
          box-shadow: 0 0 0 8px var(--slider-halo, rgba(56, 189, 248, 0.25)),
            0 0 0 3px rgba(56, 189, 248, 0.35); /* subtle focus ring */
        }

        /* Firefox */
        input[type="range"]::-moz-range-track {
          height: 2px;
          background: transparent;
        }
        input[type="range"]::-moz-range-thumb {
          height: 18px;
          width: 18px;
          border-radius: 9999px;
          background: #ffffff;
          border: 2px solid rgba(255, 255, 255, 0.35);
          box-shadow: 0 0 0 5px var(--slider-halo, rgba(59, 130, 246, 0.18));
          transition: box-shadow 120ms ease, transform 120ms ease;
        }
        input[type="range"]:focus-visible::-moz-range-thumb {
          box-shadow: 0 0 0 8px var(--slider-halo, rgba(56, 189, 248, 0.25)),
            0 0 0 3px rgba(56, 189, 248, 0.35);
        }
        input[type="range"]:hover::-moz-range-thumb {
          box-shadow: 0 0 0 6px var(--slider-halo, rgba(59, 130, 246, 0.24));
          transform: translateY(-0.5px);
        }

        /* Edge */
        input[type="range"]::-ms-track {
          height: 2px;
          background: transparent;
          border-color: transparent;
          color: transparent;
        }
        input[type="range"]::-ms-thumb {
          height: 18px;
          width: 18px;
          border-radius: 9999px;
          background: #ffffff;
          border: 2px solid rgba(255, 255, 255, 0.35);
        }
      `}</style>
    </div>
  );
}
