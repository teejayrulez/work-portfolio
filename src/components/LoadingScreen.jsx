import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("")
  const [progress, setProgress] = useState(0)
  const fullText = "Loading Portfolio, Please wait..."

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      setProgress((index / fullText.length) * 100);
      index++;

      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(onComplete, 800)
      }
    }, 60);

    return () => clearInterval(interval);
  }, [onComplete])

  return (
    <div className="fixed inset-0 z-50 bg-[#0a0a0a] text-gray-100 flex flex-col items-center justify-center">
      {/* Decorative rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-96 h-96 border border-blue-500/10 rounded-full animate-spin-slow" />
        <div className="absolute w-72 h-72 border border-red-500/10 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse' }} />
        <div className="absolute w-48 h-48 border border-blue-500/20 rounded-full animate-pulse-slow" />
      </div>

      <div className="relative z-10 flex flex-col items-center px-4">
        <div className="mb-6 text-2xl sm:text-3xl md:text-4xl font-mono font-bold text-center text-gradient">
          {text}
          <span className="animate-blink ml-1 text-blue-400">|</span>
        </div>

        <div className="w-[240px] sm:w-[320px] h-[3px] bg-white/5 rounded-full relative overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 transition-all duration-100 shadow-[0_0_15px_#3b82f6]"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="mt-4 text-xs sm:text-sm text-gray-500 font-mono">
          {Math.round(progress)}%
        </div>
      </div>
    </div>
  );
}