import { useState, useEffect } from 'react';

type NavbarItem = {
  title: string;
  path: string;
};

export const useScrollSpy = (items: NavbarItem[]) => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = items.map(item => document.querySelector(item.path));
      let currentSection = '';

      sections.forEach((section) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = section.id;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Ejecutar una vez al montar

    return () => window.removeEventListener('scroll', handleScroll);
  }, [items]);

  return activeSection;
};
