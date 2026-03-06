"use client";

import React, { memo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, Variants } from "framer-motion";
import { useScrollAnimation } from "./hooks/useScrollAnimation";

// TypeScript interfaces
interface HeroSectionProps {
  className?: string;
}

interface AppStoreButtonProps {
  href: string;
  ariaLabel: string;
  children: React.ReactNode;
  className?: string;
}

interface StatItemProps {
  value: string;
  label: string;
  symbol: string;
}

// Animation variants for consistent patterns
const fadeInUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const staggerItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const buttonHoverVariants: Variants = {
  initial: {
    scale: 1,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
  tap: {
    scale: 0.98,
    transition: {
      duration: 0.1,
      ease: "easeOut",
    },
  },
};

const imageVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 40,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.3,
      ease: "easeOut",
    },
  },
};

// Constants for better maintainability
const APP_STORE_CONFIG = {
  href: "#",
  iconSize: "w-7 h-7 md:w-8 md:h-8",
  containerPadding: "px-3 md:px-4",
  buttonPadding: "py-1 md:py-2",
  textSizes: {
    small: "text-[7px] md:text-[9px]",
    large: "text-xs md:text-sm",
  },
  margin: "ml-2",
};

const STATS_CONFIG = [
  { value: "5,000", label: "Active users", symbol: "+" },
  { value: "95", label: "On-Time Delivery Rate", symbol: "%" },
  { value: "100", label: "Parcel Shops Nationwide", symbol: "+" },
];

const HEADING_CONFIG = {
  desktop: {
    size: "text-[28px] sm:text-[36px] lg:text-4xl",
    lines: ["See It Live, Buy", "With Confidence,", "Delivered Safe"],
  },
  mobile: {
    text: "See It Live, Buy With Confidence, Delivered Safe",
  },
};

const SUBHEADING_CONFIG = {
  desktop: {
    size: "text-sm sm:text-base lg:text-lg",
    text: "Experience the future of e-commerce in Nigeria with",
    lines: ["livestream shopping, secure payments, and verified", "products."],
  },
  mobile: {
    text: "Experience the future of e-commerce in Nigeria with livestream shopping, secure payments, and verified products.",
  },
};

// SVG Components for better reusability and bundle optimization
const AppStoreIcon = memo(() => (
  <svg
    className={APP_STORE_CONFIG.iconSize}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
  </svg>
));

AppStoreIcon.displayName = "AppStoreIcon";

const GooglePlayIcon = memo(() => (
  <svg
    className={APP_STORE_CONFIG.iconSize}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="#4285F4"
      d="M3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15Z"
    />
    <path fill="#34A853" d="M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12Z" />
    <path fill="#FBBC05" d="M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
    <path
      fill="#EA4335"
      d="M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81Z"
    />
  </svg>
));

GooglePlayIcon.displayName = "GooglePlayIcon";

// Sub-components for better organization
const Heading = memo(() => (
  <motion.div variants={fadeInUpVariants} initial="hidden" animate="visible">
    <h1 className="hidden md:block text-[28px] sm:text-[36px] lg:text-4xl font-black leading-snug tracking-tight text-black mb-3 font-termina">
      {HEADING_CONFIG.desktop.lines.map((line, index) => (
        <motion.span
          key={index}
          className="block"
          variants={staggerItemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: index * 0.2 }}
        >
          {line}
          {index < HEADING_CONFIG.desktop.lines.length - 1 && <br />}
        </motion.span>
      ))}
    </h1>

    <h1 className="md:hidden w-full text-center text-3xl font-black leading-12 tracking-tight px-8">
      {HEADING_CONFIG.mobile.text}
    </h1>
  </motion.div>
));

Heading.displayName = "Heading";

const Subheading = memo(() => (
  <motion.div
    variants={fadeInUpVariants}
    initial="hidden"
    animate="visible"
    transition={{ delay: 0.3 }}
  >
    <p className="hidden md:block text-sm sm:text-base lg:text-lg text-gray-800 mb-6 leading-relaxed font-sans">
      {SUBHEADING_CONFIG.desktop.text}
      <br className="hidden sm:block" />
      {SUBHEADING_CONFIG.desktop.lines.map((line, index) => (
        <React.Fragment key={index}>
          {line}
          {index < SUBHEADING_CONFIG.desktop.lines.length - 1 && (
            <br className="hidden sm:block" />
          )}
        </React.Fragment>
      ))}
    </p>

    <p className="md:hidden px-8 text-center text-sm font-medium leading-relaxed font-sans mt-2">
      {SUBHEADING_CONFIG.mobile.text}
    </p>
  </motion.div>
));

Subheading.displayName = "Subheading";

const AppStoreButton = memo<AppStoreButtonProps>(
  ({ href, ariaLabel, children, className }) => (
    <motion.div
      variants={buttonHoverVariants}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
    >
      <Link
        href={href}
        className={`md:flex-1 inline-flex items-center justify-center bg-black text-white rounded-md md:rounded-xl ${
          APP_STORE_CONFIG.containerPadding
        } ${
          APP_STORE_CONFIG.buttonPadding
        } hover:bg-gray-900 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black ${
          className || ""
        }`}
        aria-label={ariaLabel}
      >
        {children}
      </Link>
    </motion.div>
  ),
);

AppStoreButton.displayName = "AppStoreButton";

