"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

/**
 * SellerOrderRedirectPage
 * Web: /order/seller/[orderId]
 * Mobile Deep Link: shopam://order/seller/{orderId}
 */
export default function SellerOrderRedirectPage() {
  const params = useParams();
  const orderId = Array.isArray(params.orderId) ? params.orderId[0] : params.orderId;
  const [status, setStatus] = useState("Redirecting you to the ShopAm app...");

  useEffect(() => {
    if (!orderId) return;

    // 1️⃣ Construct the deep link
    const appLink = `shopam://order/seller/${orderId}`;

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
  }, [orderId]);

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
