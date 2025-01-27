import { useEffect, useState } from "react";

const EasterEgg = () => {
  const [isActivated, setIsActivated] = useState(false);
  const cheatCode = ["i", "d", "d", "q", "d"];
  const [inputSequence, setInputSequence] = useState<string[]>([]);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();

      // Update the input sequence and keep only the last `cheatCode.length` keys
      const newSequence = [...inputSequence, key].slice(-cheatCode.length);
      setInputSequence(newSequence);

      // Check if the sequence matches the cheat code
      if (newSequence.join("") === cheatCode.join("")) {
        setIsActivated(true);
        playSound();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [inputSequence]);

  const playSound = () => {
    const newAudio = new Audio("/assets/music/sweet-little-dead-bunny.ogg");
    setAudio(newAudio);
    newAudio.play();
  };

  const stopSound = () => {
    if (audio) {
      audio.pause();
      audio.currentTime = 0; // Reset playback
    }
  };

  const handleClose = () => {
    stopSound();
    setIsActivated(false);
  };

  if (isActivated) {
    return (
      <div className="fixed inset-0 bg-black/80 text-white flex flex-col justify-center items-center z-50">
        <img
          src="/assets/images/daisy.jpg"
          alt="Daisy the Rabbit"
          className="w-64 h-64 mb-4 animate-bounce"
        />
        <h1 className="text-4xl font-bold mb-4 text-yellow-400">DAISY APPROVES!</h1>
        <p className="text-lg text-gray-300">You found the Easter egg! 🐇</p>
        <button
          onClick={handleClose}
          className="mt-6 px-6 py-2 bg-red-500 text-white rounded-lg shadow-lg hover:bg-red-600"
        >
          Close
        </button>
      </div>
    );
  }

  return null;
};

export default EasterEgg;