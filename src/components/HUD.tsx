import { useState, useEffect } from 'react';

const HUD = () => {
  const [faceState, setFaceState] = useState('center'); // center, left, right, ouch, grin
  const [health] = useState(100);
  const [ammo, setAmmo] = useState(50);
  const [armor] = useState(0);
  const [selectedWeapon, setSelectedWeapon] = useState(3); // Default shotgun

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let timeout: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setFaceState('right'); // Looking right/down
      } else if (currentScrollY < lastScrollY) {
        setFaceState('left'); // Looking left/up
      }
      lastScrollY = currentScrollY;

      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setFaceState('center');
      }, 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeout);
    };
  }, []);

  // Weapon Selection & Firing
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = parseInt(e.key);
      if (key >= 1 && key <= 7) {
        setSelectedWeapon(key);
        // Optional: Change cursor based on weapon
        // document.body.style.cursor = ...
      }
    };

    const handleClick = () => {
      setFaceState('grin');
      setAmmo((prev) => Math.max(0, prev - 1));
      setTimeout(() => setFaceState('center'), 500);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('mousedown', handleClick);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('mousedown', handleClick);
    };
  }, []);

  return (
    <div className="fixed bottom-0 left-0 w-full h-24 bg-[#4a4a4a] border-t-4 border-[#2a2a2a] z-40 flex items-center justify-between px-4 font-['Press_Start_2P'] text-[#b45e33] select-none">
      {/* Left Stats */}
      <div className="flex space-x-8">
        <div className="bg-[#2a2a2a] p-2 rounded border-2 border-[#666]">
          <div className="text-xs text-[#888] mb-1">AMMO</div>
          <div className="text-3xl">{ammo}</div>
        </div>
        <div className="bg-[#2a2a2a] p-2 rounded border-2 border-[#666]">
          <div className="text-xs text-[#888] mb-1">HEALTH</div>
          <div className="text-3xl">{health}%</div>
        </div>
      </div>

      {/* Face / Center */}
      <div className="bg-[#2a2a2a] w-20 h-20 border-2 border-[#666] flex items-center justify-center overflow-hidden relative">
        {/* Placeholder for Doom Guy Face */}
        <div className={`w-16 h-16 bg-[#b45e33] transition-transform duration-100 ${
          faceState === 'left' ? '-translate-x-2' : 
          faceState === 'right' ? 'translate-x-2' : 
          faceState === 'grin' ? 'scale-110 bg-red-600' : ''
        }`}>
            {/* Simple CSS Face */}
            <div className="absolute top-4 left-3 w-3 h-3 bg-black"></div>
            <div className="absolute top-4 right-3 w-3 h-3 bg-black"></div>
            <div className="absolute bottom-3 left-4 w-8 h-2 bg-black"></div>
        </div>
      </div>

      {/* Right Stats */}
      <div className="flex space-x-8">
        <div className="bg-[#2a2a2a] p-2 rounded border-2 border-[#666]">
          <div className="text-xs text-[#888] mb-1">ARMOR</div>
          <div className="text-3xl">{armor}%</div>
        </div>
        {/* Weapon Slots */}
        <div className="hidden md:flex space-x-1 items-end pb-2">
            {[2, 3, 4, 5, 6, 7].map(n => (
                <span 
                  key={n} 
                  className={`text-xs px-1 ${selectedWeapon === n ? 'text-[#ffff00] bg-[#b45e33]' : 'text-[#666]'}`}
                >
                  {n}
                </span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default HUD;
