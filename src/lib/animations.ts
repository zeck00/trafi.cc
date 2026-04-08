import type { Variants, Transition } from "framer-motion";

// Custom easing curves
const easeOutExpo = [0.16, 1, 0.3, 1] as const;
const easeOutQuart = [0.25, 1, 0.5, 1] as const;

// Step flow transitions (horizontal slide)
export const stepVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "80%" : "-80%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? "-80%" : "80%",
    opacity: 0,
  }),
};

export const stepTransition: Transition = {
  type: "tween",
  duration: 0.35,
  ease: [...easeOutExpo],
};

// Stagger containers (platform chips, interest tags, result cards)
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.04, delayChildren: 0.05 },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.3, ease: [...easeOutQuart] },
  },
};

// Big number reveal (total, lifetime)
export const totalRevealVariants: Variants = {
  hidden: { opacity: 0, scale: 0.85, filter: "blur(12px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [...easeOutExpo] },
  },
};

// Result cards slide in from right
export const cardSlideIn: Variants = {
  hidden: { opacity: 0, x: 40, scale: 0.97 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.35, ease: [...easeOutQuart] },
  },
};

// Generic fade + rise
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [...easeOutQuart] },
  },
};

// Price tag sticker "print" effect
export const stickerPrint: Variants = {
  hidden: { opacity: 0, scaleY: 0 },
  visible: {
    opacity: 1,
    scaleY: 1,
    transition: { duration: 0.6, ease: [...easeOutExpo], delay: 0.15 },
  },
};

// For prefers-reduced-motion
export const reducedMotionTransition: Transition = {
  duration: 0,
};
