import { ReactNode } from 'react';

import React, { useRef } from 'react';
import { gsap } from 'gsap';

type TiltEffectComponentProps = {
  children: ReactNode;
};

const TiltEffectComponent: React.FC<TiltEffectComponentProps> = ({ children }) => {
  const tiltRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!tiltRef.current) return;

    const { clientX, clientY } = event;
    const { offsetWidth, offsetHeight } = tiltRef.current;
    const xPos = clientX / offsetWidth - 0.5;
    const yPos = clientY / offsetHeight - 0.5;

    gsap.to(tiltRef.current, {
      duration: 0.6,
      rotationY: 10 * xPos,
      rotationX: -10 * yPos,
      ease: 'power1.out',
      transformPerspective: 1500,
      transformOrigin: 'center',
    });
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    if (!tiltRef.current) return;

    const touch = event.touches[0];
    const { clientX, clientY } = touch;
    const { offsetWidth, offsetHeight } = tiltRef.current;
    const xPos = clientX / offsetWidth - 0.5;
    const yPos = clientY / offsetHeight - 0.5;

    gsap.to(tiltRef.current, {
      duration: 0.6,
      rotationY: 10 * xPos,
      rotationX: -10 * yPos,
      ease: 'power1.out',
      transformPerspective: 1500,
      transformOrigin: 'center',
    });
  };

  const handleMouseLeave = () => {
    if (!tiltRef.current) return;

    gsap.to(tiltRef.current, {
      duration: 0.6,
      rotationY: 0,
      rotationX: 0,
      ease: 'power1.out',
      transformPerspective: 1500,
      transformOrigin: 'center',
    });
  };

  const handleTouchEnd = () => {
    if (!tiltRef.current) return;

    gsap.to(tiltRef.current, {
      duration: 0.6,
      rotationY: 0,
      rotationX: 0,
      ease: 'power1.out',
      transformPerspective: 1500,
      transformOrigin: 'center',
    });
  };

  return (
    <div
      className="containerTilt"
      ref={tiltRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {children}
    </div>
  );
};

export default TiltEffectComponent;