const AppStoreButtons = memo(() => {
  const { ref, isVisible } = useScrollAnimation(0.2, "-50px");

  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="md:max-w-7/10 mt-4 md:mt-0 flex justify-center items gap-2 md:gap-3 mb-8 px-4 md:px-0"
      variants={staggerContainerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      <AppStoreButton
        href={APP_STORE_CONFIG.href}
        ariaLabel="Download on the App Store"
      >
        <AppStoreIcon />
        <div className={APP_STORE_CONFIG.margin}>
          <div
            className={`${APP_STORE_CONFIG.textSizes.small} font-normal leading-tight`}
          >
            Download on the
          </div>
          <div
            className={`${APP_STORE_CONFIG.textSizes.large} md:font-semibold leading-tight -mt-0.5`}
          >
            App Store
          </div>
        </div>
      </AppStoreButton>

      <AppStoreButton
        href={APP_STORE_CONFIG.href}
        ariaLabel="Get it on Google Play"
      >
        <GooglePlayIcon />
        <div className={APP_STORE_CONFIG.margin}>
          <div
            className={`${APP_STORE_CONFIG.textSizes.small} font-normal leading-tight`}
          >
            GET IT ON
          </div>
          <div
            className={`${APP_STORE_CONFIG.textSizes.large} md:font-semibold leading-tight -mt-0.5`}
          >
            Google Play
          </div>
        </div>
      </AppStoreButton>
    </motion.div>
  );
});

AppStoreButtons.displayName = "AppStoreButtons";

// Animated Counter Component
const AnimatedCounter = memo<{ value: string; suffix?: string }>(
  ({ value, suffix = "" }) => {
    const [count, setCount] = React.useState(0);
    const { ref, isVisible } = useScrollAnimation(0.3, "-50px");
    const shouldReduceMotion = useReducedMotion();

    React.useEffect(() => {
      if (!isVisible || shouldReduceMotion) {
        setCount(parseInt(value.replace(/,/g, "")) || 0);
        return;
      }

      const targetValue = parseInt(value.replace(/,/g, "")) || 0;
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepValue = targetValue / steps;
      const stepDuration = duration / steps;

      let currentCount = 0;
      const timer = setInterval(() => {
        currentCount += stepValue;
        if (currentCount >= targetValue) {
          setCount(targetValue);
          clearInterval(timer);
        } else {
          setCount(Math.floor(currentCount));
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }, [isVisible, value, shouldReduceMotion]);

    return (
      <motion.span
        ref={ref as React.RefObject<HTMLSpanElement>}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={
          isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }
        }
        transition={{ duration: 0.5 }}
      >
        {count.toLocaleString()}
        {suffix}
      </motion.span>
    );
  },
);

AnimatedCounter.displayName = "AnimatedCounter";

const StatItem = memo<StatItemProps>(({ value, label, symbol }) => {
  const suffix = symbol === "+" || symbol === "%" ? symbol : "";
  const numericValue = value.replace(/[+%]/g, "");

  return (
    <motion.div
      className="flex flex-col items-center md:items-start"
      variants={staggerItemVariants}
    >
      <div className="text-xs md:text-lg font-medium text-black flex items-center">
        <AnimatedCounter value={numericValue} suffix={suffix} />
      </div>
      <div className="text-[6px] md:text-xs text-gray-600">{label}</div>
    </motion.div>
  );
});

StatItem.displayName = "StatItem";

const Stats = memo(() => {
  const { ref, isVisible } = useScrollAnimation(0.3, "-50px");

  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="flex justify-center md:justify-start gap-5 md:gap-5"
      variants={staggerContainerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      {STATS_CONFIG.map((stat, index) => (
        <React.Fragment key={stat.label}>
          <StatItem
            value={stat.value}
            label={stat.label}
            symbol={stat.symbol}
          />
          {index < STATS_CONFIG.length - 1 && (
            <motion.div className="py-1" variants={staggerItemVariants}>
              <div className="border-r border-gray-500 h-full" />
            </motion.div>
          )}
        </React.Fragment>
      ))}
    </motion.div>
  );
});

Stats.displayName = "Stats";

const HeroImage = memo(() => {
  const { ref, isVisible } = useScrollAnimation(0.2, "-100px");

  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="z-10 flex-1 max-w-xl md:-mt-10 relative h-full"
      variants={imageVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      {/* Blurred circle goes first so it's under */}
      <motion.div
        className="hidden md:block absolute -bottom-20 left-3/5 w-80 h-80 bg-black/95 rounded-full blur-2xl -translate-x-1/2 z-10"
        animate={
          isVisible
            ? {
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.1, 1],
              }
            : {}
        }
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Hero image */}
      <Image
        src="/images/hero.png"
        width={600}
        height={480}
        alt="hero image"
        className="w-full h-auto relative z-10 mx-auto md:m-0"
      />
    </motion.div>
  );
});

HeroImage.displayName = "HeroImage";

// Main component
const HeroSection = memo<HeroSectionProps>(({ className }) => {
  return (
    <motion.div
      className={`flex flex-col items-center md:flex-row md:justify-center pb-16 w-full ${
        className || ""
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Hero Section */}
      <section className="w-full md:w-auto px-4 sm:pr-0 sm:pl-6 lg:pl-8 pt-8 sm:pt-12 lg:pt-16 pb-8 sm:pb-16 lg:pb-20">
        <div className="mx-auto w-full">
          <Heading />
          <Subheading />
          <AppStoreButtons />
          <Stats />
        </div>
      </section>
      <HeroImage />
    </motion.div>
  );
});

HeroSection.displayName = "HeroSection";

export default HeroSection;
