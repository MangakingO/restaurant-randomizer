"use client"; // Required for interactivity in Next.js App Router

import { useState } from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: ["400", "700"], subsets: ["latin"] });

export default function Home() {
  const [isBitten, setIsBitten] = useState(false);

  const playChompSound = () => {
    const chompSound = new Audio("/chomp.mp3");
    chompSound.volume = 0.8;
    chompSound.play();
  };

  const handleBite = () => {
    if (!isBitten) {
      setIsBitten(true);

      setTimeout(playChompSound, 200);
      setTimeout(playChompSound, 800);
      setTimeout(playChompSound, 1500);
      setTimeout(playChompSound, 1800);
    }
  };

  return (
    <main
      className={`relative flex flex-col items-center justify-center h-screen text-center ${poppins.className}`}
    >
      {/* Background Layers */}
      <div className="absolute inset-0 bg-[#181818] bg-opacity-90">
        {/* AI-Generated Food Background */}
        <div
          className="absolute inset-0 bg-[url('/food-background.jpg')] bg-cover bg-center opacity-30"
          style={{ filter: "blur(2px)" }}
        ></div>

        {/* Grainy Texture Overlay for Depth */}
        <div className="absolute inset-0 bg-[url('/grain-texture.png')] opacity-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* App Title */}
        <h1 className="text-6xl font-bold text-[#F8F9FA] tracking-wide drop-shadow-lg">
          Settle<span className="text-[#D22701]">Bite</span>
        </h1>

        {/* Tagline */}
        <p className="text-lg text-[#A0A0A0] mt-2 italic">
          No more "I don’t know, you pick!"
        </p>

        {/* Bite Animation Button */}
        <button
          onClick={handleBite}
          className={`mt-6 px-8 py-4 bg-[#FF670E] text-white font-semibold text-lg rounded-lg shadow-md
            transition-all duration-[2000ms] ease-in-out
            ${isBitten ? "clip-bite" : "hover:bg-[#D22701] hover:scale-105"}
          `}
        >
          Stop Debating, Start Eating!
        </button>
      </div>

      {/* Bite Effect Animation */}
      <style jsx>{`
        @keyframes biteAnimation {
          0% {
            clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
          }
          30% {
            clip-path: polygon(30% 0%, 100% 0%, 100% 100%, 30% 100%, 20% 80%, 30% 60%, 20% 40%, 30% 20%);
          }
          60% {
            clip-path: polygon(30% 0%, 70% 0%, 80% 20%, 70% 40%, 80% 60%, 70% 80%, 80% 100%, 30% 100%, 20% 80%, 30% 60%, 20% 40%, 30% 20%);
          }
          100% {
            clip-path: polygon(50% 0%, 60% 20%, 50% 40%, 60% 60%, 50% 80%, 60% 100%, 50% 100%, 40% 80%, 50% 60%, 40% 40%, 50% 20%);
            visibility: hidden;
          }
        }

        .clip-bite {
          animation: biteAnimation 2s ease-in-out forwards;
        }
      `}</style>
    </main>
  );
}
