import { useEffect, useRef } from 'react';

const WaveBackground = () => {
  const particlesRef = useRef(null);
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    // Particle Logic
    if (particlesRef.current) {
      const isMobile = window.innerWidth < 768;
      const container = particlesRef.current;
      container.innerHTML = '';

      const particleCount = isMobile ? 15 : 30;

      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        const size = Math.random() * (isMobile ? 12 : 20) + 8;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDuration = Math.random() * 15 + 15 + 's';
        particle.style.animationDelay = Math.random() * 5 + 's';
        container.appendChild(particle);
      }
    }

    // Cursor Logic
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      const cursor = cursorRef.current;
      const follower = followerRef.current;

      if (!cursor || !follower) return;

      let mouseX = 0, mouseY = 0;
      let followerX = 0, followerY = 0;
      let animationFrameId;

      const handleMouseMove = (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        if (cursor) {
          cursor.style.left = mouseX + 'px';
          cursor.style.top = mouseY + 'px';
        }
      };

      const animateFollower = () => {
        const dx = mouseX - followerX;
        const dy = mouseY - followerY;
        followerX += dx * 0.15;
        followerY += dy * 0.15;

        if (follower) {
          follower.style.left = followerX + 'px';
          follower.style.top = followerY + 'px';
        }
        animationFrameId = requestAnimationFrame(animateFollower);
      };

      document.addEventListener('mousemove', handleMouseMove);
      animateFollower();

      // Interactive elements hover effect
      const interactiveElements = 'a, button, .event-card, .tier-card, .social-link, .gallery-img, .stat-card, .about-text, .contact-item, .about-card';

      const handleMouseEnter = () => {
        cursor.classList.add('cursor-hover');
        follower.classList.add('cursor-follower-hover');
      };

      const handleMouseLeave = () => {
        cursor.classList.remove('cursor-hover');
        follower.classList.remove('cursor-follower-hover');
      };

      // We need to attach listeners to elements dynamically or delegate
      // Since React renders dynamically, delegation is better or we re-attach on location change.
      // For simplicity, let's use delegation for now or just attach to body and check target?
      // No, let's use a mutation observer or just re-run this logic?
      // Actually, simple event delegation is best.

      const handleMouseOver = (e) => {
        if (e.target.closest(interactiveElements)) {
          handleMouseEnter();
        }
      };

      const handleMouseOut = (e) => {
        if (e.target.closest(interactiveElements)) {
          handleMouseLeave();
        }
      };

      document.addEventListener('mouseover', handleMouseOver);
      document.addEventListener('mouseout', handleMouseOut);

      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseover', handleMouseOver);
        document.removeEventListener('mouseout', handleMouseOut);
        cancelAnimationFrame(animationFrameId);
      };
    }
  }, []);

  return (
    <>
      <div className="wave-background">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
      <div className="particles" ref={particlesRef} aria-hidden="true"></div>
      <div className="cursor" ref={cursorRef} aria-hidden="true"></div>
      <div className="cursor-follower" ref={followerRef} aria-hidden="true"></div>
    </>
  );
};

export default WaveBackground;
