"use client";

import { useEffect, useState } from "react";

/**
 * SellerProductsListRedirectPage
 * Web: /seller/products
 * Mobile Deep Link: shopam://seller/products
 */
export default function SellerProductsListRedirectPage() {
  const [status, setStatus] = useState("Redirecting you to the ShopAm app...");

  useEffect(() => {
    // 1️⃣ Construct the deep link
    const appLink = `shopam://seller/products`;

    // 2️⃣ Fallback to Play Store if app not installed
    const storeLink = "https://play.google.com/store/apps/details?id=com.shopam.live";

    // Attempt to open the app
    window.location.assign(appLink);

    // Fallback after 2000ms
    const timeout = setTimeout(() => {
      setStatus("Opening Play Store...");
      window.location.href = storeLink;
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center font-sans">
      <div className="w-10 h-10 mb-4 border-4 border-orange-500 rounded-full border-t-transparent animate-spin"></div>
      <h1 className="text-lg font-medium text-gray-800">{status}</h1>
      <p className="mt-2 text-sm text-gray-500">
        If you are not redirected,{" "}
        <a
          href="https://play.google.com/store/apps/details?id=com.shopam.live"
          className="text-orange-600 underline"
        >
          click here
        </a>
        .
      </p>
    </div>
  );
}
