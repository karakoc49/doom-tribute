import { useEffect, useState } from "react";

const EasterEgg = () => {
  const [godMode, setGodMode] = useState(false);
  const [noclip, setNoclip] = useState(false);
  const [weaponRain, setWeaponRain] = useState(false);
  
  const [inputSequence, setInputSequence] = useState<string[]>([]);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      // Keep enough history for the longest cheat
      const newSequence = [...inputSequence, key].slice(-6); 
      setInputSequence(newSequence);

      const sequenceStr = newSequence.join("");

      if (sequenceStr.includes("iddqd")) {
        setGodMode(true);
        playSound();
        setInputSequence([]); // Reset to avoid double trigger
      }
      
      if (sequenceStr.includes("idkfa")) {
        triggerWeaponRain();
        setInputSequence([]);
      }

      if (sequenceStr.includes("idclip")) {
        setNoclip(prev => !prev); // Toggle
        setInputSequence([]);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [inputSequence]);

  // Effect for No Clip
  useEffect(() => {
    if (noclip) {
      document.body.style.opacity = "0.5";
      document.body.style.filter = "grayscale(100%)";
    } else {
      document.body.style.opacity = "1";
      document.body.style.filter = "none";
    }
  }, [noclip]);

  const triggerWeaponRain = () => {
    setWeaponRain(true);
    setTimeout(() => setWeaponRain(false), 5000); // Rain for 5 seconds
  };

  const playSound = () => {
    const newAudio = new Audio("/assets/music/sweet-little-dead-bunny.ogg");
    setAudio(newAudio);
    newAudio.play();
  };

  const stopSound = () => {
    if (audio) {
      audio.pause();
      audio.currentTime = 0; 
    }
  };

  const handleCloseGodMode = () => {
    stopSound();
    setGodMode(false);
  };

  return (
    <>
      {/* God Mode Overlay */}
      {godMode && (
        <div className="fixed inset-0 bg-black/80 text-white flex flex-col justify-center items-center z-[100]">
          <img
            src="/assets/images/daisy.jpg"
            alt="Daisy"
            className="max-w-full max-h-[70vh] border-4 border-[#b45e33] shadow-[0_0_20px_#b45e33]"
          />
          <h2 className="text-4xl mt-4 font-bold text-[#b45e33] animate-pulse">
            GOD MODE ACTIVATED
          </h2>
          <p className="mt-2 text-lg">Rest in Peace, Daisy...</p>
          <button
            onClick={handleCloseGodMode}
            className="mt-6 px-6 py-2 bg-[#b45e33] text-white font-bold rounded hover:bg-[#8a4624] transition"
          >
            Close
          </button>
        </div>
      )}

      {/* Weapon Rain Overlay */}
      {weaponRain && (
        <div className="fixed inset-0 pointer-events-none z-[90] overflow-hidden">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute text-4xl animate-fall"
              style={{
                left: `${Math.random() * 100}vw`,
                animationDuration: `${Math.random() * 2 + 1}s`,
                animationDelay: `${Math.random() * 2}s`,
                top: '-50px'
              }}
            >
              {['🔫', '💣', '🔪', '🪓', '🧨'][Math.floor(Math.random() * 5)]}
            </div>
          ))}
          <style>{`
            @keyframes fall {
              to { transform: translateY(110vh) rotate(360deg); }
            }
            .animate-fall {
              animation-name: fall;
              animation-timing-function: linear;
              animation-fill-mode: forwards;
            }
          `}</style>
        </div>
      )}
      
      {/* No Clip Indicator */}
      {noclip && (
        <div className="fixed top-4 right-4 bg-yellow-500 text-black px-2 py-1 font-bold z-[100] animate-pulse">
          NOCLIP ON
        </div>
      )}
    </>
  );
};

export default EasterEgg;