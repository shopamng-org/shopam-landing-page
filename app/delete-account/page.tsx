"use client";

import React, { useState } from "react";
import { OTPRequestForm } from "@/components/delete-account/OTPRequestForm";
import { OTPVerificationForm } from "@/components/delete-account/OTPVerificationForm";
import { SuccessState } from "@/components/delete-account/SuccessState";
import {
  requestDeletionOtp,
  verifyOtpAndDelete,
} from "@/lib/api/delete-account";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Info, CheckCircle2 } from "lucide-react";

type DeletionStep = "REQUEST" | "VERIFY" | "SUCCESS";

export default function DeleteAccountPage() {
  const [step, setStep] = useState<DeletionStep>("REQUEST");
  const [destination, setDestination] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleRequestOTP = async () => {
    setIsLoading(true);
    setError(null);
    try {
      await requestDeletionOtp({ destination });
      setStep("VERIFY");
    } catch (err: unknown) {
      setError(
        err instanceof Error
          ? err.message
          : "An unexpected error occurred. Please try again.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyOTP = async (code: string) => {
    setIsLoading(true);
    setError(null);
    try {
      await verifyOtpAndDelete({ destination, code });
      setStep("SUCCESS");
    } catch (err: unknown) {
      setError(
        err instanceof Error
          ? err.message
          : "Invalid or expired verification code.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOTP = async () => {
    setError(null);
    try {
      await requestDeletionOtp({ destination });
    } catch {
      setError("Failed to resend code. Please try again later.");
    }
  };

  const getStepProgress = () => {
    switch (step) {
      case "REQUEST":
        return 33;
      case "VERIFY":
        return 66;
      case "SUCCESS":
        return 100;
      default:
        return 0;
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col selection:bg-orange-100 selection:text-[#ED8123] overflow-x-hidden font-sans">
      {/* Premium Mesh Gradient Background */}
      <div className="fixed inset-0 -z-50 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#FFF3E0] rounded-full blur-[120px] opacity-40 animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#FFF8E1] rounded-full blur-[120px] opacity-40" />
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-[#ED8123]/5 rounded-full blur-[100px]" />

        {/* Animated Blobs */}
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            rotate: [0, 10, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[30%] left-[15%] w-64 h-64 bg-[#ED8123]/5 rounded-[4rem] blur-[80px]"
        />
      </div>

      {/* Main Content Area */}
      <main className="grow flex flex-col items-center justify-center p-6 md:p-12 lg:p-24 relative">
        {/* Step Indicator (Progress Bar) */}
        {step !== "SUCCESS" && (
          <div className="w-full max-w-lg mb-12 sm:mb-20">
            <div className="flex justify-between items-center mb-4">
              <span
                className={`text-[10px] font-black uppercase tracking-widest ${step === "REQUEST" ? "text-[#f8811a]" : "text-gray-400"}`}
              >
                Identity
              </span>
              <span
                className={`text-[10px] font-black uppercase tracking-widest ${step === "VERIFY" ? "text-[#f8811a]" : "text-gray-400"}`}
              >
                Verification
              </span>
              <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                Completion
              </span>
            </div>
            <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
              <motion.div
                animate={{ width: `${getStepProgress()}%` }}
                transition={{ duration: 0.8, ease: "circOut" }}
                className="h-full bg-gradient-to-r from-orange-300 to-[#ED8123]"
              />
            </div>
          </div>
        )}

        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          {/* Information Section */}
          <AnimatePresence mode="wait">
            {step !== "SUCCESS" && (
              <motion.section
                key="info"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                className="lg:col-span-6 space-y-12"
              >
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 rounded-full border border-orange-100">
                    <span className="w-2 h-2 rounded-full bg-[#ED8123] animate-pulse" />
                    <span className="text-[10px] font-black text-[#ED8123] uppercase tracking-widest">
                      Compliance Protocol
                    </span>
                  </div>
                  <h1 className="text-5xl sm:text-7xl font-black text-gray-900 leading-[1.1] tracking-tighter font-termina">
                    Take your <br />
                    <span className="text-[#ED8123]">privacy</span> back.
                  </h1>
                  <p className="text-lg sm:text-xl text-gray-500 font-medium leading-relaxed max-w-md">
                    We've made it simple to manage your digital footprint. Your
                    data, your choice.
                  </p>
                </div>

                <div className="space-y-8 pt-4">
                  {[
                    {
                      icon: <Info className="w-6 h-6" />,
                      title: "Instant Scrubbing",
                      desc: "Data is removed across all linked systems immediately.",
                    },
                    {
                      icon: <ShieldCheck className="w-6 h-6" />,
                      title: "Secure Handshake",
                      desc: "Multi-factor verification ensures high level security.",
                    },
                    {
                      icon: <CheckCircle2 className="w-6 h-6" />,
                      title: "Policy Compliant",
                      desc: "Full adherence to Google Play data safety standards.",
                    },
                  ].map((item, idx) => (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + idx * 0.1 }}
                      key={idx}
                      className="flex gap-6 group"
                    >
                      <div className="w-14 h-14 rounded-3xl bg-white shadow-xl shadow-gray-100 flex items-center justify-center text-[#ED8123] transition-all duration-300 group-hover:bg-[#ED8123] group-hover:text-white group-hover:scale-110">
                        {item.icon}
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-bold text-gray-900 group-hover:text-[#f8811a] transition-colors uppercase text-xs tracking-wider">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-400 font-medium">
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            )}

            {/* Form Section */}
            <motion.section
              layout
              className={`${step === "SUCCESS" ? "lg:col-span-12" : "lg:col-span-6"} w-full flex justify-center`}
            >
              <div className="w-full max-w-lg">
                <AnimatePresence mode="wait">
                  {step === "REQUEST" && (
                    <motion.div
                      key="request"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                    >
                      <OTPRequestForm
                        destination={destination}
                        setDestination={setDestination}
                        onRequestOTP={handleRequestOTP}
                        isLoading={isLoading}
                        error={error}
                      />
                    </motion.div>
                  )}

                  {step === "VERIFY" && (
                    <motion.div
                      key="verify"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                    >
                      <OTPVerificationForm
                        destination={destination}
                        onVerifyOTP={handleVerifyOTP}
                        onBack={() => setStep("REQUEST")}
                        onResendOTP={handleResendOTP}
                        isLoading={isLoading}
                        error={error}
                      />
                    </motion.div>
                  )}

                  {step === "SUCCESS" && (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.6,
                        type: "spring",
                        damping: 20,
                      }}
                    >
                      <SuccessState />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.section>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
