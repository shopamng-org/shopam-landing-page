"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Trash2,
  Package,
  ShoppingCart,
  Heart,
  Gavel,
  ShieldCheck,
  ArrowRight,
  Info,
  Mail,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

export default function DataDeletionPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col selection:bg-orange-100 selection:text-[#ED8123] font-sans">
      {/* Premium Background Elements */}
      <div className="fixed inset-0 -z-50 pointer-events-none overflow-hidden">
        <div className="absolute top-[-5%] left-[-10%] w-[60%] h-[60%] bg-[#FFF3E0] rounded-full blur-[140px] opacity-40" />
        <div className="absolute bottom-[-5%] right-[-10%] w-[60%] h-[60%] bg-[#FFF8E1] rounded-full blur-[140px] opacity-40" />
      </div>

      <main className="grow w-full max-w-7xl mx-auto px-6 py-20 md:py-32">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center md:text-left"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 rounded-full border border-orange-100 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#ED8123] animate-pulse" />
            <span className="text-[10px] font-black text-[#ED8123] uppercase tracking-widest">
              Google Play Data Safety
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-[1.1] tracking-tighter mb-8 italic">
            Manage Your Data on <span className="text-[#ED8123]">Shopam</span>
          </h1>
          <p className="text-xl text-gray-500 font-medium leading-relaxed max-w-2xl mx-auto md:mx-0">
            Learn how to remove your personal information and activity data
            directly within the Shopam mobile app without deleting your entire
            account.
          </p>
        </motion.div>

        <div className="space-y-32">
          {/* 1. Delete Uploaded Products */}
          <section className="space-y-12">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#ED8123] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-orange-100">
                <Package className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-black text-gray-900 tracking-tight uppercase italic">
                1. Delete Uploaded Products
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-8 space-y-6">
                <p className="text-lg text-gray-600 font-medium">
                  Sellers can remove products they have uploaded to the platform
                  at any time.
                </p>
                <div className="space-y-4">
                  {[
                    "Open the Shopam mobile app",
                    "Go to My Products",
                    "Select the product you want to remove",
                    "Tap Delete Product",
                    "Confirm the deletion",
                  ].map((step, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100"
                    >
                      <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-xs font-black text-[#ED8123] border border-orange-100 shrink-0">
                        {idx + 1}
                      </span>
                      <p className="text-gray-700 font-bold">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-4 bg-orange-50/50 rounded-3xl p-8 border border-orange-100/50">
                <h4 className="text-xs font-black text-[#ED8123] uppercase tracking-widest mb-4">
                  Data Removed:
                </h4>
                <ul className="space-y-3">
                  {[
                    "Product listing",
                    "Product images or videos",
                    "Product description and metadata",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex gap-2 text-sm text-gray-600 font-bold"
                    >
                      <ChevronRight className="w-4 h-4 text-[#ED8123] shrink-0" />{" "}
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* 2. Remove Products From Cart */}
          <section className="space-y-12">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center text-white shadow-lg shadow-gray-200">
                <ShoppingCart className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-black text-gray-900 tracking-tight uppercase italic">
                2. Remove Products From Cart
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 bg-white border border-gray-100 rounded-[32px] shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-sm font-black text-[#ED8123] uppercase tracking-widest mb-6">
                  Option 1: Product Page
                </h3>
                <p className="text-gray-700 font-bold leading-relaxed">
                  Tap the <span className="text-black">Add to Cart</span> button
                  again on the product page to remove it from your selection.
                </p>
              </div>
              <div className="p-8 bg-white border border-gray-100 rounded-[32px] shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-sm font-black text-[#ED8123] uppercase tracking-widest mb-6">
                  Option 2: Cart Tab
                </h3>
                <ul className="space-y-3 text-gray-700 font-bold">
                  <li>• Go to the Cart tab</li>
                  <li>• Locate the product</li>
                  <li>• Remove the product or reduce the quantity</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 3. Remove Saved Products */}
          <section className="space-y-12">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-red-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-red-100">
                <Heart className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-black text-gray-900 tracking-tight uppercase italic">
                3. Remove Saved Products
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 bg-white border border-gray-100 rounded-[32px] shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-sm font-black text-red-500 uppercase tracking-widest mb-6">
                  Option 1: Quick Unsave
                </h3>
                <p className="text-gray-700 font-bold">
                  Tap the <span className="text-black">Save</span> button again
                  on the product page to remove it from your wishlist.
                </p>
              </div>
              <div className="p-8 bg-white border border-gray-100 rounded-[32px] shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-sm font-black text-red-500 uppercase tracking-widest mb-6">
                  Option 2: Profile Settings
                </h3>
                <ul className="space-y-2 text-gray-700 font-bold text-sm">
                  <li>1. Open the Account tab</li>
                  <li>2. Tap the Menu button</li>
                  <li>3. Select Profile</li>
                  <li>4. Open the Saved tab</li>
                  <li>5. Remove any products from the list</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 4. Cancel a Booked Auction */}
          <section className="space-y-12">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-100">
                <Gavel className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-black text-gray-900 tracking-tight uppercase italic">
                4. Cancel a Booked Auction
              </h2>
            </div>

            <div className="bg-gray-50 rounded-[40px] p-10 border border-gray-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
              <div className="relative z-10 space-y-6">
                <p className="text-lg text-gray-600 font-medium max-w-2xl">
                  Sellers who booked an auction can cancel it before the auction
                  begins. This removes the scheduled event from your account
                  history.
                </p>
                <div className="flex flex-wrap gap-4">
                  {[
                    "Open Auction tab",
                    "Navigate to booked auction",
                    "Tap Cancel Booked Auction",
                  ].map((text, i) => (
                    <div
                      key={i}
                      className="px-6 py-4 bg-white border border-gray-100 rounded-2xl flex items-center gap-3 shadow-sm"
                    >
                      <span className="text-xs font-black text-blue-600">
                        {i + 1}
                      </span>
                      <span className="font-bold text-gray-800">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 5. Account Deletion */}
          <section className="bg-black rounded-[48px] p-12 md:p-20 text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#ED8123] rounded-full blur-[160px] opacity-20 group-hover:opacity-30 transition-opacity" />
            <div className="relative z-10 space-y-8">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md">
                <ShieldCheck className="w-8 h-8 text-[#ED8123]" />
              </div>
              <div className="space-y-4 max-w-xl">
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight italic">
                  5. Full Account{" "}
                  <span className="text-[#ED8123]">Deletion</span>
                </h2>
                <p className="text-gray-400 font-medium">
                  If you wish to permanently delete your entire Shopam account
                  and all associated personal data, you can submit a formal
                  request through our identity verification page.
                </p>
              </div>
              <Link
                href="/delete-account"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#ED8123] text-white font-black uppercase text-xs tracking-widest rounded-2xl hover:bg-orange-600 transition-all hover:gap-5"
              >
                Go to Account Deletion <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>

          {/* 6. Data Retention */}
          <div className="flex gap-6 p-10 bg-orange-50/50 rounded-[40px] border border-orange-100/50">
            <Info className="w-8 h-8 text-[#ED8123] shrink-0" />
            <div className="space-y-4">
              <h3 className="text-xl font-black uppercase italic tracking-tight">
                6. Data Retention Policy
              </h3>
              <p className="text-gray-600 font-medium leading-relaxed">
                Some limited information may remain temporarily in system
                backups or encrytped logs for security, fraud prevention, and
                legal compliance purposes. This data is automatically and
                permanently removed once the retention period expires according
                to our internal data lifecycle policy.
              </p>
            </div>
          </div>

          {/* 7. Support */}
          <footer className="pt-20 border-t border-gray-100 flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="flex gap-6">
              <div className="w-16 h-16 bg-gray-50 rounded-3xl flex items-center justify-center text-[#ED8123] border border-gray-100 shadow-sm">
                <Mail className="w-7 h-7" />
              </div>
              <div className="space-y-2">
                <h4 className="text-2xl font-black text-gray-900 tracking-tighter italic uppercase">
                  7. Contact Support
                </h4>
                <p className="text-gray-500 font-medium max-w-md">
                  Our privacy team is available if you need help removing
                  specific data or have questions about your digital footprint.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}
