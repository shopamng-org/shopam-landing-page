"use client";

import React, { useState } from "react";

import { Target, Sparkles } from "lucide-react";

import { motion, useReducedMotion } from "framer-motion";
import { useScrollAnimation } from "@/components/home/hooks/useScrollAnimation";

// Easing functions matching the existing project
const easing = {
  smooth: [0.25, 0.46, 0.45, 0.94] as const,
  easeOut: "easeOut" as const,
  easeInOut: "easeInOut" as const,
};

// Animation variants for consistent entrance animations
const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: easing.smooth,
    },
  },
};

const contentVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easing.smooth,
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const staggerItem = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: easing.smooth,
    },
  },
};

// Particle animation for background decoration
const FloatingParticle = ({ delay = 0, className = "" }) => (
  <motion.div
    className={`absolute w-2 h-2 bg-orange-400/20 rounded-full ${className}`}
    animate={{
      y: [0, -20, 0],
      x: [0, 10, 0],
      opacity: [0.2, 0.8, 0.2],
      scale: [1, 1.2, 1],
    }}
    transition={{
      duration: 4,
      delay,
      repeat: Infinity,
      ease: easing.easeInOut,
    }}
  />
);

// Hero Section with enhanced animations
const HeroSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      ref={ref}
      variants={shouldReduceMotion ? undefined : sectionVariants}
      initial={shouldReduceMotion ? "visible" : "hidden"}
      animate={
        shouldReduceMotion ? "visible" : isVisible ? "visible" : "hidden"
      }
      className="mt-20 md:mt-40 md:pb-12 px-4 sm:px-6 lg:px-8 mx-auto relative overflow-hidden"
    >
      {/* Background floating particles */}
      {!shouldReduceMotion && (
        <>
          <FloatingParticle delay={0} className="top-20 left-10" />
          <FloatingParticle delay={1} className="top-40 right-20" />
          <FloatingParticle delay={2} className="top-60 left-1/3" />
          <FloatingParticle delay={0.5} className="top-32 right-1/4" />
        </>
      )}

      <motion.div
        variants={shouldReduceMotion ? undefined : staggerContainer}
        className="space-y-2 relative z-10"
      >
        <motion.h1
          variants={shouldReduceMotion ? undefined : staggerItem}
          className="text-2xl md:text-4xl font-bold text-gray-900"
        >
          About ShopAm
        </motion.h1>
        <motion.p
          variants={shouldReduceMotion ? undefined : staggerItem}
          className="md:text-lg text-[#ED8123] font-medium"
        >
          Connecting Africa through digital trade
        </motion.p>
      </motion.div>

      {/* Enhanced Team Image with hover effect */}
      <motion.div
        variants={shouldReduceMotion ? undefined : contentVariants}
        className="mt-8 rounded-3xl overflow-hidden shadow-2xl w-full relative group"
      >
        <motion.div
          whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
          transition={{ duration: 0.3, ease: easing.easeOut }}
          className="relative overflow-hidden"
        >
          <img
            src="/images/teamPicture.jpeg"
            alt="ShopAm Team"
            className="w-full max-h-[670px] transition-transform duration-300 group-hover:scale-105"
          />

          {/* Overlay gradient on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

// Who We Are Section with scroll animations
const WhoWeAreSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      ref={ref}
      variants={shouldReduceMotion ? undefined : sectionVariants}
      initial={shouldReduceMotion ? "visible" : "hidden"}
      animate={
        shouldReduceMotion ? "visible" : isVisible ? "visible" : "hidden"
      }
      className="pt-8 md:py-8 px-4 sm:px-6 lg:px-8 mx-auto relative overflow-hidden"
    >
      {/* Background decoration */}
      {!shouldReduceMotion && (
        <motion.div
          className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-orange-200/30 to-transparent rounded-full blur-2xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: easing.easeInOut,
          }}
        />
      )}

      <motion.div
        variants={shouldReduceMotion ? undefined : staggerContainer}
        className="bg-[#FFF8F3] p-6 md:p-10 rounded-3xl relative overflow-hidden"
      >
        {/* Background pattern */}
        {!shouldReduceMotion && (
          <motion.div
            className="absolute inset-0 opacity-5"
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
            style={{
              backgroundImage:
                "radial-gradient(circle, #ED8123 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          />
        )}

        <motion.h2
          variants={shouldReduceMotion ? undefined : staggerItem}
          className="text-2xl md:text-4xl font-bold text-[#ED8123] mb-6 relative z-10"
        >
          Who We Are
        </motion.h2>

        <motion.div
          variants={shouldReduceMotion ? undefined : staggerContainer}
          className="space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed relative z-10"
        >
          <motion.p variants={shouldReduceMotion ? undefined : staggerItem}>
            At ShopAM, we are a passionate team of Nigerians with a shared
            vision — to shape the future of online business across Africa.
          </motion.p>
          <motion.p variants={shouldReduceMotion ? undefined : staggerItem}>
            We specialize in technology, business strategy, design, and digital
            development, combining our skills to create powerful solutions for
            modern e-commerce.
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

// Mission Section with enhanced animations
const MissionSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const shouldReduceMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.section
      ref={ref}
      variants={shouldReduceMotion ? undefined : sectionVariants}
      initial={shouldReduceMotion ? "visible" : "hidden"}
      animate={
        shouldReduceMotion ? "visible" : isVisible ? "visible" : "hidden"
      }
      className="py-4 px-4 sm:px-6 lg:px-8 mx-auto relative overflow-hidden"
    >
      <motion.div
        className={`border-t-4 border-[#ED8123] pt-8 pb-4 rounded-4xl px-4 md:px-6 
        shadow-[inset_0_0_0_1px_rgba(237,129,35,0.35)] relative overflow-hidden transition-all duration-300 cursor-pointer
        ${isHovered ? "shadow-[0_0_30px_rgba(237,129,35,0.2)]" : ""}`}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={shouldReduceMotion ? undefined : { y: -4 }}
      >
        {/* Background glow effect */}
        {!shouldReduceMotion && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-orange-400/5 to-red-400/5 rounded-4xl"
            animate={{
              opacity: isHovered ? 1 : 0,
              scale: isHovered ? 1.02 : 1,
            }}
            transition={{ duration: 0.3, ease: easing.easeOut }}
          />
        )}

        <motion.div
          variants={shouldReduceMotion ? undefined : staggerContainer}
          className="mb-6 relative z-10"
        >
          {/* Icon with enhanced animation */}
          <motion.div
            variants={shouldReduceMotion ? undefined : staggerItem}
            className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mb-4 md:mb-6 relative overflow-hidden"
            whileHover={
              shouldReduceMotion ? undefined : { scale: 1.1, rotate: 5 }
            }
            transition={{ duration: 0.2, ease: easing.easeOut }}
          >
            {/* Icon background animation */}
            {!shouldReduceMotion && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-orange-200 to-red-200"
                animate={{
                  scale: isHovered ? 1.2 : 1,
                  opacity: isHovered ? 0.3 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
            )}
            <Target className="w-6 h-6 text-[#ED8123] relative z-10" />
          </motion.div>

          <div>
            <motion.h2
              variants={shouldReduceMotion ? undefined : staggerItem}
              className="text-xl md:text-3xl font-bold text-gray-900 mb-4 font-sans relative"
            >
              Our Mission
              {/* Animated underline */}
              {!shouldReduceMotion && (
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#ED8123] to-red-400"
                  initial={{ width: 0 }}
                  animate={isHovered ? { width: "100%" } : { width: 0 }}
                  transition={{ duration: 0.3, ease: easing.easeOut }}
                />
              )}
            </motion.h2>

            <motion.p
              variants={shouldReduceMotion ? undefined : staggerItem}
              className="text-gray-700 text-sm md:text-base leading-relaxed"
            >
              To provide smart, accessible, and reliable digital tools that help
              sellers and buyers connect easily — solving the day-to-day
              challenges of online selling while empowering our communities to
              grow together.
            </motion.p>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

// Vision Section with enhanced animations
const VisionSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const shouldReduceMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.section
      ref={ref}
      variants={shouldReduceMotion ? undefined : sectionVariants}
      initial={shouldReduceMotion ? "visible" : "hidden"}
      animate={
        shouldReduceMotion ? "visible" : isVisible ? "visible" : "hidden"
      }
      className="md:py-4 px-4 sm:px-6 lg:px-8 mx-auto relative overflow-hidden"
    >
      <motion.div
        className={`border-t-4 border-[#ED8123] pt-8 pb-4 rounded-4xl px-4 md:px-6 
        shadow-[inset_0_0_0_1px_rgba(237,129,35,0.35)] relative overflow-hidden transition-all duration-300 cursor-pointer
        ${isHovered ? "shadow-[0_0_30px_rgba(147,51,234,0.2)]" : ""}`}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={shouldReduceMotion ? undefined : { y: -4 }}
      >
        {/* Background glow effect with purple theme */}
        {!shouldReduceMotion && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-purple-400/5 to-pink-400/5 rounded-4xl"
            animate={{
              opacity: isHovered ? 1 : 0,
              scale: isHovered ? 1.02 : 1,
            }}
            transition={{ duration: 0.3, ease: easing.easeOut }}
          />
        )}

        <motion.div
          variants={shouldReduceMotion ? undefined : staggerContainer}
          className="mb-6 relative z-10"
        >
          {/* Icon with enhanced animation */}
          <motion.div
            variants={shouldReduceMotion ? undefined : staggerItem}
            className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mb-4 md:mb-6 relative overflow-hidden"
            whileHover={
              shouldReduceMotion ? undefined : { scale: 1.1, rotate: -5 }
            }
            transition={{ duration: 0.2, ease: easing.easeOut }}
          >
            {/* Icon background animation */}
            {!shouldReduceMotion && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-200 to-pink-200"
                animate={{
                  scale: isHovered ? 1.2 : 1,
                  opacity: isHovered ? 0.3 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
            )}
            <Sparkles className="w-6 h-6 text-purple-500 relative z-10" />
          </motion.div>

          <div>
            <motion.h2
              variants={shouldReduceMotion ? undefined : staggerItem}
              className="text-xl md:text-3xl font-bold text-gray-900 mb-4 font-sans relative"
            >
              Our Vision
              {/* Animated underline with gradient */}
              {!shouldReduceMotion && (
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"
                  initial={{ width: 0 }}
                  animate={isHovered ? { width: "100%" } : { width: 0 }}
                  transition={{ duration: 0.3, ease: easing.easeOut }}
                />
              )}
            </motion.h2>

            <motion.p
              variants={shouldReduceMotion ? undefined : staggerItem}
              className="text-gray-700 text-sm sm:text-base leading-relaxed"
            >
              To become {"Africa's "}leading digital marketplace — where
              innovation meets community, and every entrepreneur has the
              opportunity to thrive.
            </motion.p>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

// Main Page Component with enhanced background animations
export default function AboutPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-blue-50/30 via-cyan-50/20 to-white pb-20 relative overflow-hidden"
      initial={shouldReduceMotion ? {} : { opacity: 0 }}
      animate={shouldReduceMotion ? {} : { opacity: 1 }}
      transition={shouldReduceMotion ? {} : { duration: 0.8 }}
    >
      {/* Animated background elements */}
      {!shouldReduceMotion && (
        <>
          <motion.div
            className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-3xl"
            animate={{
              x: [0, 50, 0],
              y: [0, 30, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: easing.easeInOut,
            }}
          />
          <motion.div
            className="absolute top-40 right-20 w-48 h-48 bg-gradient-to-br from-orange-400/10 to-red-400/10 rounded-full blur-3xl"
            animate={{
              x: [0, -30, 0],
              y: [0, 20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: easing.easeInOut,
              delay: 2,
            }}
          />
          <motion.div
            className="absolute bottom-20 left-1/3 w-56 h-56 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl"
            animate={{
              x: [0, 40, 0],
              y: [0, -25, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: easing.easeInOut,
              delay: 4,
            }}
          />
        </>
      )}

      <main>
        <HeroSection />
        <WhoWeAreSection />
        <MissionSection />
        <VisionSection />
      </main>
    </motion.div>
  );
}
