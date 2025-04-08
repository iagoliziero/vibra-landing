// components/ScrollGsap.jsx
import {useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollRightToLeft({ children }) {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const el = sectionRef.current;

    gsap.fromTo(
      el,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

  }, []);

  return (
    <div ref={sectionRef} className="w-full">
      {children}
    </div>
  );
}
