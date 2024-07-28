'use client';

import { useEffect } from 'react';

const HeaderObserver = () => {
  useEffect(() => {
    const header = document.querySelector('header');
    const scrollWatcher = document.querySelector('[data-scroll-watcher]');

    const options: IntersectionObserverInit = { rootMargin: '10px 0px 0px 0px' };

    const observer = new IntersectionObserver(entries => {
      header && header.classList.toggle('scrolled', !entries[0].isIntersecting);
    }, options);

    scrollWatcher && observer.observe(scrollWatcher);

    return () => {
      scrollWatcher && observer.unobserve(scrollWatcher);
    };
  }, []);

  return <div data-scroll-watcher="" className=""></div>;
};

export default HeaderObserver;
