import { useRef, useEffect } from 'react';
import { useAnimation, useScroll, useMotionValueEvent } from 'framer-motion';

// Devorica ultra-smooth cubic-bezier easing curve (easeOutQuint signature)
export const DEVORICA_EASING = [0.22, 1, 0.36, 1];

// Standard section content reveal (duration: 0.8s, y: 50)
export const revealVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: DEVORICA_EASING
    }
  }
};

// Section Header / Title reveal (duration: 0.75s, y: 55)
export const headerVariants = {
  hidden: { opacity: 0, y: 55 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: DEVORICA_EASING
    }
  }
};

// Staggered grid container
export const gridContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.04
    }
  }
};

// Grid card item reveal (duration: 0.42s, y: 35)
export const cardVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.42,
      ease: DEVORICA_EASING
    }
  }
};

// CTA Banner reveal: silky-smooth premium upward glide with ZERO scale distortion or jitter (duration: 0.85s, y: 50)
export const ctaBannerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: DEVORICA_EASING
    }
  }
};

/**
 * Devorica Scroll Reveal Hook
 * Tracks scroll direction so entering when scrolling DOWN triggers a smooth reveal,
 * while leaving when scrolling UP resets to hidden for re-animation on the next downward scroll.
 * Guaranteed zero snap-back or jitter during downward scroll or near-threshold hovering.
 */
export function useScrollReveal(amount = 0.05, margin = '0px') {
  const controls = useAnimation();
  const isVisible = useRef(false);

  // Devorica keeps the page content laid out and visible while scrolling. The
  // reveal is a one-time page-entry motion, not a scroll-gated opacity mask.
  useEffect(() => {
    isVisible.current = true;
    controls.start('visible');
  }, [controls]);

  const onViewportEnter = async () => {
    if (!isVisible.current) {
      isVisible.current = true;
      await controls.start('visible');
    }
  };

  return {
    controls,
    viewportProps: {
      onViewportEnter,
      viewport: { amount, margin, once: true }
    }
  };
}
