import React, { useEffect, useState } from 'react';

const SIZE = 140;
const STROKE_WIDTH = 10;
const RADIUS = (SIZE - STROKE_WIDTH) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

// Color tiers
const getColor = (score, darkMode) => {
  if (darkMode) {
    // Brighter colors for dark mode
    if (score >= 80) return 'stroke-green-400';
    if (score >= 60) return 'stroke-blue-300';
    return 'stroke-orange-300';
  } else {
    // Regular colors
    if (score >= 80) return 'stroke-green-400';
    if (score >= 60) return 'stroke-blue-400';
    return 'stroke-orange-400';
  }
};

export default function ScoreGauge({ score = 0, duration = 1200, darkMode = false }) {
  // duration: in ms
  const [animatedScore, setAnimatedScore] = useState(0);

  useEffect(() => {
    let frame;
    let start;
    const target = Math.max(0, Math.min(score, 100));
    const animate = (now) => {
      if (!start) start = now;
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 2); // ease-out
      setAnimatedScore(Math.round(target * eased));
      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      } else {
        setAnimatedScore(target);
      }
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [score, duration]);

  const progress = animatedScore / 100;
  const offset = CIRCUMFERENCE * (1 - progress);

  return (
    <div className="flex flex-col items-center justify-center select-none">
      <svg
        width={SIZE}
        height={SIZE}
        aria-label={`Security Score: ${animatedScore} out of 100`}
        className="block"
      >
        {/* Background circle */}
        <circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          fill="none"
          stroke={darkMode ? "#374151" : "#e5e7eb"}
          strokeWidth={STROKE_WIDTH}
        />
        {/* Animated arc */}
        <circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          fill="none"
          strokeLinecap="round"
          className={`transition-colors duration-300 ${getColor(animatedScore, darkMode)}`}
          strokeWidth={STROKE_WIDTH}
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={offset}
          style={{
            transition: 'stroke 0.3s',
          }}
        />
        {/* Score number */}
        <text
          x="50%"
          y="52%"
          textAnchor="middle"
          fontSize="2rem"
          dy=".3em"
          fontWeight="bold"
          fill={darkMode ? "#ffffff" : "#0f172a"}
        >
          {animatedScore}
        </text>
      </svg>
      <span className={`mt-2 text-sm font-semibold ${darkMode ? 'text-white' : 'text-slate-600'}`} aria-live="polite">
        Security Score
      </span>
    </div>
  );
}