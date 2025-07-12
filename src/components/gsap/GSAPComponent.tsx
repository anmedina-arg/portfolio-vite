import { useEffect, useRef } from 'react';
import './gsapcomponent.css';
import { gsap } from 'gsap';

//TODO - hacer lo mismo con useGSAP de react!

export const GSAPComponent = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(ref.current, {
      opacity: 1,
      width: 50,
      x: 200,
      duration: 1,
    });
  }, []);

  return <div className="gsap-box" ref={ref}></div>;
};

export default GSAPComponent;
