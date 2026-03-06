"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

// Enhanced Typing Text Component with Framer Motion
interface TypingTextProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
}

const TypingText: React.FC<TypingTextProps> = ({
  text,
  delay = 0,
  speed = 70,
  className = "",
}) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setIsStarted(true);
    }, delay);

    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!isStarted) return;

    if (currentIndex < text.length) {
      const timeout = setTimeout(
        () => {
          setDisplayText((prev) => prev + text[currentIndex]);
          setCurrentIndex((prev) => prev + 1);
        },
        currentIndex === 0 ? 200 : speed,
      );

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed, isStarted]);

  const isTypingComplete = currentIndex >= text.length;

  return (
    <div className={`text-white text-xs font-medium font-sans ${className}`}>
      <motion.p
        className="whitespace-pre-wrap font-sans text-white text-[7px] md:text-xs leading-snug"
        // style={{ lineHeight: -10 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {displayText}
        <AnimatePresence>
          {!isTypingComplete && (
            <motion.span
              className="inline ml-0.5  text-[7px] md:text-xs"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              exit={{ opacity: 0 }}
            >
              |
            </motion.span>
          )}
        </AnimatePresence>
      </motion.p>
    </div>
  );
};

// Enhanced Animated Card Component with Framer Motion
interface AnimatedCardProps {
  imageSrc: string;
  imageAlt: string;
  text: string;
  position: string;
  delay?: number;
  index?: number;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({
  imageSrc,
  imageAlt,
  text,
  position,
  delay = 0,
  index = 0,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <motion.div
      className={`absolute ${position}`}
      initial={{
        opacity: 0,
        y: 50,
        scale: 0.9,
      }}
      animate={
        isVisible
          ? {
              opacity: 1,
              y: 0,
              scale: 1,
            }
          : {}
      }
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8,
        delay: index * 0.2,
      }}
    >
      <motion.div
        className="bg-black/30 border border-white/30 backdrop-blur-xs w-30 md:w-55 py-1 md:py-2 pl-1 md:pl-2 pr-4 md:pr-10 flex flex-col md:gap-2 rounded-lg md:rounded-2xl"
        whileHover={{
          scale: 1.02,
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          transition: { duration: 0.2 },
        }}
      >
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
            rotate: -10,
          }}
          animate={
            isVisible
              ? {
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                }
              : {}
          }
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 10,
            delay: 0.3,
          }}
        >
          <Image
            src={imageSrc}
            width={100}
            height={100}
            alt={imageAlt}
            className="h-5 md:h-8 w-5 md:w-8"
          />
        </motion.div>
        <TypingText text={text} delay={delay + 800} />
      </motion.div>
    </motion.div>
  );
};

