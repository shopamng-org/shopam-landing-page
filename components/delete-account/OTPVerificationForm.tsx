"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Loader2, ArrowLeft, ShieldAlert, Timer } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

interface OTPVerificationFormProps {
  destination: string;
  onVerifyOTP: (code: string) => void;
  onBack: () => void;
  onResendOTP: () => void;
  isLoading: boolean;
  error: string | null;
}

const containerVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.08,
      duration: 0.4,
      ease: [0.23, 1, 0.32, 1],
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0 },
};

export const OTPVerificationForm: React.FC<OTPVerificationFormProps> = ({
  destination,
  onVerifyOTP,
  onBack,
  onResendOTP,
  isLoading,
  error,
}) => {
  const [value, setValue] = useState("");
  const [canResend, setCanResend] = useState(false);
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else {
      setCanResend(true);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const handleResend = () => {
    if (canResend) {
      onResendOTP();
      setCanResend(false);
      setTimer(60);
      setValue("");
    }
  };

  const isCodeComplete = value.length === 4;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full max-w-md mx-auto"
    >
      <Card className="border-none shadow-[0_30px_60px_rgba(0,0,0,0.12)] bg-white/80 backdrop-blur-2xl overflow-hidden rounded-[2.5rem]">
        <div className="h-1.5 bg-linear-to-r from-red-500 via-[#ED8123] to-red-500" />
        <CardHeader className="space-y-2 pt-10 px-8">
          <button
            onClick={onBack}
            className="group flex items-center text-[11px] font-bold uppercase tracking-widest text-gray-400 hover:text-[#f8811a] mb-2 transition-all duration-300"
          >
            <ArrowLeft className="w-3.5 h-3.5 mr-1.5 group-hover:-translate-x-1 transition-transform" />
            Edit Details
          </button>
          <motion.div variants={itemVariants}>
            <CardTitle className="text-3xl font-black text-gray-900 tracking-tight font-termina leading-tight">
              Verify Account
            </CardTitle>
          </motion.div>
          <motion.div variants={itemVariants}>
            <CardDescription className="text-gray-500 text-sm font-medium">
              We've sent a 4-digit code to{" "}
              <span className="text-[#f8811a] font-bold decoration-orange-200 underline underline-offset-4">
                {destination}
              </span>
            </CardDescription>
          </motion.div>
        </CardHeader>

        <CardContent className="space-y-8 pb-10 px-8">
          <motion.div variants={itemVariants} className="flex justify-center">
            <InputOTP
              maxLength={4}
              value={value}
              onChange={(value) => setValue(value)}
              disabled={isLoading}
              containerClassName="group flex items-center gap-3"
            >
              <InputOTPGroup className="gap-2">
                <InputOTPSlot
                  index={0}
                  className="w-14 h-20 text-3xl rounded-2xl border-2"
                />
                <InputOTPSlot
                  index={1}
                  className="w-14 h-20 text-3xl rounded-2xl border-2"
                />
                <InputOTPSlot
                  index={2}
                  className="w-14 h-20 text-3xl rounded-2xl border-2"
                />
                <InputOTPSlot
                  index={3}
                  className="w-14 h-20 text-3xl rounded-2xl border-2"
                />
              </InputOTPGroup>
            </InputOTP>
          </motion.div>

          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="text-xs text-red-600 bg-red-50 p-4 rounded-xl border border-red-100 font-bold flex items-center gap-2"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                {error}
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            variants={itemVariants}
            className="bg-red-50/50 border border-red-100 rounded-2xl p-5 flex gap-4"
          >
            <ShieldAlert className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
            <p className="text-[12px] text-red-900 leading-relaxed font-bold italic">
              FINAL STEP: Confirming will result in the permanent destruction of
              your Shopam account.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <Button
              onClick={() => onVerifyOTP(value)}
              disabled={isLoading || !isCodeComplete}
              className="w-full h-14 bg-red-600 hover:bg-red-700 text-white font-black rounded-2xl transition-all duration-300 shadow-xl shadow-red-100 disabled:opacity-40 relative group overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2 tracking-wide uppercase text-xs">
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Executing Deletion...
                  </>
                ) : (
                  "Verify & Delete Account"
                )}
              </span>
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity" />
            </Button>

            <div className="flex flex-col items-center gap-4">
              <button
                onClick={handleResend}
                disabled={!canResend || isLoading}
                className={`text-xs font-black uppercase tracking-widest transition-all duration-300 flex items-center gap-2
                  ${canResend ? "text-[#f8811a] hover:text-[#ED8123]" : "text-gray-300 cursor-not-allowed"}
                `}
              >
                <Timer className={`w-4 h-4 ${!canResend && "animate-pulse"}`} />
                {canResend ? "Resend Deletion Code" : `Resend in ${timer}s`}
              </button>
            </div>
          </motion.div>
        </CardContent>
      </Card>
      <div className="flex justify-center gap-4 mt-8 opacity-20 grayscale scale-75">
        <div className="bg-gray-400 w-12 h-1 rounded-full" />
        <div className="bg-[#ED8123] w-12 h-1 rounded-full" />
        <div className="bg-gray-400 w-12 h-1 rounded-full" />
      </div>
    </motion.div>
  );
};
