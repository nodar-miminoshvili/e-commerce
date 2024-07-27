'use client';

import { useEffect } from 'react';

const Lampsobserver = () => {
  useEffect(() => {
    const showcase = document.querySelector('.showcaseWrapper');
    const options: IntersectionObserverInit = {
      //   rootMargin: '150px 0px 0px 200px',
      threshold: 0.75,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        // console.log(entry);
        if (showcase && entry.isIntersecting) {
          showcase.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    }, options);

    showcase && observer.observe(showcase);

    return () => {
      showcase && observer.unobserve(showcase!);
    };
  }, []);
  return null;
};

export default Lampsobserver;
