"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Home, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.23, 1, 0.32, 1],
    },
  },
};

const circleVariants: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.3,
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
};

// checkVariants removed as it was unused

export const SuccessState: React.FC = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full max-w-md mx-auto relative"
    >
      {/* Decorative Blobs for Success */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-green-100 rounded-full blur-3xl opacity-60 animate-pulse" />
      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-green-50 rounded-full blur-3xl opacity-60" />

      <Card className="border-none shadow-[0_40px_80px_rgba(34,197,94,0.15)] bg-white text-center overflow-hidden rounded-[3rem]">
        <div className="h-2 bg-linear-to-r from-green-400 to-green-600" />

        <CardHeader className="pt-16 pb-6 px-10">
          <motion.div
            variants={circleVariants}
            className="mx-auto w-24 h-24 bg-green-50 rounded-[2.5rem] flex items-center justify-center mb-8 relative border border-green-100"
          >
            <ShieldCheck className="w-12 h-12 text-green-500 absolute" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-2 border-dashed border-green-200 rounded-[2.5rem]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-4"
          >
            <CardTitle className="text-4xl font-black text-gray-900 tracking-tight font-termina">
              Account Deleted
            </CardTitle>
            <CardDescription className="text-gray-500 font-medium text-base">
              Sensitive data has been safely scrubbed and your profile is now
              deactivated.
            </CardDescription>
          </motion.div>
        </CardHeader>

        <CardContent className="space-y-10 pb-16 pt-4 px-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="p-6 bg-gray-50 rounded-3xl border border-gray-100/50"
          >
            <p className="text-gray-600 text-sm leading-relaxed font-medium">
              We've processed your request in compliance with our data
              protection policies. You will no longer receive communications or
              have access to Shopam services.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
          >
            <Link href="/">
              <Button className="w-full h-16 bg-gray-900 hover:bg-black text-white font-bold rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 shadow-2xl shadow-gray-200 group relative overflow-hidden">
                <span className="relative z-10 flex items-center gap-2 uppercase tracking-widest text-xs">
                  <Home className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                  Return to Homepage
                </span>
                <div className="absolute inset-0 bg-linear-to-r from-green-600 to-green-500 opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0 transition-all duration-500" />
              </Button>
            </Link>
          </motion.div>

          <p className="text-[10px] text-gray-400 font-black tracking-[0.2em] font-termina uppercase">
            Confirmation Reference: SHOPAM-D-58291
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};
