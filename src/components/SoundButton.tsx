import React from 'react';
import useSound from 'use-sound';

// Placeholder sounds - user should replace these
const RELOAD_SOUND = '/assets/music/shotgun-reload.mp3'; // Placeholder
const FIRE_SOUND = '/assets/music/shotgun-fire.mp3'; // Placeholder

interface SoundButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string; // If provided, renders as <a> or Link
  to?: string; // If provided, renders as Link (need to import Link)
}

// Note: Since we are using React Router, we might want to accept 'to' prop and use Link.
// But for simplicity, I'll just make a wrapper that can be used inside Link or as a button.
// Actually, the user asked to add sounds to "Buttonlara (Link bileşenlerine)".
// So I'll make a component that wraps the content and handles the sound.

const SoundButton: React.FC<SoundButtonProps & React.HTMLAttributes<HTMLElement>> = ({ 
  children, 
  className, 
  onClick, 
  onMouseEnter,
  ...props 
}) => {
  // We use 'volume: 0.5' to not be too loud
  const [playHover] = useSound(RELOAD_SOUND, { volume: 0.5, interrupt: true });
  const [playClick] = useSound(FIRE_SOUND, { volume: 0.5 });

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    playHover();
    if (onMouseEnter) onMouseEnter(e);
  };

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    playClick();
    if (onClick) onClick(e);
  };

  return (
    <div 
      className={`inline-block ${className}`}
      onMouseEnter={handleMouseEnter}
      onClick={handleClick}
      {...props}
    >
      {children}
    </div>
  );
};

export default SoundButton;