export default function WhatIsShopAm() {
  return (
    <section id="about" className="relative  bg-white overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Image
          src={"/images/Ellipse.png"}
          width={900}
          height={650}
          alt="what is shopAm"
          className="hidden md:block absolute left-0 w-[550px]"
        />
      </motion.div>

      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:pt-30">
        <div className="flex flex-col-reverse md:flex-row gap-8 lg:gap-16 items-center">
          <div className="relative flex-1 pl-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <Image
                src={"/images/EllipseCircle.png"}
                width={900}
                height={650}
                alt="what is shopAm"
                className="md:hidden absolute left-0 -top-10 z-0 w-full"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Image
                src={"/images/what_is_shopam.png"}
                width={900}
                height={650}
                alt="what is shopAm"
                className="w-full h-full md:max-h-[650px] md:max-w-[720px] z-50"
              />
            </motion.div>

            {/* Enhanced Animated Cards with Framer Motion */}
            <AnimatedCard
              imageSrc={"/images/bitcoin.png"}
              imageAlt="bitcoin"
              text="Shop securely with ShopAm Wallet. Fast payments, no worries."
              position="top-2/3 -translate-y-6 -translate-x-2 left-0"
              delay={1000}
              index={0}
            />

            <AnimatedCard
              imageSrc={"/images/bitcoin1.png"}
              imageAlt="bitcoin"
              text="Discover authentic products. Verified sellers, trusted shopping."
              position="top-0 right-12 md:right-0 translate-x-15"
              delay={1500}
              index={1}
            />

            <AnimatedCard
              imageSrc={"/images/bitcoin2.png"}
              imageAlt="bitcoin"
              text="Swift delivery across Nigeria. Reliable logistics at your doorstep."
              position="bottom-0 right-6 md:right-0 translate-y-5 translate-x-5"
              delay={2000}
              index={2}
            />
          </div>

          {/* Right side - Content */}
          <div className="flex-1 order-1 lg:order-2 text-center lg:text-right md:pr-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            ></motion.div>
            <motion.h1
              className="relative text-[28px] sm:text-[36px] lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              What is ShopAm?
            </motion.h1>

            <motion.div
              className="space-y-2 md:space-y-4 mb-4 md:mb-8 max-w-2xl mx-auto lg:ml-auto lg:mr-0 font-sans"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              {[
                "ShopAm is a mobile marketplace app built to transform e-commerce in Nigeria.",
                "It connects buyers and sellers through secure transactions and verified products.",
                "With livestream shopping and live auctions, commerce becomes interactive and engaging.",
                "ShopAm's in-app wallet and logistics system guarantee safe payments and reliable delivery.",
              ].map((text, index) => (
                <motion.p
                  key={index}
                  className="text-base sm:text-lg text-gray-700 leading-relaxed"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                >
                  {text}
                </motion.p>
              ))}
            </motion.div>

            <motion.div
              className="flex gap-2 md:gap-4 justify-center lg:justify-end items-center -mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="ghost"
                  size="lg"
                  className="group w-full sm:w-auto text-[#ED8123] hover:text-[#ED8123]/90 whitespace-nowrap flex items-center"
                >
                  <span className="mr-2 text-xs md:text-sm text-[#ED8123] hover:text-[#ED8123]/90 ">
                    Read More
                  </span>
                  <motion.svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-[#ED8123]"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <path d="M12 2.4375C10.1087 2.4375 8.25991 2.99833 6.68736 4.04907C5.11482 5.09981 3.88917 6.59327 3.16541 8.34059C2.44164 10.0879 2.25227 12.0106 2.62125 13.8656C2.99022 15.7205 3.90096 17.4244 5.2383 18.7617C6.57564 20.099 8.27951 21.0098 10.1345 21.3788C11.9894 21.7477 13.9121 21.5584 15.6594 20.8346C17.4067 20.1108 18.9002 18.8852 19.9509 17.3126C21.0017 15.7401 21.5625 13.8913 21.5625 12C21.5595 9.46478 20.5511 7.03425 18.7584 5.24158C16.9658 3.44891 14.5352 2.44048 12 2.4375ZM12 20.4375C10.3312 20.4375 8.69992 19.9426 7.31238 19.0155C5.92484 18.0884 4.84338 16.7706 4.20477 15.2289C3.56616 13.6871 3.39907 11.9906 3.72463 10.3539C4.05019 8.71721 4.85379 7.21379 6.03379 6.03379C7.2138 4.85378 8.71722 4.05019 10.3539 3.72462C11.9906 3.39906 13.6871 3.56615 15.2289 4.20477C16.7706 4.84338 18.0884 5.92484 19.0155 7.31238C19.9427 8.69992 20.4375 10.3312 20.4375 12C20.435 14.237 19.5453 16.3817 17.9635 17.9635C16.3817 19.5453 14.237 20.435 12 20.4375ZM15.5625 9V13.5C15.5625 13.6492 15.5032 13.7923 15.3978 13.8977C15.2923 14.0032 15.1492 14.0625 15 14.0625C14.8508 14.0625 14.7077 14.0032 14.6023 13.8977C14.4968 13.7923 14.4375 13.6492 14.4375 13.5V10.3584L9.3975 15.3975C9.29087 15.4969 9.14984 15.551 9.00411 15.5484C8.85839 15.5458 8.71935 15.4868 8.61629 15.3837C8.51323 15.2807 8.45419 15.1416 8.45162 14.9959C8.44905 14.8502 8.50314 14.7091 8.6025 14.6025L13.6416 9.5625H10.5C10.3508 9.5625 10.2077 9.50324 10.1023 9.39775C9.99677 9.29226 9.9375 9.14918 9.9375 9C9.9375 8.85082 9.99677 8.70774 10.1023 8.60225C10.2077 8.49676 10.3508 8.4375 10.5 8.4375H15C15.1492 8.4375 15.2923 8.49676 15.3978 8.60225C15.5032 8.70774 15.5625 8.85082 15.5625 9Z" />
                  </motion.svg>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="default"
                  // size="lg"
                  className="w-full text-xs md:text-sm md:px-6 sm:w-auto bg-[#ED8123] hover:bg-[#ED8123]/90 whitespace-nowrap"
                >
                  Get ShopAm Now
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
