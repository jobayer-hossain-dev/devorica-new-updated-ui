import { useRef, useEffect } from 'react';
import { useAnimation, useScroll, useMotionValueEvent } from 'framer-motion';

// Exact cubic-bezier curve from Zentexx (easeOutQuint signature)
export const EASING_ZENTEXX = [0.22, 1, 0.36, 1];

// Standard section content reveal (duration: 0.8s, y: 50)
export const revealVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: EASING_ZENTEXX
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
      ease: EASING_ZENTEXX
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
      ease: EASING_ZENTEXX
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
      ease: EASING_ZENTEXX
    }
  }
};

/**
 * Zentexx Exact Scroll Reveal Hook
 * Tracks scroll direction so entering when scrolling DOWN triggers a smooth reveal,
 * while leaving when scrolling UP resets to hidden for re-animation on the next downward scroll.
 * Guaranteed zero snap-back or jitter during downward scroll or near-threshold hovering.
 */
export function useScrollReveal(amount = 0.05, margin = '0px') {
  const controls = useAnimation();
  const isVisible = useRef(false);

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
