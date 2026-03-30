import { useState, useEffect, useCallback } from 'react';
import type { SectionName } from '@/types';

export const useActiveSection = (): SectionName => {
  const [activeSection, setActiveSection] = useState<SectionName>('home');

  const updateActiveSection = useCallback(() => {
    const sections: SectionName[] = [
      'home', 'education', 'skills', 'experience', 
      'projects', 'hobbies', 'contact'
    ];
    
    const scrollPosition = window.scrollY + 100;

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const elementTop = element.offsetTop;
        const elementBottom = elementTop + element.offsetHeight;
        
        if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
          setActiveSection(section);
        }
      }
    });
  }, []);

  useEffect(() => {
    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    return () => window.removeEventListener('scroll', updateActiveSection);
  }, [updateActiveSection]);

  return activeSection;
};