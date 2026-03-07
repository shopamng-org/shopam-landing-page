"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AlertTriangle, Loader2, ArrowRight } from "lucide-react";
import { motion, Variants } from "framer-motion";

interface OTPRequestFormProps {
  destination: string;
  setDestination: (val: string) => void;
  onRequestOTP: () => void;
  isLoading: boolean;
  error: string | null;
}

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

export const OTPRequestForm: React.FC<OTPRequestFormProps> = ({
  destination,
  setDestination,
  onRequestOTP,
  isLoading,
  error,
}) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full max-w-md mx-auto"
    >
      <Card className="border-none shadow-[0_20px_50px_rgba(0,0,0,0.1)] bg-white/70 backdrop-blur-2xl overflow-hidden rounded-[2rem]">
        <div className="h-1.5 bg-linear-to-r from-orange-300 via-[#ED8123] to-orange-300" />
        <CardHeader className="space-y-2 pt-10 px-8">
          <motion.div variants={itemVariants}>
            <CardTitle className="text-3xl font-black text-gray-900 tracking-tight font-termina">
              Account Deletion
            </CardTitle>
          </motion.div>
          <motion.div variants={itemVariants}>
            <CardDescription className="text-gray-500 text-sm font-medium">
              We need to verify your identity before proceeding with the
              deletion request.
            </CardDescription>
          </motion.div>
        </CardHeader>

        <CardContent className="space-y-8 pb-10 px-8">
          <motion.div
            variants={itemVariants}
            className="group bg-orange-50/50 border-orange-100 rounded-2xl p-5 flex gap-4 transition-all duration-300 hover:bg-orange-50 shadow-sm"
          >
            <div className="bg-orange-100 p-2.5 rounded-xl self-start group-hover:scale-110 transition-transform duration-300">
              <AlertTriangle className="w-5 h-5 text-[#f8811a]" />
            </div>
            <p className="text-[13px] text-orange-900 leading-relaxed font-medium">
              <span className="font-bold underline decoration-orange-300">
                Attention:
              </span>{" "}
              Permanent removal of profile, addresses, history, and rewards.
              This cannot be reversed.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-3">
            <label
              htmlFor="destination"
              className="text-[13px] font-bold text-gray-800 ml-1 uppercase tracking-wider"
            >
              Email or Phone Number
            </label>
            <div className="relative group">
              <Input
                id="destination"
                type="text"
                placeholder="email@example.com"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                disabled={isLoading}
                className="h-14 px-5 bg-white/50 border-gray-200 focus:ring-[#ED8123] focus:border-[#ED8123] rounded-2xl text-base transition-all duration-300 group-hover:border-orange-300"
              />
              <div className="absolute inset-0 rounded-2xl ring-4 ring-[#ED8123]/0 group-hover:ring-[#ED8123]/5 transition-all duration-300 pointer-events-none" />
            </div>
            <p className="text-[11px] text-gray-400 ml-1">
              Example: john@shopam.org or 08012345678
            </p>
          </motion.div>

          {error && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-xs text-red-600 bg-red-50 p-4 rounded-xl border border-red-100 font-medium flex items-center gap-2"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              {error}
            </motion.div>
          )}

          <motion.div variants={itemVariants}>
            <Button
              onClick={onRequestOTP}
              disabled={isLoading || !destination.trim()}
              className="w-full h-14 bg-gray-900 hover:bg-black text-white font-bold rounded-2xl transition-all duration-300 shadow-xl shadow-gray-200 disabled:opacity-50 overflow-hidden relative group"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    Send Verification Code
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </span>
              <div className="absolute inset-0 bg-linear-to-r from-[#ED8123] to-[#f8811a] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </Button>
          </motion.div>
        </CardContent>
      </Card>
      <p className="text-center mt-6 text-xs text-gray-400 font-medium tracking-wide font-termina">
        SECURE DATA REMOVAL &bull; COMPLIANT MODULE
      </p>
    </motion.div>
  );
};
