export const animatePath = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 3,
      ease: "easeInOut",
      staggerChildren: 0.4,
      delayChildren: 0.4,
    },
  },
};

export const loadingPath = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 3,
      ease: "easeInOut",
      repeat: 1,
    },
  },
};

export const zoomIn200 = {
  hidden: {
    opacity: 0,
    scale: 1.5,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.2,
    },
  },
};

export const fadeOut200 = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.2,
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};
export const fadeOut700 = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.7,
      staggerChildren: 0.4,
      delayChildren: 0.2,
    },
  },
};

export const animatedLetters = {
  hidden: {
    opacity: 0,
    y: -50,
    rotate: -15,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
      type: "spring",
      dumping: 10,
      stiffness: 40,
    },
  },
};

export const slideShow = {
  hidden: (direction) => {
    return {
      x: direction > 0 ? 200 : -200,
      opacity: 0,
    };
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "ease",
    },
  },
  exit: (direction) => {
    return {
      x: direction > 0 ? -200 : 200,
      opacity: 0,
      transition: {
        type: "ease",
      },
    };
  },
};

export const slideUp = {
  hidden: {
    y: 50,
  },
  visible: {
    y: 0,
    transition: {
      duration: 0.4,
      delay: 0.3,
    },
  },
};
export const slideright = {
  hidden: {
    x: "-100%",
  },
  visible: {
    x: 0,
    transition: {
      duration: 0.4,
      delay: 0.3,
    },
  },
};

export const zoomIn = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.4,
      delayChildren: 0.4,
    },
  },
};

export const slideOut = {
  hidden: {
    x: 0,
  },
  visible: {
    x: "100%",
    transition: {
      duration: 1,
      delay: 0.4,
    },
  },
};

export const hideToggle = {
  hidden: {
    x: "-100%",
    transition: {
      duration: 0.4,
    },
  },
  visible: {
    x: 0,
    transition: {
      duration: 0.4,
    },
  },
};
