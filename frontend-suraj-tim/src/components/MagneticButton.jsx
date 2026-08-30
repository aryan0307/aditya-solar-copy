import { useRef, useState } from 'react';

const MagneticButton = ({ children, className = '', onClick, disabled = false }) => {
  const buttonRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    setPosition({ x: x * 0.3, y: y * 0.3 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <button
      ref={buttonRef}
      className={`relative inline-flex items-center justify-center px-8 py-4 bg-accent text-background font-space font-medium tracking-wider uppercase transition-all duration-300 hover:bg-primary-text hover:text-background disabled:opacity-50 disabled:cursor-not-allowed rounded-luxury ${className}`}
      onClick={onClick}
      disabled={disabled}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: 'transform 0.3s ease-out'
      }}
    >
      {children}
    </button>
  );
};

export default MagneticButton;
