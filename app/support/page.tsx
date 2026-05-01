"use client";

import { useEffect, useState } from "react";

/**
 * SupportRedirectPage
 * Web: /support
 * Mobile Deep Link: shopam://support
 * 
 * This page acts as a bridge for the "Support" deep link.
 * On mobile, it attempts to trigger the ShopAm app.
 * If the app is not installed, it falls back to the Play Store.
 */
export default function SupportRedirectPage() {
  const [status, setStatus] = useState("Redirecting you to ShopAm Support...");

  useEffect(() => {
    // 1️⃣ Construct the deep link
    // This is the internal command recognized by the mobile app
    const appLink = `shopam://support`;

    // 2️⃣ Fallback link (e.g., Play Store or a general info page)
    const storeLink = "https://play.google.com/store/apps/details?id=com.shopam.live";

    // Detect if we are on a mobile device
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      // Attempt to open the app
      window.location.assign(appLink);

      // Fallback after 2000ms if the app doesn't intercept
      const timeout = setTimeout(() => {
        setStatus("Opening Play Store...");
        window.location.href = storeLink;
      }, 2000);

      return () => clearTimeout(timeout);
    } else {
      // On desktop, we can either stay here or provide a different fallback.
      // For consistency with products/order pages, we'll keep the redirect status
      // but maybe suggest downloading the app.
      setStatus("ShopAm Support is best experienced in our mobile app.");
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center font-sans bg-white">
      <div className="w-12 h-12 mb-6 border-4 border-orange-500 rounded-full border-t-transparent animate-spin"></div>
      
      <h1 className="text-xl font-semibold text-gray-900 mb-2">{status}</h1>
      
      <p className="max-w-xs mx-auto text-gray-500 mb-8 leading-relaxed">
        We're connecting you to our support team. If you're on a phone, the ShopAm app should open automatically.
      </p>

      <div className="space-y-4">
        <a
          href="shopam://support"
          className="inline-block px-8 py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors shadow-lg shadow-orange-200"
        >
          Open App Manually
        </a>
        
        <div className="pt-4">
          <p className="text-sm text-gray-400">
            Don't have the app?{" "}
            <a
              href="https://play.google.com/store/apps/details?id=com.shopam.live"
              className="text-orange-600 font-medium hover:underline"
            >
              Download on Play Store
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
