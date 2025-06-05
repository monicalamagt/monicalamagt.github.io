import { useEffect, useRef } from 'react';

export const useIntersectionObserver = () => {
  const observerRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '-50% 0px', // Only trigger when card is in the middle 50% of the viewport
      threshold: 0.5
    };

    const handleIntersect = (entries) => {
      entries.forEach(entry => {
        const card = entry.target;
        if (entry.isIntersecting) {
          // Remove active class from all cards
          document.querySelectorAll('.about-me-card').forEach(c => {
            c.classList.remove('active');
          });
          // Add active class to the current card
          card.classList.add('active');
        }
      });
    };

    observerRef.current = new IntersectionObserver(handleIntersect, options);

    // Observe all cards
    document.querySelectorAll('.about-me-card').forEach(card => {
      observerRef.current.observe(card);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);
}; 