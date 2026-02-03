/** Shared easing and viewport for scroll animations */
export const easeOut = [0.22, 1, 0.36, 1];
export const viewportOnce = { once: true, amount: 0.2 };

/** Fade-up transition config (use with motion initial/animate/transition) */
export const fadeUp = (delay = 0, y = 28) => ({
  initial: { opacity: 0, y },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: easeOut },
});
